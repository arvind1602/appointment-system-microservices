import { AllData, dataFromId } from "../models/AppointmentData.model.js";

const getAllData = async (req, res) => {
  try {
    const data = await AllData();
    if (data.length == 0) {
      return res.status(200).json({ message: "data not available" });
    }

    res.status(200).json({ message: "success", data: data });
  } catch (error) {
    res
      .status(400)
      .json({ error: `error during Get all data :  , ${error.message}` });
  }
};

const dataById = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await dataFromId(id);

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ data: user[0], message: "Success" });
  } catch (error) {
    res.status(400).json({ error: `Error fetching user: ${error.message}` });
  }
};

export { getAllData, dataById };
