export class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    const closeModalBtn = this.modal.querySelector(".modal__close-btn");

    closeModalBtn.addEventListener("click", () => {
      this.close();
    });
  }

  open() {
    this.modal.classList.add("modal-showed");
  }

  close() {
    this.modal.classList.remove("modal-showed");
  }

  isModalOpen() {
    if (this.modal.classList.contains("modal-showed")) {
      console.log("Модалка открыта");
    } else {
      console.log("Модалка закрыта");
    }
  }
}
