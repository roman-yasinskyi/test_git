// sidebar
let arrow = document.querySelectorAll(".arrow");

for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=> {
    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-chevrons-left");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

// // sidebar
// let arrow = document.querySelectorAll(".arrow");

// for (let i = 0; i < arrow.length; i++) {
//   arrow[i].addEventListener("click", (e)=> {
//     let arrowParent = e.target.parentElement.parentElement;
//     arrowParent.classList.toggle("showMenu");
//   });
// }

// let sidebar = document.querySelector(".sidebar");
// let sidebarBtn = document.querySelector(".bx-chevrons-left");

// sidebarBtn.addEventListener("click", () => {
//   sidebar.classList.toggle("close");
// });