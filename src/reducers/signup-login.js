const signup = (state = {}, action) => {
  console.log('am I here???????????');
  switch (action.type) {
    case 'SIGN_USER_UP':
      return {...state, ...action.payload };
    default:
      return state;
  }
}

export default signup;
