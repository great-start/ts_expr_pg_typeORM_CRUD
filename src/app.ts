import express, { Request, Response } from 'express';
import { appDataSource } from './data-source';

import { config } from './config';
import { apiRouter } from './routes';

const app: express.Application = express();

app.use(express.static('pages'));
app.use(apiRouter);

app.get('/hello', (req: Request, res: Response) => {
    console.log(req.body);
    res.render('hello.html');
});

app.use((req: Request, res: Response) => {
    console.log(req.body);
    res.render('pageNotFound');
});

app.listen(config.PORT, async () => {
    try {
        await appDataSource.initialize();
        console.log('Data Source has been initialized!');
    } catch (e) {
        console.error('Error during Data Source initialization:', e);
    }
    console.log(`Server start at PORT ${config.PORT}!!!!!`);
});
