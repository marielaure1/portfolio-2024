import { useState, useEffect } from 'react';

const useObjectToArray = (initialObject) => {
  const [objectToArray, setObjectToArray] = useState([]);

  useEffect(() => {
    const convertObjectToArray = (obj) => {
      const array = [];

      Object.values(obj).map((value) => {
        array.push(value);
      });

      return array;
    };

    setObjectToArray(Object.values(initialObject));


  }, []);

  console.log(objectToArray);
  console.log(typeof(objectToArray));

  return {objectToArray};
};

export default useObjectToArray;
