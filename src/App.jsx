import { Outlet } from "react-router-dom";
import "./App.css";
import Navber from "./components/Navber";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/*  */}
      <div>
        <Navber />
      </div>
      {/* main Layoutes */}
      <main className="min-h-screen">
        <Outlet />
      </main>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
