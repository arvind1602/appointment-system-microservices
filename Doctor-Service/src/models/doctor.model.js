import db from "../DB/database.js";

const getAllDoctors = async () => {
  try {
    const [rows] = await db.execute("SELECT * FROM data");
    return rows;
  } catch (error) {
    throw new Error(`Database error: ${error.message}`);
  }
};

const formId = async (id) => {
  try {
    const [rows] = await db.execute(`SELECT * FROM data WHERE id = ?`, [id]);
    return rows;
  } catch (error) {
    throw new Error(`Database error during search by ID: ${error.message}`);
  }
};

const create = async (name, email, experience, description) => {
  try {
    const result = await db.execute(
      `INSERT INTO data (name, email, experience, description) VALUES (?, ?, ?, ?)`,
      [name, email, experience, description]
    );
    return result;
  } catch (error) {
    throw new Error(`Database error during create data: ${error.message}`);
  }
};

const deleteData = async (id) => {
  try {
    const result = await db.execute(`DELETE FROM data WHERE id = ?`, [id]);
    return result;
  } catch (error) {
    throw new Error(`Database error during delete data: ${error.message}`);
  }
};

export { getAllDoctors, formId, create, deleteData };
