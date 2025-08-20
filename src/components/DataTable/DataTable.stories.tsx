import type { Meta, StoryObj } from "@storybook/react";
import { DataTable, type Column } from "./DataTable";

interface User {
  id: number;
  name: string;
  age: number;
}

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataTable<User>>;

const data: User[] = [
  { id: 1, name: "Naveen ", age: 23 },
  { id: 2, name: "Krishna ", age: 22 },
  { id: 3, name: "Goapal", age: 24 },
];

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

export const Default: Story = {
  render: () => <DataTable<User> data={data} columns={columns} />,
};

export const WithSelection: Story = {
  render: () => (
    <DataTable<User>
      data={data}
      columns={columns}
      selectable
      onRowSelect={(rows) => console.log("Selected rows:", rows)}
    />
  ),
};

export const Loading: Story = {
  render: () => <DataTable<User> data={[]} columns={columns} loading />,
};

export const Empty: Story = {
  render: () => <DataTable<User> data={[]} columns={columns} />,
};
