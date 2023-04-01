import {useState} from 'react';

const LOGIN_ERROR_MESSAGE =
  'Wystapil blad podczas logowania, skontaktuj sie z administratorem';

export const useLoginHandler = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>();

  const isCredentialsValid = (): boolean => {
    // TODO: Implement proper validation when needed
    return password !== 'e-v';
  };

  const logIn = () => {
    const validCredentials = isCredentialsValid();
    if (!validCredentials) {
      return setError(LOGIN_ERROR_MESSAGE);
    }
    setError(undefined);
    // TODO: Handle success
  };

  const onLoginChange = (text: string) => {
    setLogin(text);
  };

  const onPasswordChange = (text: string) => {
    setPassword(text);
  };

  return {
    login,
    password,
    logIn,
    actions: {onLoginChange, onPasswordChange},
    loginError: error,
  };
};
