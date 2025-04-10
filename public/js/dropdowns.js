function toggleAssets(clubId) {
    const id = parseInt(clubId, 10);
    const list = document.getElementById(`assets`);
    const button = document.querySelector(`button[onclick="toggleAssets('${clubId}')"]`);

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
        })
        .catch(err => {
          console.error("Error fetching assets:", err);
        });
        clearActiveButtons();
        button.classList.add('active');
  }

  function toggleCompetitions(clubId) {
    const id = parseInt(clubId, 10);
    const list = document.getElementById(`assets`);
    const button = document.querySelector(`button[onclick="toggleCompetitions('${clubId}')"]`);

      fetch(`/assets/c/${clubId}`)
        .then(res => res.json())
        .then(data => {
          list.innerHTML = '';
          data.forEach(competition => {
            const li = document.createElement('li');
            li.textContent = competition.name + " - ₹" + competition.prize_pool;
            list.appendChild(li);
          });
          list.style.display = "block";
        })
        .catch(err => {
          console.error("Error fetching competitions:", err);
        });
        clearActiveButtons();
        button.classList.add('active');
  }

  function toggleEvents(clubId) {
    const id = parseInt(clubId, 10);
    const list = document.getElementById(`assets`);
    const button = document.querySelector(`button[onclick="toggleEvents('${clubId}')"]`);

      fetch(`/assets/e/${clubId}`)
        .then(res => res.json())
        .then(data => {
          list.innerHTML = ''; // Clear previous items
          data.forEach(event => {
            const li = document.createElement('li');
            li.textContent = event.name + " - ₹" + event.funds_Alloted;
            list.appendChild(li);
          });
          list.style.display = "block";
        })
        .catch(err => {
          console.error("Error fetching events:", err);
        });
        clearActiveButtons();
        button.classList.add('active');
    
  }

  function toggleMembers(clubId) {
    const id = parseInt(clubId, 10);
    const list = document.getElementById(`assets`);
    const button = document.querySelector(`button[onclick="toggleMembers('${clubId}')"]`);

      fetch(`/assets/m/${clubId}`)
        .then(res => res.json())
        .then(data => {
          list.innerHTML = ''; // Clear previous items
          data.forEach(member => {
            const li = document.createElement('li');
            li.textContent = member.name + " - " + member.email + " - " + member.position;
            list.appendChild(li);
          });
          list.style.display = "block";
        })
        .catch(err => {
          console.error("Error fetching members:", err);
        });
        clearActiveButtons();
        button.classList.add('active');
    
  }

  function toggleSponsors(clubId) {
    const id = parseInt(clubId, 10);
    const list = document.getElementById(`assets`);
    const button = document.querySelector(`button[onclick="toggleSponsor('${clubId}')"]`);

      fetch(`/assets/s/${clubId}`)
        .then(res => res.json())
        .then(data => {
          list.innerHTML = ''; // Clear previous items
          data.forEach(sponsor => {
            const li = document.createElement('li');
            li.textContent ="₹" + sponsor.value + " - " + sponsor.from_Company ;
            list.appendChild(li);
          });
          list.style.display = "block";
        })
        .catch(err => {
          console.error("Error fetching sponsors:", err);
        });
        clearActiveButtons();
        button.classList.add('active');
    
  }

  function toggleFunds(clubId) {
    const id = parseInt(clubId, 10);
    const list = document.getElementById(`assets`);
    const button = document.querySelector(`button[onclick="toggleFunds('${clubId}')"]`);

      fetch(`/assets/f/${clubId}`)
        .then(res => res.json())
        .then(data => {
          list.innerHTML = ''; // Clear previous items
          data.forEach(fund => {
            const li = document.createElement('li');
            li.textContent = fund.timestamp + " - " + fund.value;
            list.appendChild(li);
          });
          list.style.display = "block";
        })
        .catch(err => {
          console.error("Error fetching funds:", err);
        });
        clearActiveButtons();
        button.classList.add('active');
    
  }

  function clearActiveButtons() {
    document.querySelectorAll('.dropdown-btn').forEach(btn => btn.classList.remove('active'));
  }