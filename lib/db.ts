import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import path from "path";

type Data = {
  users: { id: number; name: string }[];
};

// Absolute path
const file = path.join(process.cwd(), "db.json");
const adapter = new JSONFile<Data>(file);

// Singleton DB instance
const db = new Low<Data>(adapter, { users: [] });

export async function getDB() {
  await db.read();
  db.data ||= { users: [] };
  return db;
}

export const getUsersFromDB = async () => {
  // db.data.users.push({ id: 3, name: "Ashif" });
  // await db.write();
  const database = await getDB();
  return database.data.users;
};

export const setUsersToDB = async (users: { id: number; name: string }[]) => {
  const database = await getDB();
  database.data.users.push(...users); // ✅ append
  await database.write();
  return database.data.users;
};
