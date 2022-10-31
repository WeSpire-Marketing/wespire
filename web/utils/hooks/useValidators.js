export default function useValidators() {
  const validateFullname = {
    required: { value: true, message: 'This field is required.' },
    maxLength: { value: 30, message: 'Maximum field length.' },
    pattern: {
      value: /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/i,
      message: `Please, enter a valid name.`,
    },
  }

  const validateFirstname = {
    required: { value: true, message: 'This field is required.' },
    maxLength: { value: 30, message: 'Maximum field length.' },
    pattern: {
      value: /^[A-Za-z]+$/,
      message: `Please, enter a valid name.`,
    },
  }

  const validateLastname = {
    required: { value: true, message: 'This field is required.' },
    maxLength: { value: 30, message: 'Maximum field length.' },
    pattern: {
      value: /^[A-Za-z]+$/,
      message: `Please, enter a valid last name.`,
    },
  }

  const validateCompanyName = {
    required: { value: true, message: 'This field is required.' },
    maxLength: { value: 50, message: 'Maximum field length.' },
    pattern: {
      value: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
      message: `Please, enter a valid company.`,
    },
  }

  const validateCompanySize = {
    required: { value: true, message: 'This field is required.' },
  }

  const validateEmail = {
    required: { value: true, message: 'This field is required.' },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: `Please, enter a valid email.`,
    },
  }

  const validatePhone = {
    required: { value: true, message: 'This field is required.' },
    maxLength: { value: 15, message: 'Maximum field length.' },
    pattern: {
      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      message: `Please, enter a valid phone.`,
    },
  }

  const validateAbout = {
    required: { value: true, message: 'This field is required.' },
    maxLength: { value: 50, message: 'Maximum field length.' },
    pattern: {
      value: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
      message: `Only letters without extra spaces.`,
    },
  }

  return {
    validateFullname,
    validateFirstname,
    validateLastname,
    validateCompanyName,
    validateCompanySize,
    validateEmail,
    validatePhone,
    validateAbout,
  }
}
