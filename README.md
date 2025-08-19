This project contains two reusable UI components built with React, TypeScript, and TailwindCSS and documented with Storybook.

🚀 Components
1. InputField

Flexible input component with:

Label, placeholder, helper text, error message

States: disabled, invalid, loading

Variants: filled, outlined, ghost

Sizes: sm, md, lg

clear button, password toggle

2. DataTable

Data table with:

Display of tabular data

Column sorting

Row selection (single/multiple)

Loading state

Empty state

🛠️ Tech Stack

React 18

TypeScript

TailwindCSS for styling

Storybook 7 for documentation & preview

Vite (or CRA/Next.js, depending on your setup)

📦 Installation & Setup

Clone the repo:

git clone https://github.com//frontend-assignment.git
cd frontend-assignment


Install dependencies:

npm install


Run the dev server:

npm run dev


Run Storybook:

npm run storybook

📚 Folder Structure
frontend-assignment/
│── package.json
│── tsconfig.json
│── tailwind.config.js
│── vite.config.ts (or next.config.js if Next.js)
│── README.md
│
├── src/
│   ├── components/
│   │   ├── InputField.tsx
│   │   └── DataTable.tsx
│   │
│   ├── stories/              # Storybook stories
│   │   ├── InputField.stories.tsx
│   │   └── DataTable.stories.tsx
│   │
│   ├── __tests__/            # Jest test files
│   │   ├── InputField.test.tsx
│   │   └── DataTable.test.tsx
│   │
│   └── App.tsx               # Example usage
│
└── .storybook/               # Storybook config 
