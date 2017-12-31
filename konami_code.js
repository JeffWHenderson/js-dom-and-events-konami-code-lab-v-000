const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// up, up, down, down, left, right, left, right, B, A
let index = 0;
function init() {
        document.querySelector('body').addEventListener('keydown', function(e) {
          const key = parseInt(e.which)

           if (key === code[index]) {
             index++;

             if (index === code.length) {
              alert("Flawless Victory!");

              index = 0;
            }
          } else {
            index = 0;
          }

        })
}
