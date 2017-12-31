const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// up, up, down, down, left, right, left, right, B, A
const input = document.querySelector('body')
const alphabet = [65, 66, 67];
let index = 0;

function init() {
  // Write your JavaScript code inside the init() function
        function onKeyDownHandler(e) {
          alert('Hello World')
          // const key = parseInt(e.detail); // || e.which)
          // if (key === alphabet[index]) {
          //   index++;
          // 
          //   if (index === alphabet.length) {
          //     alert("Hurray!");
          // 
          //     index = 0;
          //   }
          // } else {
          //   index = 0;
          // }
        }
}



input.addEventListener('keydown', function(e) {
  console.log(e.which)
})
// Keep track of index outside of the event handler.


// Keep track of index outside of the event handler.

// This is the function that would be invoked by the event listener.
