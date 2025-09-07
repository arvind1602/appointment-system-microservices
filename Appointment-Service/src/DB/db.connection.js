import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "aayush",
  database: "Doctors",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test DB connection at startup
(async () => {
  try {
    const conn = await db.getConnection();
    console.log("✅ Connected to MySQL database");
    conn.release();
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
  }
})();

export default db;
