var smallBoxes1 = document.querySelectorAll('#box1 .small-box');

for (var i = 0; i < smallBoxes1.length; i++) {
  smallBoxes1[i].addEventListener('click', function() {
    var smallBox = this;
    smallBox.textContent = 'Number ' + (i + 1);

    setTimeout(function() {
      smallBox.textContent = '';
    }, 5000);
  });
}
var box2 = document.getElementById('box2');

box2.addEventListener('click', function(event) {
  if (event.target.matches('.small-box')) {
    var smallBox = event.target;
    smallBox.textContent = 'Number ' + (Array.prototype.indexOf.call(this.children, smallBox) + 1);

    setTimeout(function() {
      smallBox.textContent = '';
    }, 5000);
  }
});
