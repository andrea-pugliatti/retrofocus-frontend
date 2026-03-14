import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import Cameras from "./pages/Cameras";
import Lenses from "./pages/Lenses";
import AboutUs from "./pages/AboutUs";
import CameraDetail from "./pages/CameraDetail";
import LensDetail from "./pages/LensDetail";
import Photographers from "./pages/Photographers";
import PhotographerDetail from "./pages/PhotographerDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={Homepage} />
          <Route path="/cameras" Component={Cameras} />
          <Route path="/cameras/:id" Component={CameraDetail} />
          <Route path="/lenses" Component={Lenses} />
          <Route path="/lenses/:id" Component={LensDetail} />
          <Route path="/photographers" Component={Photographers} />
          <Route path="/photographers/:id" Component={PhotographerDetail} />
          <Route path="/about" Component={AboutUs} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
