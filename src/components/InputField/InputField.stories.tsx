import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";
import React, { useState } from "react";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <InputField
        label="Username"
        placeholder="Enter your username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="Helper text goes here"
      />
    );
  },
};

export const ErrorState: Story = {
  render: () => (
    <InputField
      label="Email"
      placeholder="Enter email"
      value=""
      onChange={() => {}}
      invalid
      errorMessage="Email is required"
    />
  ),
};

export const PasswordField: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <InputField
        label="Password"
        placeholder="Enter password"
        type="password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");
    const [val3, setVal3] = useState("");
    return (
      <div className="space-y-4">
        <InputField label="Filled" variant="filled" value={val1} onChange={(e) => setVal1(e.target.value)} />
        <InputField label="Outlined" variant="outlined" value={val2} onChange={(e) => setVal2(e.target.value)} />
        <InputField label="Ghost" variant="ghost" value={val3} onChange={(e) => setVal3(e.target.value)} />
      </div>
    );
  },
};
