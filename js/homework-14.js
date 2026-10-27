export class TwoModals {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById("overlay-14");
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.openButton = document.getElementById(buttonId);

    if (!this.modal) {
      throw new Error("Модалка не найдена!");
    }
    if (!this.overlay) {
      throw new Error("Оверлэй не найден!");
    }
    if (!this.openButton) {
      throw new Error("Кнопка открытия не найдена!");
    }

    this.closeButton = this.modal.querySelector(".modal-14-close-button");

    if (!this.closeButton) {
      throw new Error("Кнопка закрытия не найдена!");
    }

    this.overlayClickHandler = () => {
      this.close();
    };
    this.#addOpenListener();
    this.#addCloseListener();
  }

  open() {
    this.modal.classList.add("modal-showed-14");
    this.overlay.classList.add("overlay-showed-14");
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener("click", this.overlayClickHandler);
    }
  }

  close() {
    this.modal.classList.remove("modal-showed-14");
    this.overlay.classList.remove("overlay-showed-14");
    this.overlay.removeEventListener("click", this.overlayClickHandler);
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed-14");
  }

  #addOpenListener() {
    this.openButton.addEventListener("click", () => {
      this.open();
    });
  }

  #addCloseListener() {
    this.closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}
