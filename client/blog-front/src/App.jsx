import Topbar from "./components/Topbar";
import "./App.css";
import Window from "./components/Window";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SinglePost from "./pages/SinglePost";

export default function App() {
  return (
    <div className="bg-white dark:bg-Grey">
      <Topbar />
      <Window />
      {/* <Login /> */}
    </div>
  );
}
