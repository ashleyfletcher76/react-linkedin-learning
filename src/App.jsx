import { BiArchive } from "react-icons/bi";
import Search from "./components/Search";

function App() {
  return (
    <div className="App mx-atuo container mt-3 font-thin">
      <h1 className="text-5xl">
        <BiArchive className="inline-block align-top text-red-500" />
        Your Appointments
      </h1>
      <Search />
    </div>
  );
}

export default App;
