import { useState, useEffect } from 'react';

export const useMovement = () => {
  // Attribution des actions à chaque code de touches
  const keys = { KeyW: 'forward', KeyS: 'backward', KeyA: 'left', KeyD: 'right', Space: 'jump' };

  const [movement, setMovement] = useState({ forward: false, backward: false, left: false, right: false, jump: false });

  useEffect(() => {
    // on modifie la valeur de l'action ayant commencer
    const handleKeyDown = (e) => {
      setMovement((m) => ({ 
        ...m, [keys[e.code]]: true 
      }))
    };

    // on modifie la valeur de l'action ayant terminer
    const handleKeyUp = (e) => {
      setMovement((m) => ({ 
        ...m, [keys[e.code]]: false
      }))
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return movement;
};
