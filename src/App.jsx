import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import StudentRegistration from "./pages/StudentRegistration";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/register" replace />}
        />

        <Route
          path="/register"
          element={<StudentRegistration />}
        />

        <Route
          path="*"
          element={<Navigate to="/register" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}