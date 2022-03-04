const el1 = document.querySelector(".item1");
const el2 = document.querySelector(".item2");
var rect1,rect2;
rect2 = el2.getBoundingClientRect();
el1.addEventListener("mousedown", mousedown);

function mousedown(e) {
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);

  let startX = e.clientX; 
  let startY = e.clientY; 
  
  
  function mousemove(e) {
   
      const diffX = startX- e.clientX;
      const diffY = startY- e.clientY ;
      rect1 = el1.getBoundingClientRect();
       


      el1.style.left = (rect1.x - diffX) + "px";
      el1.style.top = (rect1.y - diffY) + "px";

    startX = e.clientX; 
    startY = e.clientY; 
  


      if (rect1.left < rect1.left + rect2.width  &&
          rect1.left + rect1.width > rect2.left &&
          rect1.top < rect2.top + rect2.height &&
          rect1.top + rect1.height > rect2.top)
        {
          el2.style.background ="#FF0006";
        } else {
          el2.style.background ="green"; 
        }
    
  }

  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}