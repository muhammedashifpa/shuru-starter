"use client";

import { notFound } from "next/navigation";
import { use } from "react";

export default function Users({ users }) {
  const allUsers = use(users);
  if (!allUsers || allUsers.length === 0) notFound();

  return (
    <ul>
      {allUsers.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
