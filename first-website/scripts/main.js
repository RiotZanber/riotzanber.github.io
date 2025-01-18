document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });
  

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });
  
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/nyacaught.png") {
      myImage.setAttribute("src", "images/magesip.png");
    } else {
      myImage.setAttribute("src", "images/nyacaught.png");
    }
  });
  
  let myButton = document.querySelector("button");

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  function setUserName() {
      const myName = prompt("Please enter your name.");
      if (!myName) {
        setUserName();
      } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
      }
    }

 myButton.addEventListener("click", () => {
    setUserName();
  });
  

    