import React, { useState } from "react";
import { InputField } from "./components/InputField";
import { DataTable, type Column } from "./components/DataTable";

interface User {
  id: number;
  name: string;
  age: number;
}

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const data: User[] = [
    { id: 1, name: "Alice", age: 24 },
    { id: 2, name: "Bob", age: 29 },
    { id: 3, name: "Charlie", age: 31 },
  ];

  const columns: Column<User>[] = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "age", title: "Age", dataIndex: "age", sortable: true },
  ];

  return (
    <div className="p-6 space-y-6">
      <InputField
        label="Username"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        helperText="This is a helper text"
        errorMessage="This field is required"
        invalid={!inputValue}
        variant="outlined"
        size="md"
        clearable
      />

      <DataTable<User>
        data={data}
        columns={columns}
        selectable
        onRowSelect={(rows) => console.log("Selected:", rows)}
      />
    </div>
  );
};

export default App;
