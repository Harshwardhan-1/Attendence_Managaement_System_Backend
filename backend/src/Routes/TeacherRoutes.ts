import {Router} from 'express';
const TeacherRoutes=Router();
import verifyToken from '../middleware/verifyToken';
import verifyTeacher from '../middleware/VerifyTeacher';
import { checkTeacher,TeacherExist,fetch } from '../Controllers/TeacherController';

TeacherRoutes.get('/TeacherExist',verifyToken,verifyTeacher,TeacherExist);
TeacherRoutes.get('/getTeacher',verifyToken,verifyTeacher,fetch);
TeacherRoutes.post('/checkTeacher',verifyToken,verifyTeacher,checkTeacher);

export default TeacherRoutes;