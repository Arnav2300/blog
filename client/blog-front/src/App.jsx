import Topbar from "./components/Topbar";
import "./App.css";
import Window from "./components/Window";

export default function App() {
  return (
    <div className="bg-white dark:bg-Grey">
      <Topbar />
      <Window />
    </div>
  );
}
