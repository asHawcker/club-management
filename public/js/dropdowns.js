function toggleAssets(clubId) {
    const id = parseInt(clubId, 10);
    const list = document.getElementById(`assets-${clubId}`);
    const button = document.querySelector(`button[onclick="toggleAssets('${clubId}')"]`);

    if (list.style.display === "none") {
      fetch(`/assets/${clubId}`)
        .then(res => res.json())
        .then(data => {
          list.innerHTML = ''; // Clear previous items
          data.forEach(asset => {
            const li = document.createElement('li');
            li.textContent = asset.name + " - ₹" + asset.value;
            list.appendChild(li);
          });
          list.style.display = "block";
          button.textContent = "Hide Assets"; // Update button text
        })
        .catch(err => {
          console.error("Error fetching assets:", err);
        });
    } else {
      list.style.display = "none";
      button.textContent = "Show Assets"; // Update button text
    }
  }