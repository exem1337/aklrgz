$("#formContact").submit(function (event) {
  event.preventDefault();
  let valid = true;
  if (document.querySelector("#name").value == "") {
    valid = false;
    alert("Пожалуйста, введите ваше ФИО");
  }
  if (document.querySelector("#email").value == "") {
    valid = false;
    alert("Пожалуйста, введите ваш email");
  }
  if (document.querySelector("#phone").value == "") {
    valid = false;
    alert("Пожалуйста, введите ваш номер телефона");
  }
  if (document.querySelector("#problem-text").value == "") {
    valid = false;
    alert("Пожалуйста, опишите ваши пожелания");
  }
  if (valid) {
    alert("Отправлено! С вами обязательно свяжутся в ближайшее когда нибудь");
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#problem-text").value = "";
  }
});
