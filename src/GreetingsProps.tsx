import React from 'react'; 

type GreetingsProps = {
    name: string,
    mark: string,
    option ? : string, 
    //function을 props로 넘기는데 타입지정을 꼭 해야함 
    // return 값이 없으면 void로 타입 지정 해야함 
    onClick : (name:string) => void; 
}

// 지양 해야 할 React.FC 사용 의 예 

// const Greetings: React.FC<GreetingsProps> = ({name})=>(
//     <div>Hello, {name}</div>
// ); 

// 지향 해야 할 React.FC 생략의 예
function Greetings({name, mark, option, onClick}: GreetingsProps){
    const handleClick= () => onClick(name);  
    return(
    <div>
        <h3>
            Hello, {name}{mark}
        </h3>
        {option && <p>{option}</p>}
        <button onClick={handleClick}>Click Me</button>

    </div>
    ); 
    
}

Greetings.defaultProps = {
    mark: '!'
};



export default Greetings; 

