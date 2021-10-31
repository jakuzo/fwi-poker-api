import mysql from 'mysql';
import dbconfig from '../config/db';

const connection = mysql.createConnection({ ...dbconfig });

connection.connect(error => {
	if (error) throw error;
	console.log(`Successfully connected to database: ${dbconfig.database}`);
});

export default connection;
