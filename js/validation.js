let submit=function()
 {
  var username = document.getElementById(`username`).value;
  var password = document.getElementById(`password`).value;

  console.log(username);
  console.log(password);

  var regex = /^[a-zA-Z0-9]+$/

  if (!regex.test(username)) {
    alert("Invalid User Name");
    return;
  }
  if (!regex.test(password)) {
    alert('Invalid password');
    return;
  }
  if (username == 'babayaga1234' && password == '123456') {
    alert('Login successful');
    window.location.href = 'homePage.html';
  }
  else if (username === 'babayaga1234') {
    alert('Invalid password');
  } else {
    alert('Invalid username or password');
  }
  

}