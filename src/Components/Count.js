import { useState } from "react";

const Count = (props) => {
    let [number, setCount] = useState(0) // set count number + -
    return (
        <div className="Count">
            <h3>{number}</h3>
            <button type='button' onClick={() => { setCount(number + 1) }}>+</button>
            <button type='button' onClick={() => { setCount(number - 1) }}>-</button>
        </div>
    )
}
export default Count;