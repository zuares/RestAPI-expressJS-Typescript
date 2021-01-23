
import {Request, Response, Router} from 'express';


class AuthController {
    public router = Router;

    index(req:Request, res:Response):Response {
        return res.send("");
    }
    
    create(req:Request, res:Response):Response {
        return res.send("");
    }

}

export default new AuthController();