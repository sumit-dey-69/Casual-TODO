import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Todo from "./app/todo/page";
import Layout from "./components/layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Todo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
