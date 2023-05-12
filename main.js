import "./style.css"

const myForm = document.querySelector("form")

myForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const data = new FormData(myForm)
  // const dateString = data.get("date")
  // // Convert dateString to JavaScript Date
  // const date = new Date(dateString)
  console.log(Object.fromEntries(data))
})
