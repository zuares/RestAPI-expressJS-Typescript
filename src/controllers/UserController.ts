
import {Request, Response, Router} from 'express';
import IController from './ControllerInterface';
let data : any[] = [
    { id: 1 , name : "Arief" },
    { id: 2 , name : "Budi" },
    { id: 3 , name : "Chugy" },
];


class UserController implements IController {
    public router = Router;

    index(req:Request, res:Response):Response {
        console.log(`Ini adalah index user`)
        return res.send(data);
    }

    create(req:Request, res:Response):Response {
        const {id, name } = req.body;
        data.push({id , name});
        return res.send({msg : "Create success", data : data});
    }

    show(req:Request, res:Response):Response {
        const {id} = req.params;
        let person = data.find(item => item.id == id);
        return res.send(person);
    }

    update(req:Request, res:Response):Response {
        const {id} = req.params;
        const {name} = req.body;
        let person = data.find(item => item.id == id);
        person.name = name;

        return res.send(`Update success`);

    }

    delete(req:Request, res:Response):Response {
        const {id} = req.params;
        let person = data.filter(item => item.id != id);

        return res.send(person);
    }
}

export default new UserController();