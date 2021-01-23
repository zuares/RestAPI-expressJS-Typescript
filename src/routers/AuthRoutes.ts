// Controllers 
import AuthController from '../controllers/AuthController';
// Abstract Class
import BaseRoutes from './BaseRouter';

class AuthRoutes extends BaseRoutes{

    public routes():void {
        this.router.get( '/',  AuthController.index );
        this.router.post( '/',  AuthController.create );
    }
}

export default new AuthRoutes().router;