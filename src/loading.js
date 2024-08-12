const loading = (bool) => {
  const loading = document.querySelector(".loading");
  const overlay = document.querySelector(".overlay");

  if (bool) {
    loading.classList.add("active");
    overlay.classList.add("active");
  } else {
    loading.classList.remove("active");
    overlay.classList.remove("active");
  }
};
export { loading };
