import Data from './initialData';
import { Player } from '../types/player';
import PlayerModel from '../models/player';

// TODO: Should delete all players first, otherwise will just
// append and won't really be 'seeding'

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
