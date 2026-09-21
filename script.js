const form = document.getElementById("searchForm");
const success = document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  localStorage.setItem("usHomeFinderRequest", JSON.stringify(data));
  success.hidden = false;
  success.textContent = "Request captured. Connect this form to your business inbox or CRM before launch to receive real submissions.";
  form.reset();
  success.scrollIntoView({behavior:"smooth", block:"center"});
});

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".nav nav").classList.toggle("open");
});
