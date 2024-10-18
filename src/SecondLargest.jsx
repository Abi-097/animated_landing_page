import { useState } from "react";

const SecondLargest = () => {
  const [array, setArray] = useState([7, 5, 3, 6, 8]);
  const [secondLargest, setSecondLargest] = useState(null);

  const findValue = () => {
    if (array.length < 2) {
      setSecondLargest("Array needs at least two elements");
      return;
    }

    let first = -Infinity,
      second = -Infinity;

    array.forEach((num) => {
      if (num > first) {
        second = first;
        first = num;
      } else if (num > second && num !== first) {
        second = num;
      }
    });

    setSecondLargest(second === -Infinity ? "No second largest value" : second);
  };

  return (
    <div>
      <p>Array: {JSON.stringify(array)}</p>
      <button onClick={findValue}>Find Second Largest</button>
      {secondLargest !== null && <p>Second Largest: {secondLargest}</p>}
    </div>
  );
};

export default SecondLargest;
