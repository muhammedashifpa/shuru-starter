import { NextRequest, NextResponse } from "next/server";
import { success, failure } from "@/lib/response";

// GET /api/users
export async function GET() {
  try {
    const users = [{ id: 1, name: "Ashif" }];
    return success(users);
  } catch (err) {
    return failure("Failed to fetch users", 500);
  }
}

// POST /api/users
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.name) {
      return failure("Name is required", 400);
    }

    const newUser = { id: Date.now(), ...body };
    return success(newUser, 201);
  } catch (err) {
    return failure("Invalid request", 400);
  }
}
