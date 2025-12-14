const BASE_URL =
  "https://raw.githubusercontent.com/ashleyfletcher76/react-linkedin-learning/main";

export async function fetchAppointments() {
  const response = await fetch(`${BASE_URL}/public/data.json`);

  if (!response.ok) {
    throw new Error("Failed to fetch appointments");
  }

  return response.json();
}
