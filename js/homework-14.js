export class TwoModals {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById("overlay-14");
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.overlayClickHandler = () => {
      this.close();
    };
    this.#initOpen(buttonId);
    this.#initClose();
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

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", () => {
      this.open();
    });
  }

  #initClose() {
    const closeButton = this.modal.querySelector(".modal-14-close-button");

    closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}
