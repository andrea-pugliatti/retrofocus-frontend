import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import Cameras from "./pages/Cameras";
import Lenses from "./pages/Lenses";
import Adapters from "./pages/Adapters";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={Homepage} />
          <Route path="/cameras" Component={Cameras} />
          <Route path="/lenses" Component={Lenses} />
          <Route path="/adapters" Component={Adapters} />
          <Route path="/about" Component={AboutUs} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
