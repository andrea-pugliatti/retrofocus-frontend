import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLoader } from "../contexts/LoaderContext";
import Loader from "../components/Loader";

export default function DefaultLayout() {
  const { loader } = useLoader();

  return (
    <>
      <Header />
      {loader && <Loader />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
