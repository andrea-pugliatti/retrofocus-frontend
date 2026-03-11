import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import Cameras from "./pages/Cameras";
import Lenses from "./pages/Lenses";
import Adapters from "./pages/Adapters";
import AboutUs from "./pages/AboutUs";
import { LoaderProvider } from "./contexts/LoaderContext";
import CameraDetail from "./pages/CameraDetail";
import LensDetail from "./pages/LensDetail";

function App() {
  return (
    <LoaderProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Homepage} />
            <Route path="/cameras" Component={Cameras} />
            <Route path="/cameras/:id" Component={CameraDetail} />
            <Route path="/lenses" Component={Lenses} />
            <Route path="/lenses/:id" Component={LensDetail} />
            <Route path="/adapters" Component={Adapters} />
            <Route path="/about" Component={AboutUs} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoaderProvider>
  );
}

export default App;
