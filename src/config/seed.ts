import Data from './initialData';
import { Player } from '../types/player';
import PlayerModel from '../models/player';

PlayerModel.destroyAll((err: Error) => {
	if (err) {
		console.log('There was a problem cleaning out existing players: ', err);
	} else {
		console.log('Removed existing players');
	}
});

Data.players.forEach((player) => {
	const newPlayer: Player = player;

	PlayerModel.create(newPlayer, (err: Error, data: Player) => {
		if (err) {
			console.log('There was a problem seeding player: ', err);
		} else {
			console.log('Seeded player: ', data);
		}
	});
});
