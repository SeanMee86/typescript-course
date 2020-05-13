import express from 'express';
import {json} from 'body-parser';

import todoRoutes from './routes/todos'

const app = express();

app.use(json());

app.use('/todos', todoRoutes);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if(err) res.status(500).json({message: err.message})

})

app.listen(8000, () => console.log(`listening on port 8000`));