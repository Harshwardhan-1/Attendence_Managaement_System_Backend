import {Router} from 'express';
const StudentRoutes=Router();
import verifyToken from '../middleware/verifyToken';
import verifyStudent from '../middleware/VerifyStudent';
import { StudentCheck ,StudentProfile} from '../Controllers/StudentController';

StudentRoutes.post('/CheckStudent',verifyToken,verifyStudent,StudentCheck);
StudentRoutes.get("/checkProfileExist",verifyToken,verifyStudent,StudentProfile);

export default StudentRoutes;