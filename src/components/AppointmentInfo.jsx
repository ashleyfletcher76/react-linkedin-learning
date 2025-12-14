import { BiTrash } from "react-icons/bi";

const AppointmentInfo = ({ appointment, onDeleteAppointment }) => {
  return (
    <li className="flex items-start px-3 py-3">
      <button
        onClick={() => onDeleteAppointment(appointment.id)}
        type="button"
        className="mt-1 mr-1.5 rounded bg-red-500 p-1.5 text-white hover:bg-yellow-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
      >
        <BiTrash />
      </button>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none text-2xl font-medium text-blue-500">
            {appointment.petName}
          </span>
          <span className="flex-grow text-right">{appointment.aptDate}</span>
        </div>
        <div>
          <b className="font-bold text-blue-500">Owner:</b>{" "}
          {appointment.ownerName}
        </div>
        <div className="leading-tight">{appointment.aptNotes}</div>
      </div>
    </li>
  );
};

export default AppointmentInfo;
