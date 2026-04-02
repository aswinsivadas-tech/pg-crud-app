import express from 'express';
import { register, login, getUsers, getUserById } from '../controllers/auth.js';
import validateRequest from '../middleware/validationMiddleware.js';
import { registerSchema, loginSchema } from '../validations/authValidation.js';
import authenticateToken from '../middleware/authMiddleware.js';

const router = express.Router();

// Register
router.post('/register', validateRequest(registerSchema), register);

// Login
router.post('/login', validateRequest(loginSchema), login);

// Get all users (Protected)
router.get('/users', authenticateToken, getUsers);

// Get specific user by ID (Protected)
router.get('/users/:id', authenticateToken, getUserById);

export default router;
