 AI Learning Platform - Frontend

This is the client-side of the AI-based learning platform, built with React.

 📁 Project Structure

- `src/components` – Reusable UI components
- `src/features` – Functional domain components (e.g., prompts, users)
- `src/pages` – Route-level pages
- `src/redux` – Redux store, slices, thunks
- `src/services` – API service logic
- `assets` – Images, styles
- `theme.js` – Global theming

🛠 Technologies Used

- React
- Redux Toolkit (with Thunks)
- Axios
- React Router
- CSS Modules / Global Styling
- Vite
- Local Storage (for session persistence)

 📝 Assumptions

- The backend is running locally at `http://localhost:7095`
- API endpoints follow REST conventions
- Authentication is based on user name + phone
- Protected routes are used for logged-in users

 ▶️ How to Run Locally

1. Make sure Node.js and npm are installed
2. Install dependencies:
   ```bash
   npm install
   

