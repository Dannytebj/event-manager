const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: {},
  isLoading: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
    return state;
  }
}

