import { getAllDoctors } from "../models/doctor.model.js";

const doctorList = async (req, res) => {
  try {
    const doctors = await getAllDoctors();
    res.status(200).json({ data: doctors, message: "success" });
  } catch (error) {
    res.status(400).json({ error: `Error fetching doctors: ${error.message}` });
  }
};

export { doctorList };
