export class Form {
  constructor(id) {
    this.form = document.getElementById(id);
  }

  getFormValues() {
    const formData = new FormData(this.form);
    const formValues = Object.fromEntries(formData);
    return formValues;
  }

  isFormValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }
}
