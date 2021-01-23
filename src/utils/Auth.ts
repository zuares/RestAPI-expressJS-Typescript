import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class Auth {
    public static hashing = (pass: string) : Promise<string> => {
        return bcrypt.hash(pass, 10);
    }

    public static compare = async (pass: string, passDb:string) : Promise<boolean> => {
        return await bcrypt.compare(pass, passDb);
    }

    public static generateToken = (id:number, username:string, password : string) : string => {
        const secretKey:string = process.env.JWT_SECRET_KEY || "secret";
        const token:string = jwt.sign( {id, username, password}, secretKey );
        return token;
    }
}

export default Auth;