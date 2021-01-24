import express, {Application, Request, Response} from 'express';
// Parse body to json
import bodyParser  from 'body-parser';
// Logger 
import morgan from 'morgan';
// cross origin
import cors from 'cors';
// compress json
import compression from 'compression';
// helmet
import helmet from 'helmet';
// Routers 
import UserRoutes from './routers/UserRoutes';
import AuthRoutes from './routers/AuthRoutes';
import TodoRoutes from './routers/TodoRoutes';
// Dotenv
import {config as dotenv} from 'dotenv';

class App {
    public app: Application ;

    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
        dotenv();
    }

    protected plugins():void {
        this.app.use(bodyParser.json());
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    protected  routes():void{
        this.app.use('/api/v1/users', UserRoutes);
        this.app.use('/api/v1/auth', AuthRoutes);
        this.app.use('/api/v1/todos', TodoRoutes);
    }
}

const port :number = 8000;
const app = new App().app;
// Running server
app.listen(port, () => {
    console.log(`Aplikasi ini berjalan di port ${port}`);
    console.log(process.env.DB_HOST);
});
