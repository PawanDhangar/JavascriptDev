const input = document.querySelector("#file-input");
const profilePic = document.querySelector("#profile-pic");

input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.onload = function () {
    profilePic.src = reader.result;
  };
  reader.readAsDataURL(input.files[0]);
});
