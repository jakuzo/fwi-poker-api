import express from 'express';
import PlayerRouter from './routes/player';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (_, res) => {
	res.json({ message: 'fwi-poker-api' });
});

// The server must accept OPTIONS request otherwise preflight won't pass
// and the request will be denied usually showing a cors error.
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}

	next();
});

app.use('/players', PlayerRouter);

app.listen(3001, () => {
	console.log('Listening on port 3001');
});
