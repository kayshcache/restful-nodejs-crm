import express from 'express';
import routes from './src/routes/crmRoutes';
require('dotenv').config();

const app = express();
const PORT = 4000;
const DB_PASS = process.env.DB_PASS;

routes(app);

app.get('/', (req, res) =>
	res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
	console.log(`Your server is running on port ${PORT}`)
);
