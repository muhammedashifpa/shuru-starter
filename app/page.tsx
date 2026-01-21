import Users from "@/components/ui/Users";
import { getUsersWithDelay } from "@/services/common.services";
import { Suspense } from "react";

export default async function Home() {
  // const users = (await getDB()).data.users;
  const users = getUsersWithDelay();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Suspense fallback={<div>Loading...</div>}>
        <Users users={users} />
      </Suspense>
    </div>
  );
}
