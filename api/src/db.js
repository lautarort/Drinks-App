import mongoose from "mongoose";
import config from "./config.js";

(async () => {
	try {
		const db = await mongoose.connect(
			`mongodb://${config.MONGO_HOST}/${config.MONGO_DB}`, {
				useUnifiedTopology: true,
				useNewUrlParser: true,
				 // user: config.MONGO_USER,
				 // pass: config.MONGO_PASSWORD
			}
		);
		console.log(` |> database connected: ${db.connection.name}`)
	}
	catch (error) {
		console.log(error);
	}
})();