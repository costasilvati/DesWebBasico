// Function to change the content of t2
function modifyText() {
    const t2 = document.getElementById("t2");
    const isNodeThree = t2.firstChild.nodeValue === "three";
    t2.firstChild.nodeValue = isNodeThree ? "two" : "three";
  }
  
  // Add event listener to table
  const el = document.getElementById("outside");
  el.addEventListener("click", modifyText, false);