import {useRef, useState} from 'react';
import {Logger} from '../../utils/logger';

const LOGIN_ERROR_MESSAGE =
  'Wystapil blad podczas logowania, skontaktuj sie z administratorem';

const MUST_FILL_INPUTS = 'Wprowadź login i hasło';

const TAG = 'useLoginHandler';

export const useLoginHandler = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>();
  const isLogging = useRef<boolean>(false);

  const onLoginEnd = () => (isLogging.current = false);

  const logIn = () => {
    Logger.log(TAG, 'logIn called');
    if (isLogging.current) {
      return;
    }
    isLogging.current = true;
    if (login.length < 1 || password.length < 1) {
      setError(MUST_FILL_INPUTS);
      onLoginEnd();
      return;
    }
    if (password !== 'e-v') {
      setError(LOGIN_ERROR_MESSAGE);
      onLoginEnd();
      return;
    }
    Logger.log(TAG, 'logIn success');
    onLoginEnd();
  };

  const onLoginChange = (text: string) => {
    setLogin(text);
    setError(undefined);
  };

  const onPasswordChange = (text: string) => {
    setPassword(text);
    setError(undefined);
  };

  return {
    login,
    password,
    logIn,
    actions: {onLoginChange, onPasswordChange},
    loginError: error,
  };
};
