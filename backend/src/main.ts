import express, {json} from 'express';

const app = express();

app.use(json());
app.use('/api/v1/tasks',tas)