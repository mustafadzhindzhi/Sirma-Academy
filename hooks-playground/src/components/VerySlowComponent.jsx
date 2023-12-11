import { useCallback, useMemo, useState } from "react";

function VerySlowComponent() {
  const [count, setCount] = useState(0);
  const expensiveCalculation = useMemo(() => {
    /**In here we are performing very heavy and expensive mathematical operations */
    return count * 2;
  }, [count]);

  const handleClick = useCallback(() => {
    setCount(count+1);
  }, [count]);

  return (
    <div>
        <p>Very expensive calculation and mathemtical magic result: {expensiveCalculation}</p>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default VerySlowComponent;
