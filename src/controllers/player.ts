import { Request, Response } from 'express';

import { Player, UpdateablePlayer } from '../types/player';
import { PageParams } from '../types/page';
import PlayerModel from '../models/player';

/**
 * TODO: DOCUMENT ME
 * @param _
 * @param res
 */
const index = (req: Request, res: Response): void => {
	// eslint-disable-next-line no-unused-vars
	const pageParams: PageParams = req.query;

	PlayerModel.allRecords((error: Error, data: Player[]) => {
		if (error) {
			res.status(500).json({ error: error.message });
		} else {
			res.json({ ...pageParams, items: data });
		}
	});
};

/**
 * TODO: DOCUMENT ME
 * @param req
 * @param res
 */
const show = (req: Request, res: Response): void => {
	const id: number = Number(req.params.id);
	PlayerModel.singleRecord(id, (error: Error, data: Player) => {
		if (error) {
			res.status(500).json({ error: error.message });
		} else {
			res.json(data);
		}
	});
};

/**
 * TODO: DOCUMENT ME
 * @param req
 * @param res
 */
const create = (req: Request, res: Response) => {
	const newPlayer: Player = req.body;
	PlayerModel.create(newPlayer, (error: Error, data: Player) => {
		if (error) {
			res.status(500).json({ error: error.message });
		} else {
			res.json(data);
		}
	});
};

/**
 * TODO: DOCUMENT ME
 * include route: PUT: players/:id
 * @param req
 * @param res
 */
const update = (req: Request, res: Response) => {
	const id: number = Number(req.params.id);
	const player: UpdateablePlayer = req.query;

	PlayerModel.update(id, player, (error: Error, data: Player) => {
		if (error) {
			res.status(500).json({ error: error.message });
		} else {
			res.json(data);
		}
	});
};

/**
 * TODO: DOCUMENT ME
 * @param req
 * @param res
 */
const destroy = (req: Request, res: Response) => {
	const id: number = Number(req.params.id);
	PlayerModel.destroy(id, (error: Error, _: Player) => {
		if (error) {
			res.status(500).json({ error: error.message });
		} else {
			res.json({ message: `Destroyed player with id: ${id}` });
		}
	});
};

export default {
	index,
	show,
	create,
	update,
	destroy,
};
