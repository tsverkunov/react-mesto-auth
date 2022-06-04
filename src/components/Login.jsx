import React, {useState, useEffect} from 'react'


function Login({children, title, buttonText, onSendData}) {
  const [formValues, setFormValues] = useState({email: '', password: ''})
  const [formErrors, setFormErrors] = useState({email: '', password: ''})

  const handleChange = (e) => {
    const {name, value, validationMessage} = e.target
    setFormValues({...formValues, [name]: value})
    setFormErrors({...formErrors, [name]: validationMessage})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onSendData(formValues)
  }
  const [isButtonDisabled , setIsButtonDisabled] = useState(true)

  useEffect(() => {
    const isFormValidValue = Object.keys(formErrors).every(key => !formErrors[key])
    setIsButtonDisabled(!isFormValidValue)
  },[formErrors])

  return (
    <div className="popup__container popup__container_sign-in">
      <h2 className="popup__title">{title}</h2>
      <form
        onSubmit={onSubmit}
        className="popup__form"
        id="popup__form-sign-in"
        name="register"
        noValidate
      >
        <div className="popup__field-group popup__field-group_sign-in">
          <div className="popup__field-container">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="popup__field popup__field_type_email popup__field_sign-in"
              id="popup__field_type_email-sign-in"
              minLength="2"
              maxLength="30"
              value={formValues.email}
              onChange={handleChange}
              required
            />
            <span
              className="popup__error"
              id="error-popup__field_type_name-add-cards"
            >
              {formErrors.email}
          </span>
          </div>
          <div className="popup__field-container">
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              className="popup__field popup__field_type_link popup__field_sign-in"
              id="popup__field_type_password-sign-in"
              value={formValues.password}
              onChange={handleChange}
              required
            />
            <span
              className="popup__error"
              id="error-popup__field_type_link-add-cards"
            >
              {formErrors.password}
          </span>
          </div>
        </div>
        <button
          type="submit"
          className="popup__button-submit popup__button-submit_sign-in"
          disabled={isButtonDisabled}
        >
          {buttonText}
        </button>
        {children}
      </form>
    </div>
  )
}

export default Login