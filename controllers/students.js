import prisma from '../prismaClient.js';

// 1. Create a student
export const createStudent = async (req, res) => {
    try {
        const { name, class: studentClass, age } = req.body;
        const newStudent = await prisma.student.create({
            data: {
                name,
                class: studentClass,
                age
            }
        });
        res.status(201).json(newStudent);
    } catch (error) {
        console.error('Create Student Error:', error);
        res.status(500).json({ message: "Error creating student", error: error.message });
    }
};

// 2. Get all students
export const getAllStudents = async (req, res) => {
    try {
        const allStudents = await prisma.student.findMany();
        res.json(allStudents);
    } catch (error) {
        console.error('Get All Students Error:', error);
        res.status(500).json({ message: "Error fetching students" });
    }
};

// 3. Get a student by ID
export const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await prisma.student.findUnique({
            where: { id: parseInt(id) }
        });
        
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        console.error('Get Student By ID Error:', error);
        res.status(500).json({ message: "Error fetching student" });
    }
};

// 4. Update a student
export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, class: studentClass, age } = req.body;
        
        const updateData = {};
        if (name !== undefined) updateData.name = name;
        if (studentClass !== undefined) updateData.class = studentClass;
        if (age !== undefined) updateData.age = age;

        const updatedStudent = await prisma.student.update({
            where: { id: parseInt(id) },
            data: updateData
        });

        res.json({ message: "Student was updated!", student: updatedStudent });
    } catch (error) {
        console.error('Update Student Error:', error);
        if (error.code === 'P2025') {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(500).json({ message: "Error updating student", error: error.message });
    }
};

// 5. Delete a student
export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.student.delete({
            where: { id: parseInt(id) }
        });

        res.json({ message: "Student was deleted!" });
    } catch (error) {
        console.error('Delete Student Error:', error);
        if (error.code === 'P2025') {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(500).json({ message: "Error deleting student" });
    }
};
