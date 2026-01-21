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
  const database = await getDB();
  return database.data.users;
};
