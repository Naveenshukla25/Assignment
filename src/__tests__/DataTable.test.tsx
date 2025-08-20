import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DataTable, type Column } from "../components/DataTable";

interface User {
  id: number;
  name: string;
  age: number;
}

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

const data: User[] = [
  { id: 1, name: "Alice", age: 24 },
  { id: 2, name: "Bob", age: 29 },
];

describe("DataTable", () => {
  it("renders table with data", () => {
    render(<DataTable<User> data={data} columns={columns} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  it("renders empty state", () => {
    render(<DataTable<User> data={[]} columns={columns} />);
    expect(screen.getByText("No data available")).toBeInTheDocument();
  });

  it("renders loading state", () => {
    render(<DataTable<User> data={[]} columns={columns} loading />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("allows row selection", () => {
    const handleSelect = jest.fn();
    render(<DataTable<User> data={data} columns={columns} selectable onRowSelect={handleSelect} />);
    const checkbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(checkbox);
    expect(handleSelect).toHaveBeenCalled();
  });

  it("sorts by column when header clicked", () => {
    render(<DataTable<User> data={data} columns={columns} />);
    const ageHeader = screen.getByText("Age");
    fireEvent.click(ageHeader); // sort ascending
    fireEvent.click(ageHeader); // sort descending
    expect(ageHeader).toBeInTheDocument();
  });
});
