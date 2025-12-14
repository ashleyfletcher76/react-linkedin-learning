import { BiArchive } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";
import { useEffect, useState } from "react";

function App() {
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAppointmentList(data));
  }, []);

  return (
    <div className="App mx-atuo container mt-3 font-thin">
      <h1 className="mb-3 text-5xl">
        <BiArchive className="inline-block align-top text-red-500" />
        Your Appointments
      </h1>
      <AddAppointment />
      <Search />
      <ul className="divide-y divide-gray-200">
        {appointmentList.map((appointment) => (
          <AppointmentInfo key={appointment.id} appointment={appointment} />
        ))}
      </ul>
    </div>
  );
}

export default App;
