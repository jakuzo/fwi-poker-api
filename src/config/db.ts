// ATTENTION: Big no-no that the database credentials are hard-coded here.
// Ideally, these should be pulled from environment variables.
// But this suffices for the exercise :)

export default {
	host: process.env.NODE_ENV === 'production' ? 'localhost' : 'localhost',
	user: process.env.NODE_ENV === 'production' ? 'dev' : 'dev',
	password: process.env.NODE_ENV === 'production' ? 'password' : 'password',
	database: process.env.NODE_ENV === 'production' ? 'fwi-poker' : 'fwi-poker'
};
