carsApi = "https://moccasin-causal-hagfish.ngrok-free.app/api/Cars";

const fetchCars = async () => {
  try {
    const response = await fetch(carsApi, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-Agent": "Custom-User-Agent/1.0",
      },
    });
    console.log(response)
    if (!response.ok) {
      throw new Error("Unable to connect to API");
    }
    const data = await response.json()
    console.log(data)
  } catch (err) {
    alert("Unable fetch file. Check internet connection");
    console.error(err);
  }
}

window.addEventListener("DOMContentLoaded", fetchCars);