import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

dotenv.config();

const app = express();
const PORT = 3000;
const DB_CREDENTIALS = process.env.DB_CREDENTIALS;

// Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${DB_CREDENTIALS}@coder-g8zwo.gcp.mongodb.net/test?retryWrites=true&w=majority`, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});

// Body Parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
	res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
	console.log(`Your server is running on port ${PORT}`)
);
