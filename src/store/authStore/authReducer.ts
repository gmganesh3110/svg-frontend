// reducers/authReducer.ts

// Define the types for the auth state and actions
interface AuthState {
    user: any | null;
    isLoggedIn: boolean;
    token: string | null;
  }
  
  interface LoginAction {
    type: 'LOGIN_SUCCESS';
    payload: {
      user: any;
      token: string;
    };
  }
  
  interface LogoutAction {
    type: 'LOGOUT';
  }
  
  type AuthActionTypes = LoginAction | LogoutAction;
  
  const initialState: AuthState = {
    user: null,
    isLoggedIn: false,
    token: null,
  };
  
  export const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload.user,
          isLoggedIn: true,
          token: action.payload.token,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isLoggedIn: false,
          token: null,
        };
      default:
        return state;
    }
  };
  