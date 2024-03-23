document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('infoForm');
    const tableBody = document.getElementById('tableBody');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const name = form.querySelector('#name').value;
      const email = form.querySelector('#email').value;
      
      if (name && email) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${name}</td><td>${email}</td>`;
        tableBody.appendChild(newRow);
        
        form.reset();
      } else {
        alert('Please fill out all fields.');
      }
    });
  });
  