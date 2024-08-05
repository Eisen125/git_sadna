document.getElementById('userForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        username,
        password,
      }),
    });
  
    if (response.ok) {
      const user = await response.json();
      addUserToList(user);
    }
  });
  
  function addUserToList(user) {
    const userList = document.getElementById('userList');
    const newUser = document.createElement('li');
    newUser.textContent = `${user.username} - ${user.password}`;
    userList.appendChild(newUser);
  
    // Clear the form inputs
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  }
  