carsApi = "https://localhost:7116/api/Cars";

const fetchCars = async () => {
  try {
    const response = await fetch(carsApi);
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