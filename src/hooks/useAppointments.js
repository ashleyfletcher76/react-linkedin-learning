import { useEffect, useState } from "react";
import { fetchAppointments } from "../services/appointmentsApi";

export function useAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAppointments()
      .then((data) => setAppointments(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  function deleteAppointment(appointmentId) {
    setAppointments((prevAppointments) =>
      prevAppointments.filter(
        (appointment) => appointment.id !== appointmentId,
      ),
    );
  }

  return { appointments, isLoading, error, deleteAppointment };
}
