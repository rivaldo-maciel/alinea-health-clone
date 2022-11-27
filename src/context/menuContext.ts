import { createContext, Dispatch, SetStateAction } from 'react';

type MenuContext = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export const menuContext = createContext<MenuContext>({ isVisible: false, setIsVisible: () => {}});