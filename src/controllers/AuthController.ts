import {Request, Response} from 'express';

// Models
const db = require('../db/models')
// password hash 
import Auth from '../utils/Auth';

class AuthController {
    
    register = async(req:Request, res:Response):Promise<Response> => {
        const {username, email, password} = req.body;
        const createdUser =
                await db.user.create(
                    {
                        username,
                        password : await Auth.hashing(password), 
                        email
                    }
                );
        return res.send({msg : `registrasi success`, data : createdUser});
    }

    login= async (req:Request, res: Response) :Promise <Response> => {
        const {email, password} = req.body;
        const user = await db.user.findOne({where : {email}});
        let valid = await Auth.compare(password, user.password);

        if(valid) {
            let token = Auth.generateToken(user.id, user.username,user.password);
            return res.send(token);
        }

        return res.send("Invalid auth");
        
    }

    profile = (req:Request, res:Response) : Response => {
        return res.send(req.app.locals.credential);
    }

}

export default new AuthController();