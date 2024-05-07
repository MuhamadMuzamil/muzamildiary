

// JavaScript for displaying/hiding mobile navigation menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// js for the post section in  cricket page

// Get the post form and container
const postForm = document.getElementById('post-form');
const postsContainer = document.getElementById('posts-container');

// Add an event listener to the post button
document.getElementById('post-btn').addEventListener('click', (e) => {
e.preventDefault();
const postText = document.getElementById('post-text').value;
const postImage = document.getElementById('post-image').files[0];

// Create a new post element
const postElement = document.createElement('div');
postElement.classList.add('post');

// Add post text and image
const postContent = document.createElement('div');
postContent.textContent = postText;
postElement.appendChild(postContent);

if (postImage) {
const postImageElement = document.createElement('img');
postImageElement.src = URL.createObjectURL(postImage);
postElement.appendChild(postImageElement);
}

// Add the post to the container
postsContainer.appendChild(postElement);

// Reset the form
postForm.reset();
});


