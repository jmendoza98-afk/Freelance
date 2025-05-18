const freelancerList = document.getElementById("freelancer-list");
const averageDisplay = document.getElementById("average");

// Arrays for random generation
const names = ["Alice", "Bob", "Carol", "David", "Emma", "Frank", "George"];
const occupations = ["Writer", "Teacher", "Programmer", "Designer", "Artist", "Editor"];
const prices = [30, 40, 50, 60, 70, 80];

// Initial list of freelancers
let freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 }
];

function renderFreelancers() {
    freelancerList.innerHTML = "";
  
    // Loop through freelancers and create rows
    freelancers.forEach(freelancer => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${freelancer.name}</td>
        <td>${freelancer.occupation}</td>
        <td>$${freelancer.price}</td>
      `;
      freelancerList.appendChild(row);
    });
  
    // Update average after rendering
    updateAverage();
  }

  function updateAverage() {
    const total = freelancers.reduce((sum, f) => sum + f.price, 0);
    const average = (total / freelancers.length).toFixed(2);
    averageDisplay.textContent = `The average starting price is $${average}`;
  }
  
  // Generate and add a new random freelancer
  function addRandomFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
  
    freelancers.push({ name, occupation, price });
    renderFreelancers();
  }
  
  renderFreelancers();
  
  setInterval(addRandomFreelancer, 3000);