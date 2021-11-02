import { Request, Response } from 'express';

import { Player, UpdateablePlayer, QueryParams } from '../types/player';
import PlayerModel from '../models/player';

const index = (req: Request, res: Response): void => {
	const requestParams: QueryParams = req.query;

	PlayerModel.allRecords(requestParams, (error: Error, data: Player[]) => {
		if (error) {
			res.status(500).json({ error: error.message });
		} else {
			res.json({ ...requestParams, items: data });
		}
	});
};

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
