loadNavBar()
loadHome()
loadAbout()
loadFooter()

function loadNavBar() {
  const navbar = document.getElementById('navbar')
  fetch('/components/navbar.html')
    .then((response) => response.text())
    .then((html) => {
      navbar.innerHTML = html
    })
}

function loadHome() {
  const content = document.getElementById('content')
  fetch('/components/home.html')
    .then((response) => response.text())
    .then((html) => {
      content.innerHTML = html
    })
}

function loadAbout() {
  const content = document.getElementById('about')
  fetch('/components/about.html')
    .then((response) => response.text())
    .then((html) => {
      about.innerHTML = html
    })
}

function loadFooter() {
  const footer = document.getElementById('footer')
  fetch('/components/footer.html')
    .then((response) => response.text())
    .then((html) => {
      footer.innerHTML = html
    })
}

// Character counter for message field
const messageField = document.getElementById('message')
const charCount = document.getElementById('char-count')

messageField.addEventListener('input', function () {
  const currentLength = this.value.length
  charCount.textContent = currentLength

  // Update character count styling
  charCount.className = ''
  if (currentLength > 400) {
    charCount.classList.add('char-danger')
  } else if (currentLength > 350) {
    charCount.classList.add('char-warning')
  }
})

// Form validation on submit
document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    // Check if form is valid
    if (this.checkValidity()) {
      // Form is valid, allow submission to Web3Forms
      document.getElementById('form-success').classList.remove('d-none')
      document.getElementById('form-errors').classList.add('d-none')

      // Show loading state on submit button
      const submitBtn = document.getElementById('submit')
      submitBtn.innerHTML =
        '<i class="bi bi-hourglass-split"></i> Submitting...'
      submitBtn.disabled = true

      // Form will submit normally to Web3Forms
      console.log('Form is valid and submitting to Web3Forms')
    } else {
      // Prevent submission if form is invalid
      e.preventDefault()

      // Show validation errors
      this.classList.add('was-validated')

      // Collect all invalid fields
      const invalidFields = this.querySelectorAll(':invalid')
      const errorList = document.getElementById('error-list')
      const errorContainer = document.getElementById('form-errors')

      errorList.innerHTML = ''

      invalidFields.forEach((field) => {
        if (field.name !== 'botcheck') {
          // Skip honeypot field
          const label = document.querySelector(`label[for="${field.id}"]`)
          const fieldName = label
            ? label.textContent.replace(' *', '')
            : field.name
          const li = document.createElement('li')
          li.textContent = `${fieldName}: ${field.validationMessage}`
          errorList.appendChild(li)
        }
      })

      if (errorList.children.length > 0) {
        errorContainer.classList.remove('d-none')
        document.getElementById('form-success').classList.add('d-none')
      }
    }
  })

// Real-time validation feedback
const inputs = document.querySelectorAll('input, textarea')
inputs.forEach((input) => {
  input.addEventListener('blur', function () {
    if (this.checkValidity()) {
      this.classList.remove('is-invalid')
      this.classList.add('is-valid')
    } else {
      this.classList.remove('is-valid')
      this.classList.add('is-invalid')
    }
  })

  input.addEventListener('input', function () {
    if (this.classList.contains('is-invalid') && this.checkValidity()) {
      this.classList.remove('is-invalid')
      this.classList.add('is-valid')
    }
  })
})

// Phone number formatting
document.getElementById('phone').addEventListener('input', function () {
  let value = this.value.replace(/\D/g, '')
  if (value.length >= 6) {
    value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
  } else if (value.length >= 3) {
    value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2')
  }
  this.value = value
})
