import {Request,Response,NextFunction} from 'express';
const verifyTeacher=(req:Request,res:Response,next:NextFunction)=>{
const user=(req as any).user;
if(!user || user.role!== 'Teacher'){
    return res.status(403).json({
        message:"Access Denied Talk to Coordinator regarding to that"
    });
}
next();
}

export default verifyTeacher;