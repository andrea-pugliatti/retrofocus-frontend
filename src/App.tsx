import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import AboutUs from "./pages/AboutUs";
import CameraDetail from "./pages/CameraDetail";
import Cameras from "./pages/Cameras";
import Homepage from "./pages/Homepage";
import LensDetail from "./pages/LensDetail";
import Lenses from "./pages/Lenses";
import NotFound from "./pages/NotFound";
import PhotographerDetail from "./pages/PhotographerDetail";
import Photographers from "./pages/Photographers";

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
          <Route path="*" Component={NotFound} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
