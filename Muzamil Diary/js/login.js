const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginForm.addEventListener('submit', (e) => {
e.preventDefault();
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
fetch('login.php', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ username, password })
})
.then((res) => res.json())
.then((data) => {
if (data.success) {
window.location.href = 'welcome.php';
} else {
document.getElementById('login-error').innerText = data.message;
}
})
.catch((err) => console.error(err));
});

signupForm.addEventListener('submit', (e) => {
e.preventDefault();
const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
fetch('signup.php', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ username, email, password })
})
.then((res) => res.json())
.then((data) => {
if (data.success) {
window.location.href = 'welcome.php';
} else {
document.getElementById('signup-error').innerText = data.message;
}
})
.catch((err) => console.error(err));
});