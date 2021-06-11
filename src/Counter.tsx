import React, { useState } from 'react'

const Counter = () => {
    //아래와 같이 useState에 Generics를 활용하여 타입을 지정한다. 
    //하지만 useState는 알아서 type을 유추하기 때문에 굳이 안써도 된다. 
    const [counter, setCouter] = useState<number>(0); 
    const onIncrease = () => setCouter(counter+1); 
    const onDecrease = () => setCouter(counter-1); 
    return (
        <div>
            <h1>{counter}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
            
        </div>
    )
}

export default Counter;
