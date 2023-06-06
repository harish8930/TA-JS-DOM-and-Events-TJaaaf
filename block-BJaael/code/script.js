
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Function to generate a random color in hexadecimal format
  function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  // Function to handle mouseover event
  function handleMouseOver(event) {
    const box = event.target;
    box.style.backgroundColor = getRandomColor();
    box.textContent = getRandomNumber(0, 500);
  }

  // Create 500 boxes
  const container = document.getElementById('container');
  for (let i = 0; i < 500; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = getRandomNumber(0, 500);
    box.addEventListener('mouseover', handleMouseOver);
    container.appendChild(box);
  }

