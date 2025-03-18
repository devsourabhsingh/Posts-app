# Installation & Setup

   Prerequisites

    Node.js (v16 or later recommended)

    npm or yarn

# Steps to Run the Project

```
# Clone the repository
git clone <your-repo-url>
cd nextjs-blog

# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev

# Open http://localhost:3000 in your browser

# Run tests
npm test
# or
yarn test
```

 #  Folder Structure

```
src/
│-- app/
│   ├── page.jsx      # Home page (SSG)
│   ├── posts/
│   │   ├── [id].jsx  # Post detail page (SSR)
│-- components/
│   ├── Card/
│   │   ├── Card.jsx       # Reusable card component
│   │   ├── Card.module.css # Card styling
│   │   ├── Card.test.js   # Unit tests for Card component
│   ├── SearchBar/
│   │   ├── SearchBar.jsx       # Search filter component
│   │   ├── SearchBar.module.css # SearchBar styling
│   ├── Toast/
│   │   ├── Toast.jsx       # Toast notification component
│   │   ├── Toast.module.css # Toast styling
│   ├── Spinner/
│   │   ├── Spinner.jsx       # Loading spinner component
│   │   ├── Spinner.module.css # Spinner styling
│-- README.md
│-- package.json
│-- jest.config.js

```

# Assumptions

    The API response structure from JSONPlaceholder is consistent.

    Search filtering is based on the post titles.

    Jest is used for testing components.

# Future Improvements

    Implement pagination for the post list.

    Add global state management using Redux or React Context.

    Improve test coverage with integration tests.
