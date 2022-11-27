import { useState } from 'react';
import { menuContext } from './menuContext';

type props = {
  children: React.ReactNode;
}

const MenuContextProvider = ({ children }: props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <menuContext.Provider value={{ isVisible, setIsVisible }}>
      {
        children
      }
    </menuContext.Provider>
  )
} 

export default MenuContextProvider;