import db from './db';
import { Player, UpdateablePlayer, QueryParams } from '../types/player';

const validOrderByColumns = ['name', 'winnings', 'country', 'id'];

const allRecords = (queryParams: QueryParams, callback: Function) => {
	const { sortBy, orderBy, total, from, size } = queryParams;
	let query = 'SELECT * FROM player';

	if (sortBy && validOrderByColumns.includes(sortBy)) {
		query = query.concat(` ORDER BY ${sortBy}`);
		if (orderBy) { query = query.concat(` ${orderBy}`); }
	}

	if (from && (size || total)) {
		query = query.concat(` LIMIT ${from}, ${size || total}`);
	}

	if (!from && total) { query = query.concat(` LIMIT ${total}`); }

	db.query(query, (err, result) => {
		if (err) {
			callback(err, null);
			return;
		}
		callback(null, result)
	});
};

const singleRecord = (id: Number, callback: Function) => {
	const query = 'SELECT * FROM player WHERE id = ?';
	db.query(
		query,
		[id],
		(err, result) => {
			if (err) {
				callback(err, null);
				return;
			}
			callback(null, result[0]);
		}
	);
};

const create = (player: Player, callback: Function) => {
	db.query(
		'INSERT INTO player (name, country, winnings, imageUrl) VALUES (?, ?, ?, ?)',
		[player.name, player.country, player.winnings, player.imageUrl],
		(err, result) => {
			if (err) {
				callback(err, null);
				return;
			}
			callback(null, { ...player, id: result.insertId });
		}
	);
};

const update = (id: number, player: UpdateablePlayer, callback: Function) => {
	const query = 'UPDATE player SET ? WHERE id = ?';
	db.query(
		query,
		[player, id],
		(err, result) => {
			if (err) {
				callback(err, null);
			}
			// callback(null, result);
		}
	);
	db.query('SELECT * FROM player WHERE id = ?', id, (err, result) => {
		if (err) {
			callback(err, null);
			return;
		}
		callback(null, result[0]);
	});
};

const destroy = (id: number, callback: Function) => {
	const query = 'DELETE FROM player WHERE id = ?';
	db.query(
		query,
		[id],
		(err, result) => {
			if (err) {
				callback(err, null);
				return;
			}
			if (result.affectedRows === 0) {
				const noExistError = { message: `Player with id ${id} does not exist. Cannot delete.` };
				callback(noExistError, null);
				return;
			}
			callback(null, result);
		}
	);
};

// TODO: implement a destroy all method (primarily to make seeding easier)

export default {
	allRecords,
	singleRecord,
	create,
	update,
	destroy
};
