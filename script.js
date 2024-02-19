const content = [
    "Web Developer",
    "Lua Developer",
    "Content Creator",
    "High School Student",
  ];

  const textElement = document.getElementById("textswap");
  let currentIndex = 0;

  function switchText() {
    textElement.classList.add("fade-out");
    setTimeout(() => {
      textElement.textContent = content[currentIndex];
      textElement.classList.remove("fade-out");
      textElement.classList.add("fade-in"); // Add fade-in class
      currentIndex = (currentIndex + 1) % content.length;
    }, 500);
  }

  setInterval(switchText, 2000);