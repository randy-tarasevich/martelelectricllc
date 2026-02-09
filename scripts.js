// Simplified scripts.js - No animations
// Load components on page load
document.addEventListener('DOMContentLoaded', function () {
  loadNavBar()
  loadFooter()
  // Setup form handlers after components load
  setTimeout(setupFormHandlers, 1000)
})

function loadNavBar() {
  const navbar = document.getElementById('navbar')
  if (navbar) {
    fetch('./components/navbar.html')
      .then((response) => response.text())
      .then((html) => {
        navbar.innerHTML = html
      })
      .catch((error) => {
        console.log('Navbar loading failed:', error)
      })
  }
}

function loadFooter() {
  const footer = document.getElementById('footer')
  if (footer) {
    fetch('./components/footer.html')
      .then((response) => response.text())
      .then((html) => {
        footer.innerHTML = html
      })
      .catch((error) => {
        console.log('Footer loading failed:', error)
      })
  }
}

function setupFormHandlers() {
  // Character counter for message field
  const messageField = document.getElementById('message')
  const charCount = document.getElementById('char-count')

  if (messageField && charCount) {
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
  }

  // Form validation on submit
  const contactForm = document.getElementById('contact-form')
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      if (this.checkValidity()) {
        const successElement = document.getElementById('form-success')
        const errorsElement = document.getElementById('form-errors')

        if (successElement) successElement.classList.remove('d-none')
        if (errorsElement) errorsElement.classList.add('d-none')

        const submitBtn = document.getElementById('submit')
        if (submitBtn) {
          submitBtn.innerHTML =
            '<i class="bi bi-hourglass-split"></i> Submitting...'
          submitBtn.disabled = true
        }

        console.log('Form is valid and submitting to Web3Forms')
      } else {
        e.preventDefault()
        this.classList.add('was-validated')

        const invalidFields = this.querySelectorAll(':invalid')
        const errorList = document.getElementById('error-list')
        const errorContainer = document.getElementById('form-errors')

        if (errorList) {
          errorList.innerHTML = ''

          invalidFields.forEach((field) => {
            if (field.name !== 'botcheck') {
              const label = document.querySelector(`label[for="${field.id}"]`)
              const fieldName = label
                ? label.textContent.replace(' *', '')
                : field.name
              const li = document.createElement('li')
              li.textContent = `${fieldName}: ${field.validationMessage}`
              errorList.appendChild(li)
            }
          })

          if (errorList.children.length > 0 && errorContainer) {
            errorContainer.classList.remove('d-none')
            const successElement = document.getElementById('form-success')
            if (successElement) successElement.classList.add('d-none')
          }
        }
      }
    })
  }

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
  const phoneField = document.getElementById('phone')
  if (phoneField) {
    phoneField.addEventListener('input', function () {
      let value = this.value.replace(/\D/g, '')
      if (value.length >= 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
      } else if (value.length >= 3) {
        value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2')
      }
      this.value = value
    })
  }
}
