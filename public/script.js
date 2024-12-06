document.getElementById('submit-btn').addEventListener('click', () => {
    const dateInput = document.getElementById('input-field').value; // Get user input
    const url = dateInput ? `http://localhost:3000/api/${dateInput}` : "http://localhost:3000/api"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById("output").textContent = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        document.getElementById("output").textContent = `Error: ${error}`;
      });
  });