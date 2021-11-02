import express from 'express';
import PlayerRouter from './routes/player';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

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

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'FWI Backend Poker Challenge',
			version: '0.1.0',
			description: 'A simple RESTful API built with Express.js, TypeScript, MySQL, and Love.',
			license: {
				name: 'MIT', url: 'https://spdx.org/licenses/MIT.html',
			},
			contact: {
				name: 'Jack Campanella',
			},
		},
		servers: [
			{ url: 'http://localhost:3001', },
			{ url: 'http://44.225.53.153:3001', },
		],
	},
	apis: ['**/*.ts'],
};

const spec = swaggerJsDoc(options);
app.use('/doc',
	swaggerUi.serve,
	swaggerUi.setup(spec)
)

app.listen(3001, () => {
	console.log('Listening on port 3001');
});
