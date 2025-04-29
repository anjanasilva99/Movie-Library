<template>
  <div class="contact-form">
    <h2>How to reach us</h2>
    <p>Have questions or feedback about our movie collection? Fill out this form to get in touch with our team. We'll respond as soon as possible.</p>
    
    <form @submit.prevent="submitForm">
      <div class="form-row">
        <div class="form-group">
          <label for="firstName">First Name *</label>
          <input 
            type="text" 
            id="firstName" 
            v-model="form.firstName" 
            :class="{ 'error': errors.firstName }"
          >
          <span class="error-message" v-if="errors.firstName">{{ errors.firstName }}</span>
        </div>
        
        <div class="form-group">
          <label for="lastName">Last Name *</label>
          <input 
            type="text" 
            id="lastName" 
            v-model="form.lastName"
            :class="{ 'error': errors.lastName }"
          >
          <span class="error-message" v-if="errors.lastName">{{ errors.lastName }}</span>
        </div>
      </div>
      
      <div class="form-group">
        <label for="email">Email *</label>
        <input 
          type="email" 
          id="email" 
          v-model="form.email"
          :class="{ 'error': errors.email }"
        >
        <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
      </div>
      
      <div class="form-group">
        <label for="phone">Telephone</label>
        <input type="tel" id="phone" v-model="form.phone">
      </div>
      
      <div class="form-group">
        <label for="message">Message *</label>
        <textarea 
          id="message" 
          v-model="form.message" 
          rows="5"
          :class="{ 'error': errors.message }"
        ></textarea>
        <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
      </div>
      
      <div class="form-group checkbox">
        <input type="checkbox" id="terms" v-model="form.termsAccepted" :class="{ 'error': errors.termsAccepted }">
        <label for="terms">I agree to the Terms & Conditions</label>
        <span class="error-message" v-if="errors.termsAccepted">{{ errors.termsAccepted }}</span>
      </div>
      
      <div class="form-group">
        <p class="required-fields">* required fields</p>
        <button type="submit" class="submit-btn">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        termsAccepted: false
      },
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        termsAccepted: ''
      },
      formSubmitted: false
    }
  },
  methods: {
    validateForm() {
      let isValid = true
      
      // Reset errors
      this.errors = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        termsAccepted: ''
      }
      
      // Validate First Name
      if (!this.form.firstName.trim()) {
        this.errors.firstName = 'First Name is required'
        isValid = false
      }
      
      // Validate Last Name
      if (!this.form.lastName.trim()) {
        this.errors.lastName = 'Last Name is required'
        isValid = false
      }
      
      // Validate Email
      if (!this.form.email.trim()) {
        this.errors.email = 'Email is required'
        isValid = false
      } else if (!this.validateEmail(this.form.email)) {
        this.errors.email = 'Please enter a valid email address'
        isValid = false
      }
      
      // Validate Message
      if (!this.form.message.trim()) {
        this.errors.message = 'Message is required'
        isValid = false
      }
      
      // Validate Terms Acceptance
      if (!this.form.termsAccepted) {
        this.errors.termsAccepted = 'You must accept the Terms & Conditions'
        isValid = false
      }
      
      return isValid
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    submitForm() {
      if (this.validateForm()) {
        // Form is valid, process submission
        alert('Form submitted successfully!')
        
        // Reset form
        this.form = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          termsAccepted: false
        }
        
        this.formSubmitted = true
      }
    }
  }
}
</script>

<style scoped>
.contact-form {
  flex: 1;
  color: #ffffff;
}

.contact-form h2 {
  font-size: 28px;
  margin-bottom: 10px;
  color: #ffffff;
}

.contact-form p {
  margin-bottom: 25px;
  color: #cccccc;
}

.form-row {
  display: flex;
  gap: 20px;
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #2a2a2a;
  color: #ffffff;
}

input.error, textarea.error {
  border-color: #ff5252;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
  display: block;
}

.checkbox {
  display: flex;
  align-items: center;
}

.checkbox input {
  width: auto;
  margin-right: 10px;
}

.checkbox label {
  margin: 0;
}

.required-fields {
  font-size: 12px;
  color: #cccccc;
  margin-bottom: 10px;
}

.submit-btn {
  padding: 10px 25px;
  background-color: #2a2a2a;
  color: #fff;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #333;
}

@media (max-width: 576px) {
  .form-row {
    flex-direction: column;
    gap: 0;
  }
}
</style>