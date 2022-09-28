
const express = require('express');
const app = express();

import { usersRouter } from './routes/users.routes';


app.use(express.json());

app.use('/users', usersRouter);


app.listen(3333, () => console.log('server running on port 3333'));

