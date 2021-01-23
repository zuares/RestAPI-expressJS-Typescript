
// Controllers 
import UserController from '../controllers/UserController';
// Abstract Class
import BaseRoutes from './BaseRouter';
// Middlewar
import {auth} from '../middlewares/AuthMiddleware';

class UserRoutes extends BaseRoutes {
    public routes():void {
        this.router.get( '/',  auth , UserController.index );
        this.router.post( '/',  UserController.create );
        this.router.get( '/:id',  UserController.show );
        this.router.put( '/:id',  UserController.update );
        this.router.delete( '/:id',  UserController.delete );
    }
}

export default new UserRoutes().router;