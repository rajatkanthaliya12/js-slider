import "./index.scss";

//Append new div to body code start
const drawer = document.createElement("div");
drawer.innerHTML = `
<div class="theme-right hpe">
<div id="drawer-strip" class="ml-strip">Need Some help?</div>
    <div id="drawer" class="side-drawer">
     <div id="drawer-close" class="ml-close">x</div>
     <div class="ml-content">
     <span class="ml-que-sign">?</span>
     <textarea
       maxlength="100"
       id="ml-que"
       class="ml-input-que"
       placeholder="Type your question here..."
     ></textarea>
     <div class="ml-ans"></div>
     <div class="ml-submit">
       <div class="ml-btn-container">
         <button class="ml-submit-btn">Find Answer</button>
       </div>
     </div>
   </div>
    </div>
    </div>
`;

document.body.append(drawer);
//Append new div to body code End

//Function for opening slider when click on strip
const openDrawer = function() {
  const drawer = document.getElementById("drawer");
  drawer.classList.add("open");
};

//Function for closing slider when click on x
const closeDrawer = function() {
  const drawer = document.getElementById("drawer");
  drawer.classList.remove("open");
};

//add event listener to strip
document
  .getElementById("drawer-strip")
  .addEventListener("click", openDrawer, false);

//add event listener to x
document
  .getElementById("drawer-close")
  .addEventListener("click", closeDrawer, false);

//add
