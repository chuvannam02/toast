const btnSuccess = document.querySelector(".btn-successful");
const btnWarning = document.querySelector(".btn-warning");
const btnError = document.querySelector(".btn-error");
const toasts = document.querySelector(".toast-list");
function showToast(toast) {
  const icons = {
    success: `<i class="fa-solid fa-circle-check"></i>`,
    warning: ` <i class="fa-solid fa-triangle-exclamation"></i>`,
    error: `<i class="fa-solid fa-circle-exclamation"></i>`,
  };
  toastItem = document.createElement("div");
  toastItem.innerHTML = `
       ${icons[toast.status]}
    <span>${toast.message}</span>`;
  toastItem.classList.add("toast-item", `${toast.status}`);
  setTimeout(() => {
    toasts.removeChild(toastItem);
  }, 3000);
  toasts.appendChild(toastItem);
}
function showSuccess() {
  showToast({
    status: "success",
    message: "This is a success message !",
    duration: 2000,
  });
}
function showWarning() {
  showToast({
    status: "warning",
    message: "This is a warning message !",
    duration: 3000,
  });
}
function showError() {
  showToast({
    status: "error",
    message: "This is a error message !",
    duration: 3500,
  });
}
btnSuccess.onclick = function () {
  showSuccess();
};
btnWarning.addEventListener("click", () => {
  showWarning();
});
btnError.addEventListener("click", () => {
  showError();
});
