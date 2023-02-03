const button = document.querySelector('.beautiful-button');

button.addEventListener('mouseenter', function() {
  this.style.backgroundColor = '#3e8e41';
});

button.addEventListener('mouseleave', function() {
  this.style.backgroundColor = '#4CAF50';
});