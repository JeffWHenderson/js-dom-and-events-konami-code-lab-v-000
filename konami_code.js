const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// up, up, down, down, left, right, left, right, B, A
let index = 0;


document.querySelector('body').addEventListener('keydown', function(e) {

        //const key = parseInt(e.detail || e.which);

        console.log(e.detail)
        if (key === code[index]) {
          index++;

          if (index === code.length) {
            alert("Hurray!");

            index = 0;
          }
        } else {
          index = 0;
        }
      }
})


function init() {

  // Write your JavaScript code inside the init() function
        // function onKeyDownHandler(e) {
        //   alert('Hello World')
          // const key = parseInt(e.detail); // || e.which)
          // if (key === code[index]) {
          //   index++;
          //
          //   if (index === code.length) {
          //     alert("Hurray!");
          //
          //     index = 0;
          //   }
          // } else {
          //   index = 0;
          // }
        // }
}



// Keep track of index outside of the event handler.


// Keep track of index outside of the event handler.

// This is the function that would be invoked by the event listener.
