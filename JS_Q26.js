async function fetchData() {
  try {
    let resEndpoint = "https://jsonplaceholder.typicode.com/posts";
    let errEndpoint = "https://api.example.com/data";
    const response = await fetch(errEndpoint);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}
fetchData();
