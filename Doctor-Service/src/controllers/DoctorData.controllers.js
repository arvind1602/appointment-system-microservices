import {
  getAllDoctors,
  formId,
  create,
  deleteData,
} from "../models/doctor.model.js";

const doctorList = async (req, res) => {
  try {
    const doctors = await getAllDoctors();
    res.status(200).json({ data: doctors, message: "success" });
  } catch (error) {
    res.status(400).json({ error: `Error fetching doctors: ${error.message}` });
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await formId(id);

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ data: user[0], message: "Success" });
  } catch (error) {
    res.status(400).json({ error: `Error fetching user: ${error.message}` });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, experience, description } = req.body;
    if (!name || !email || !experience || !description) {
      return res.status(400).json({ message: "all field are required" });
    }
    await create(name, email, experience, description);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ error: `Error creating data: ${error.message}` });
  }
};

const deleteUserbyId = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await formId(id);

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const result = await deleteData(id);
    res.status(200).json({ message: "User deleted  successfully" });
  } catch (error) {
    res.status(400).json({ error: `Error delete data: ${error.message}` });
  }
};

export { doctorList, getUserById, createUser, deleteUserbyId };
