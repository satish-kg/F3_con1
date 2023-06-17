let employees = [];

document.getElementById('employeeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const profession = document.getElementById('profession').value;
  const age = document.getElementById('age').value;

  if (!name || !profession || !age) {
    showError('Error : Please make sure all fields fields are filled before adding in an employee !');
    return;
  }

  const employee = {
    id: generateUniqueId(),
    name: name,
    profession: profession,
    age: parseInt(age)
  };

  employees.push(employee);

  showSuccess('Success : Employee Added!');
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
    const newDiv =  document.createElement('div');
    newDiv.setAttribute('id', 'li-box');
    const li = document.createElement('div');
    // const li = document.createElement('ul');
    li.setAttribute('id','employee-entry');
    const div1 = document.createElement('div');
    div1.classList.add('div-for-each-part');
    const p1 = document.createElement('p');
    p1.setAttribute('id', 'p1');
    p1.innerHTML = `${employee.id}. `;
    div1.appendChild(p1);
    const div2 = document.createElement('div');
    div2.classList.add('div-for-each-part');
    const p2 = document.createElement('p');
    p2.setAttribute('id', 'p2');
    p2.innerHTML = ` Name : ${employee.name}`;
    div2.appendChild(p2);
    const div3 = document.createElement('div');
    div3.classList.add('div-for-each-part');
    const p3 = document.createElement('p');
    p3.setAttribute('id', 'p3');
    p3.innerHTML = ` Profession : ${employee.profession}`;
    div3.appendChild(p3);
    const div4 = document.createElement('div');
    div4.classList.add('div-for-each-part');
    const p4 = document.createElement('p');
    p4.setAttribute('id', 'p4');
    p4.innerHTML = ` Age : ${employee.age}`;
    div4.appendChild(p4);
    li.appendChild(div1);
    li.appendChild(div2);
    li.appendChild(div3);
    li.appendChild(div4);
    // li.innerHTML = `${employee.id}`+`    `+`Name: ${employee.name}`+`    `+`Profession: ${employee.profession}`+`    `+`Age: ${employee.age}`;
    
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'delete-button')
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteEmployee(employee.id);
      newDiv.remove();
    });
    // li.appendChild(deleteButton);
    newDiv.appendChild(li);
    newDiv.appendChild(deleteButton);
    employeeList.appendChild(newDiv);
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
