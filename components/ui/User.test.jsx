import { render, screen, act } from "@testing-library/react";
import { Suspense } from "react";
import Users from "./Users";

// Mock notFound to THROW (realistic behavior)
jest.mock("next/navigation", () => ({
  notFound: jest.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

describe("<Users />", () => {
  it("renders users when data exists", async () => {
    const usersPromise = Promise.resolve([
      { id: 1, name: "Ashif" },
      { id: 2, name: "John" },
    ]);

    await act(async () => {
      render(
        <Suspense fallback={<div>Loading...</div>}>
          <Users users={usersPromise} />
        </Suspense>,
      );
    });
    expect(screen.getByText("Ashif")).toBeInTheDocument();
    expect(screen.getByText("John")).toBeInTheDocument();
  });

  it("throws notFound when users list is empty", async () => {
    const emptyUsersPromise = Promise.resolve([]);

    await expect(async () => {
      await act(async () => {
        render(
          <Suspense fallback={<div>Loading...</div>}>
            <Users users={emptyUsersPromise} />
          </Suspense>,
        );
      });
    }).rejects.toThrow("NEXT_NOT_FOUND");
  });
});
