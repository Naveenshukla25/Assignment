This project contains two reusable UI components built with React, TypeScript, and TailwindCSS and documented with Storybook.

🚀 Components

1. InputField

Flexible input component with:

Label, placeholder, helper text, error message

States: disabled, invalid, loading

Variants: filled, outlined, ghost

Sizes: sm, md, lg

Optional: clear button, password toggle

Supports light & dark theme

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

git clone https://github.com/your-username/frontend-assignment.git
cd frontend-assignment

Install dependencies:

npm install

Run the dev server:

npm run dev

Run Storybook:

npm run storybook

my-assignment/
│── package.json
│── tsconfig.json
│── tailwind.config.js
│── vite.config.ts
│── README.md
│
├── src/
│ ├── components/
| ├── InputField/  
│ │ ├── InputField.stories.tsx
│ │ └── InputField.stories.tsx
| ├── DataField/  
│ │ ├── DataTable.tsx
│ │ └── DataTable.stories.tsx  
│ ├── **tests**/  
│ │ ├── InputField.test.tsx
│ │ └── DataTable.test.tsx
│ │
│ └── App.tsx  
│
└── .storybook/
