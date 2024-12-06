document.getElementById('submit-btn').addEventListener('click', () => {
    const dateInput = document.getElementById('input-field').value; // Get user input
    const url = dateInput ? `https://chunk-timestamp-microservice-ff0975cc2e76.herokuapp.com/api/${dateInput}` : "https://chunk-timestamp-microservice-ff0975cc2e76.herokuapp.com/api"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById("output").textContent = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        document.getElementById("output").textContent = `Error: ${error}`;
      });
  });