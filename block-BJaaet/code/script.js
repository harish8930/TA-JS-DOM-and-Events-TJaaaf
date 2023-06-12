const inputBox = document.getElementById('input-box');
const movieList = document.getElementById('movie-list');

inputBox.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && inputBox.value.trim() !== ''){
    const movieName = inputBox.value.trim();
    addMovieToList(movieName);
    inputBox.value = '';
  }
});

function addMovieToList(movieName) {
  const listItem = document.createElement('li');
  listItem.className = 'movie-item';
  
  const movieNameSpan = document.createElement('span');
  movieNameSpan.className = 'movie-name';
  movieNameSpan.textContent = movieName;
  
  const deleteButton = document.createElement('span');
  deleteButton.className = 'delete-button';
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', function() {
    listItem.remove();
  });
  
  listItem.appendChild(movieNameSpan);
  listItem.appendChild(deleteButton);
  movieList.appendChild(listItem);
}
