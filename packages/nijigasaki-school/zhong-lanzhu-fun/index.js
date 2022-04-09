const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

const handleDialog = () => {
  const modalElement = document.getElementById("modal");
  const dialogCharacterElement = document.getElementById("dialog-character");

  if (modalElement.classList.contains("modal-wrapper--show")) {
    modalElement.classList.remove("modal-wrapper--show");
  } else {
    modalElement.classList.add("modal-wrapper--show");
    const charaImageLength = dialogCharacterElement.children.length;
    const showIndex = getRandomInteger(0, charaImageLength - 1);

    for (let i = 0; i < charaImageLength; i++) {
      if (i === showIndex) {
        dialogCharacterElement.children.item(i).style = "display: inline";
      } else {
        dialogCharacterElement.children.item(i).style = "display: none";
      }
    }

    dialogCharacterElement.classList.add("dialog-character--move");
    setTimeout(() => {
      dialogCharacterElement.classList.remove("dialog-character--move");
    }, 1000);
  }
};

(() => {
  window.handleDialog = handleDialog;

  window.addEventListener("load", () => {
    document.body.classList.remove("hide");
    document.body.classList.add("show");
  });
})();
