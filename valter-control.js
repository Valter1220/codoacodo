const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let mensaje = []
  if (email.value === '' || email.value == null) {
    mensaje.push('El correo es requerido')
  }

  if (password.value.length <= 6) {
    mensaje.push('La contraseña debe ser mayor a 6 caracteres')
  }


  if (mensaje.length > 0) {
    e.preventDefault()
    errorElement.innerText = mensaje.join(', ')
  }
})