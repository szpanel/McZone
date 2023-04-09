import {useState} from 'react';

// TODO: Implement me later
export const useUnreadMessages = () => {
  return useState<number>(Math.floor(0 + Math.random() * (3 - 0 + 1)))[0];
};
