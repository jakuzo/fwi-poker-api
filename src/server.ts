import express from 'express';
import PlayerRouter from './routes/player';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (_, res) => {
	res.json({ message: 'fwi-poker-api' });
});

app.use('/players', PlayerRouter);

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
