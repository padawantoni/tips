// lets begin our function
var insertionListener = function (event) {
  // in the example below, I use the SWITCH statement but you can use IF too
  switch (event.animationName) {
    // this is the default animation-name on body tag, check the css file
    case "animaDefault":
      document.body.classList.add("default");
      // this is only for the exemple page
      printClass();
      break;

    // this is the animation-name of the new div created, it will remove the "default" class from body, and add the "replaced" class
    case "animaReplaced":
      document.body.classList.remove("default");
      document.body.classList.add("replaced");
      // this is only for the example page
      printClass();
      break;

    // this is our fallback if none of the above cases resolve
    default:
      break;
  }
};

// and here we are creating the event listeners for the above function
document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari

// from here you can ignore everything, as they are just functions to create the example page

function printClass() {
  let classList = document.body.className.split(" ");
  let classOutput = document.querySelector(".topbar span b");
  classOutput.innerHTML = classList;
}

document.querySelector(".btn").addEventListener("click", function () {
  let divOutput = document.querySelector(".output");
  let newDiv = document.createElement("div");
  divOutput.appendChild(newDiv);
  newDiv.classList.add("animaReplaced");
  newDiv.innerHTML =
    "This is a new div, and my class changed the body class too.";
});
