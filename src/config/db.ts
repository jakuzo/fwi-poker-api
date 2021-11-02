// ATTENTION: Big no-no that the database credentials are hard-coded here.
// Ideally, these should be pulled from environment variables.
// But this suffices for the exercise :)

const prodDbHost = 'ls-9fb789f42b47c1f5c9852b1237bc42a98cee88af.cuzqvmimwovm.us-west-2.rds.amazonaws.com';

export default {
	host: process.env.NODE_ENV === 'production' ? prodDbHost : 'localhost',
	user: process.env.NODE_ENV === 'production' ? 'fwipokerdbuser' : 'dev',
	// password: process.env.NODE_ENV === 'production' ? 'password' : 'password',
	// database: process.env.NODE_ENV === 'production' ? 'fwi-poker' : 'fwi-poker'
	password: 'password',
	database: 'fwi-poker'
};
