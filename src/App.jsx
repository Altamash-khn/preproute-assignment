import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import TestCreation from "./components/TestCreation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/testCreation" element={<TestCreation />} />
    </Routes>
  );
};

export default App;