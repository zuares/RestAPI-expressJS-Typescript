
import {Request, Response, Router} from 'express';
import TodoServices from '../services/TodoServices';
import IController from './ControllerInterface';

// database 


class TodoController implements IController {
    public router = Router;

    async index(req:Request, res:Response):Promise<Response> {
        const services: TodoServices = new TodoServices(req);
        const todos = await services.getAll();
        return res.send({data:todos, message : ""})
    }

    async create(req:Request, res:Response):Promise<Response> {
        const services: TodoServices = new TodoServices(req);
        const todo = await services.create();
        return res.send({data:todo, message : "Todo created"});
    }

    async show(req:Request, res:Response):Promise<Response> {
        const services: TodoServices = new TodoServices(req);
        const todo = await services.getOne();
        return res.send( {
            data : todo,
            message : ""
        } );

    }

    async update(req:Request, res:Response):Promise<Response> {
        const services: TodoServices = new TodoServices(req);
        await services.update();
        return res.send({
             data : "" ,
             message : "Todo updated"
        });
    }

    async delete(req:Request, res:Response):Promise<Response> {
        const services: TodoServices = new TodoServices(req);
        await services.delete();
        return res.send({data : " " , message : "Todo deleted"});
    }
}

export default new TodoController();