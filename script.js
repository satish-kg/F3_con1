let employees = [];

document.getElementById('employeeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const profession = document.getElementById('profession').value;
  const age = document.getElementById('age').value;

  if (!name || !profession || !age) {
    showError('Please fill in all fields.');
    return;
  }

  const employee = {
    id: generateUniqueId(),
    name: name,
    profession: profession,
    age: parseInt(age)
  };

  employees.push(employee);

  showSuccess('Employee added successfully.');
  displayEmployees();

  document.getElementById('employeeForm').reset();
});

function generateUniqueId() {
  return employees.length > 0 ? employees[employees.length - 1].id + 1 : 1;
}

function displayEmployees() {
  const employeeList = document.getElementById('employeeList');
  employeeList.innerHTML = '';

  employees.forEach(function(employee) {
    const li = document.createElement('li');
    li.innerHTML = `ID: ${employee.id}, Name: ${employee.name}, Profession: ${employee.profession}, Age: ${employee.age}`;
    
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteEmployee(employee.id);
      li.remove();
    });
    li.appendChild(deleteButton);

    employeeList.appendChild(li);
  });
}

function deleteEmployee(id) {
  employees = employees.filter(function(employee) {
    return employee.id !== id;
  });
}

function showSuccess(message) {
  const successMessage = document.getElementById('successMessage');
  successMessage.innerHTML = message;
  successMessage.classList.add('success');

  setTimeout(function() {
    successMessage.innerHTML = '';
    successMessage.classList.remove('success');
  }, 3000);
}

function showError(message) {
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.innerHTML = message;
  errorMessage.classList.add('error');

  setTimeout(function() {
    errorMessage.innerHTML = '';
    errorMessage.classList.remove('error');
  }, 3000);
}

displayEmployees();
