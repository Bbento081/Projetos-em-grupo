document.addEventListener("DOMContentLoaded", () => {
  const email = document.querySelector("#adress");
  const senha = document.querySelector("#passwd");
  const remember = document.querySelector("#remem");
  const login = document.querySelector("#loginBtn");
  const eye = document.querySelector(".absolute");

  const doLogin = () => {
    if (email.value.trim() == "" && senha.value.trim() == "") {
      alert("Por favor adicione valores ");
    }
  };

  eye.addEventListener("click", () => {
    const input = window.document.getElementById("passwd");
    const newType = input.type === "text" ? "password" : "text";
    input.type = newType;

    const icon = eye.querySelector("i"); // <i> | .i = className

    if (icon.className === "fa-regular fa-eye") {
      icon.className = "fa-regular fa-eye-slash";
    } else {
      icon.className = "fa-regular fa-eye";
    }
  });

  login.addEventListener("click", doLogin);

  email.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
      senha.focus();
    }
  });

  senha.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
      doLogin();
    }
  });
});
