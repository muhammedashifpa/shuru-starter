import { getUsersFromDB } from "@/lib/db";

export function getUsersWithDelay() {
  return new Promise<{ id: number; name: string }[]>(
    async (resolve, reject) => {
      try {
        const users = await getUsersFromDB();
        setTimeout(() => {
          resolve(users);
        }, 2000);
      } catch (error) {
        reject(error);
      }
    },
  );
}
