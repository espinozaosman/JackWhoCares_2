const modal = document.querySelector(".modal")
const openModal = document.querySelector(".open-modal")
const closeModal = document.querySelector(".close-modal")

closeModal.addEventListener("click", () => {
  modal.style.display = "none"
})

// Cerrar modal al hacer clic fuera del modal
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none"
  }
})

openModal.addEventListener("click", () => {
  modal.style.display = "block"
})

closeModal.addEventListener("click", () => {
  modal.style.display = "none"
})

function validateForm() {
  const username = document.querySelector("#username").value
  const password = document.querySelector("#password").value

  if (username === "" || password === "") {
    alert("Por favor, complete todos los campos")
    return false
  }

  return true
}

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  event.preventDefault()

  if (!validateForm()) {
    return
  }

  modal.style.display = "none"
})

const modal2 = document.querySelector(".modal2")
const openModal2 = document.querySelector(".open-modal2")
const closeModal2 = document.querySelector(".close-modal2")

closeModal2.addEventListener("click", () => {
  modal.style.display = "none"
})

// Cerrar modal al hacer clic fuera del modal
window.addEventListener("click", (event) => {
  if (event.target === modal2) {
    modal2.style.display = "none"
  }
})

openModal2.addEventListener("click", () => {
  modal2.style.display = "block"
})

closeModal2.addEventListener("click", () => {
  modal2.style.display = "none"
})

function validateForm2() {
  const username = document.querySelector("#username").value
  const password = document.querySelector("#password").value

  if (username === "" || password === "") {
    alert("Por favor, complete todos los campos")
    return false
  }

  return true
}

const form2 = document.querySelector("form")
form2.addEventListener("submit", (event) => {
  event.preventDefault()

  if (!validateForm2()) {
    return
  }

  modal2.style.display = "none"
})
