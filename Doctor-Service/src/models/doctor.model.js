import db from "../DB/database.js";

const getAllDoctors = async () => {
  try {
    const [rows] = await db.execute("SELECT * FROM data");
    return rows;
  } catch (error) {
    throw new Error(`Database error: ${error.message}`);
  }
};



export { getAllDoctors };
