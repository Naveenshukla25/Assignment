import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputField } from "../components/InputField";

describe("InputField", () => {
  it("renders with label", () => {
    render(<InputField label="Username" placeholder="Enter username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
  });

  it("shows helper text", () => {
    render(<InputField helperText="Helper text" />);
    expect(screen.getByText("Helper text")).toBeInTheDocument();
  });

  it("shows error message when invalid", () => {
    render(<InputField invalid errorMessage="Required" />);
    expect(screen.getByText("Required")).toBeInTheDocument();
  });

  it("calls onChange when typing", () => {
    const handleChange = jest.fn();
    render(<InputField onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("can clear input when clearable", () => {
    const handleChange = jest.fn();
    render(<InputField value="Test" clearable onChange={handleChange} />);
    const clearButton = screen.getByRole("button", { name: /✕/i });
    fireEvent.click(clearButton);
    expect(handleChange).toHaveBeenCalled();
  });
});
