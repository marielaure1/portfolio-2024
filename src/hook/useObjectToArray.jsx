import { useState, useEffect } from 'react';

const useObjectToArray = (initialObject) => {
  const [objectToArray, setObjectToArray] = useState([]);

  useEffect(() => {
    const convertObjectToArray = (obj) => {
      return Object.keys(obj).map(key => obj[key]);
    };

    setObjectToArray(convertObjectToArray(initialObject));

    
    const updateArray = () => {
      setObjectToArray(convertObjectToArray(initialObject));
    };

    const objectKeys = Object.keys(initialObject);
    objectKeys.forEach(key => {
      if (typeof initialObject[key] === 'object') {
        
        initialObject[key].addEventListener('change', updateArray);
      }
    });

    return () => {
      objectKeys.forEach(key => {
        if (typeof initialObject[key] === 'object') {
          initialObject[key].removeEventListener('change', updateArray);
        }
      });
    };
  }, [initialObject]);

  return objectToArray;
};

export default useObjectToArray;
