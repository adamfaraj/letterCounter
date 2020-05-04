const input = document.getElementById('countInput');
const span = document.getElementById('count');


input.addEventListener('keyup', function(event) {
  let myString = event.target.value;
  let myArray = myString.split("");
  myArray = myArray.filter(ch => ch !== " ");
  span.innerHTML = myArray.length;
});
