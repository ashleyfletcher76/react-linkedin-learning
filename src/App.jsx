import { BiArchive } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";
import { useAppointments } from "./hooks/useAppointments";

function App() {
  const { appointments, isLoading, error } = useAppointments();

  if (isLoading) {
    return <p className="container mt-3">Loading appointments...</p>;
  }
  if (error) {
    return (
      <p className="container mt-3 text-red-500">Failed to load appointments</p>
    );
  }

  return (
    <div className="App mx-atuo container mt-3 font-thin">
      <h1 className="mb-3 text-5xl">
        <BiArchive className="inline-block align-top text-red-500" />
        Your Appointments
      </h1>
      <AddAppointment />
      <Search />
      <ul className="divide-y divide-gray-200">
        {appointments.map((appointment) => (
          <AppointmentInfo key={appointment.id} appointment={appointment} />
        ))}
      </ul>
    </div>
  );
}

export default App;
