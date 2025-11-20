const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Toronto CN Tower",
    link: "https://images.unsplash.com/photo-1756135154174-add625f8721a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Warsaw, Poland",
    link: "https://images.unsplash.com/photo-1661068791229-7c3ba4c53dfc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "New York City skyline at dusk",
    link: "https://images.unsplash.com/photo-1754404053337-7363006e4391?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Zermatt, Switzerland",
    link: "https://images.unsplash.com/photo-1750375502807-2c73a829f182?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
];

const settings = {
  formSelector: ".modal__form",
  labelSelector: ".modal__label",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inputErrorClass: "modal__input_type_error",
  labelErrorClass: "modal__label_type_error",
  errorClass: "modal__input-error_active",
};

export { initialCards, settings };
