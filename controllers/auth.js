import prisma from '../prismaClient.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//  register

export const register = async (req, res) => {
    try {
        const { username, email, password, role, age } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                role: role || 'user',
                age: age ? parseInt(age) : null
            },
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                age: true
            }
        });
        res.status(201).json(newUser);
    } catch (err) {
        console.error('Registration Error:', err);
        if (err.code === 'P2002') {
            return res.status(400).send("Username or Email already exists");
        }
        res.status(500).send("Server Error");
    }
};

// Login
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await prisma.user.findUnique({
            where: { username }
        });

        if (!user) {
            return res.status(400).send("Cannot find user");
        }

        if (await bcrypt.compare(password, user.password)) {
            const accessToken = jwt.sign(
                { name: user.username, id: user.id }, 
                process.env.JWT_SECRET || 'your_jwt_secret'
            );
            res.json({ accessToken: accessToken });
        } else {
            res.status(401).send("Not Allowed");
        }
    } catch (err) {
        console.error('Login Error:', err);
        res.status(500).send("Server Error");
    }
};

//  get all users
export const getUsers = async (req, res) => {
    try { 
        const users = await prisma.user.findMany({
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                age: true
            }
        });
        res.json(users);
    } catch (err) {
        console.error('Get Users Error:', err);
        res.status(500).send("Server Error");

    }
};

//  Get users by specific ID

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                age: true
            }
        });

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.json(user);
    } catch (err) {
        console.error('Get User By ID Error:', err);
        res.status(500).send("Server Error");
    }
};
