import mongoose from 'mongoose';
export class ConnectDatabase {
	static async connect() {
		const DB_URL = `${process.env.DATABASE_NAME}`;

		mongoose.set('strictQuery', true);

		await mongoose
			.connect(DB_URL)

			.then(() => console.log('DB Connected!'))

			.catch((error) => console.log('DB connection error:', error.message));
	}
}
