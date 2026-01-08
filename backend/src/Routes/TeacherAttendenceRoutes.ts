import { Router } from "express";
const TeacherAttendence=Router();
import verifyToken from "../middleware/verifyToken";
import verifyTeacher from "../middleware/VerifyTeacher";

import { markPresent,markAbsent } from "../Controllers/TeacherAttendenceController";


TeacherAttendence.post('/markAttendence',verifyToken,verifyTeacher,markPresent);
TeacherAttendence.post('/markAbsent',verifyToken,verifyTeacher,markAbsent);

export default TeacherAttendence;