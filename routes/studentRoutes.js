import express from 'express';
import authenticateToken from '../middleware/authMiddleware.js';
import validateRequest from '../middleware/validationMiddleware.js';
import { createStudentSchema, updateStudentSchema } from '../validations/studentValidation.js';
import {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} from '../controllers/students.js';

const router = express.Router();

// 1. Create a student
router.post('/', authenticateToken, validateRequest(createStudentSchema), createStudent);

// 2. Get all students
router.get('/', authenticateToken, getAllStudents);

// 3. Get a student by ID
router.get('/:id', authenticateToken, getStudentById);

// 4. Update a student
router.patch('/:id', authenticateToken, validateRequest(updateStudentSchema), updateStudent);

// 5. Delete a student
router.delete('/:id', authenticateToken, deleteStudent);

export default router;

