import "./buttons.js";
import "./comments.js";
import "./products.js";
import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";
import "./homework-10.js";
// import "./homework-11.js";
import "./homework-12.js";

import { Modal } from "./modal.js";
import { Form } from "./form.js";

const regModal = new Modal("modal");
const regForm = new Form("modal__form");

const regBtn = document.getElementById("open-modal-btn");
const overlay = document.getElementById("overlay");

regBtn.addEventListener("click", () => {
  regModal.open();
});

overlay.addEventListener("click", () => {
  regModal.close();
});

if (regForm.form) {
  regForm.form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (regForm.isFormValid()) {
      const data = regForm.getFormValues();

      const password = data.userPassword;
      const confirmPassword = data.userConfirmPassword;

      if (password !== confirmPassword) {
        alert("Пароли не совпадают!");
        return;
      }

      delete data.userPassword;
      delete data.userConfirmPassword;

      console.log("Данные успешно собраны:", data);

      regForm.reset();
      regModal.close();
    } else {
      console.log("Форма заполнена некорректно.");
    }
  });
}
