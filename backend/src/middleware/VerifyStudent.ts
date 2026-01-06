import {Request,Response,NextFunction} from 'express';
export const verifyStudent=(req:Request,res:Response,next:NextFunction)=>{
    const user=(req as any).user;
    if(!user || user.role!== 'Student'){
        return res.status(403).json({
            message:"Access Denied Not allowed",
        });
    }
    next();
}


export default verifyStudent;