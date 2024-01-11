import { render } from "@testing-library/react";
import { app, Auth, db } from "./firebase.util"; // Importing the Firebase configuration
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.util";
import App from "../App";

// Mocking Firebase
jest.mock("firebase/app", () => ({
  initializeApp: jest.fn(),
}));

jest.mock("firebase/auth", () => ({
  getAuth: jest.fn(),
}));

jest.mock("firebase/database", () => ({
  getDatabase: jest.fn(),
}));

describe("Firebase Configuration Tests", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test("initializes the app with the correct config", () => {
    render(<App />);
    // Assert that initializeApp was called with the correct config
    // expect(initializeApp).toHaveBeenCalledWith(firebaseConfig);
    expect(initializeApp).toHaveBeenCalledWith(firebaseConfig);
  });

  it("gets Auth and Database instances", () => {
    render(<App />);

    // Assert that getAuth and getDatabase were called
    expect(getAuth).toHaveBeenCalledWith(app);
    expect(getDatabase).toHaveBeenCalled();
  });
});
