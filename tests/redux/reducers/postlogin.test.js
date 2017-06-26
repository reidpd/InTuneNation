import loginReducer from '../../../src/reducers/login.js';

describe('loginReducer', function() {
  it('returns an empty object if passed in state that is undefined', function() {
    const nextState = loginReducer(undefined, {});
    expect(nextState).toEqual({loginSuccess: null});
  });

  it('returns the exact same state given an unknown type (i.e., does not modify the state)', function() {
    const prevState = {};
    const nextState = loginReducer(prevState, {type: 'FOOBAR'});
    expect(nextState).toBe(prevState);
  });

  it('returns a new state with the specified articles set on it', function() {
    const prevState = {};
    const action = {
      type: 'USER_LOG_IN_FULFILLED',
      payload: {
        data: {
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTQ5NzgxNDg5MywiZXhwIjoxNDk4NDE5NjkzfQ.vAG1sQ1lUHh9hZmLmFk4ToIUb9bYRBcT2x3q7tnJFE0",
          id: "2",
          firstName: "Kevin",
          lastName: "Zheng",
          email: "kvinzheng@gmail.com",
          profile_picture: "https://lh4.googleusercontent.com/-Ro0sSQVz7s0/AAAAAAAAAAI/AAAAAAAAAZ4/Ip6fTqSbzAk/photo.jpg?sz=2200"
        },
      }
    }
    const nextState = loginReducer(prevState, action);
    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTQ5NzgxNDg5MywiZXhwIjoxNDk4NDE5NjkzfQ.vAG1sQ1lUHh9hZmLmFk4ToIUb9bYRBcT2x3q7tnJFE0",
      id: "2",
      firstName: "Kevin",
      lastName: "Zheng",
      email: "kvinzheng@gmail.com",
      profile_picture: "https://lh4.googleusercontent.com/-Ro0sSQVz7s0/AAAAAAAAAAI/AAAAAAAAAZ4/Ip6fTqSbzAk/photo.jpg?sz=2200",
      loginSuccess: true
    } );
  });
});
