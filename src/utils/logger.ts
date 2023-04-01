import {getLocaleDateTime} from './date';

// TODO: Logger in release mode should log to some external tool, not the console
export const Logger = {
  log: (TAG: string, message?: any, ...optionalParams: any[]) => {
    if (!__DEV__) {
      return;
    }
    console.log(
      `[${getLocaleDateTime()}] {${TAG}}:`,
      message,
      ...optionalParams,
    );
  },
  warn: (TAG: string, message?: any, ...optionalParams: any[]) => {
    if (!__DEV__) {
      return;
    }
    console.warn(
      `[${getLocaleDateTime()}] {${TAG}}:`,
      message,
      ...optionalParams,
    );
  },
  error: (TAG: string, message?: any, ...optionalParams: any[]) => {
    if (!__DEV__) {
      return;
    }
    console.error(
      `[${getLocaleDateTime()}] {${TAG}}:`,
      message,
      ...optionalParams,
    );
  },
};
