import db from "../DB/db.connection.js";

const AllData = async () => {
  try {
    const [row] = await db.execute(`select * from appointment_data`);
    return row;
  } catch (error) {
    throw new Error("error during allData : ", error);
  }
};

const dataFromId = async (id) => {
  try {
    const [rows] = await db.execute(`SELECT * FROM appointment_data WHERE user_id = ?`, [id]);
    return rows;
  } catch (error) {
    throw new Error(`Database error during search by ID: ${error.message}`);
  }
};

export { AllData, dataFromId };
