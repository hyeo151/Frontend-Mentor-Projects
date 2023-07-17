const shareButtons = document.querySelectorAll(".share-button");
const profileBlock = document.querySelector(".profile-block");
const shareBlock = document.querySelector(".share-block");

shareButtons.forEach((shareButton, index) => {
  shareButton.addEventListener("click", (e) => {
    handleClick(e, index);
  });
});

function handleClick(e, index) {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 1024) {
    shareBlock.classList.toggle("lg:hidden");
    return;
  }

  if (index === 0) {
    profileBlock.classList.replace("opacity-100", "opacity-0");
    profileBlock.classList.replace("z-10", "-z-10");

    shareBlock.classList.replace("opacity-0", "opacity-100");
    shareBlock.classList.replace("-z-10", "z-10");
  } else {
    profileBlock.classList.replace("opacity-0", "opacity-100");
    profileBlock.classList.replace("-z-10", "z-10");

    shareBlock.classList.replace("opacity-100", "opacity-0");
    shareBlock.classList.replace("z-10", "-z-10");
  }
}
