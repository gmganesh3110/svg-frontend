// actions/authActions.ts
export const loginSuccess = (user: string, token: string) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: { user, token },
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };
  