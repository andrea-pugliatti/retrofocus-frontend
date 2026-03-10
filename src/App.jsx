import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={Homepage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
