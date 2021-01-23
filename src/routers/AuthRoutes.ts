// Controllers 
import AuthController from '../controllers/AuthController';
// Abstract Class
import BaseRoutes from './BaseRouter';
// Validasi data 
import validate from '../middlewares/AuthValidator';
// Middleware auth 
import {auth} from '../middlewares/AuthMiddleware';

class AuthRoutes extends BaseRoutes{

    public routes():void {
        this.router.post( '/register', validate, AuthController.register );
        this.router.post( '/login',validate,  AuthController.login );
        this.router.get( '/profile', auth , AuthController.profile );
    }
}

export default new AuthRoutes().router;