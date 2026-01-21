"use client";

import { use } from "react";

export default function Users({ users }) {
  const allUsers = use(users);

  const stringifiedUsers = JSON.stringify(allUsers);

  return <ul>{stringifiedUsers}</ul>;
}
