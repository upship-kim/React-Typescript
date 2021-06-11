import React from 'react'; 

type GreetingsProps = {
    name: string,
    mark: string,
    option ? : string; 
    onClick : (name:string) => void; 
}

// 지양 해야 할 React.FC 사용 의 예 

// const Greetings: React.FC<GreetingsProps> = ({name})=>(
//     <div>Hello, {name}</div>
// ); 

// 지향 해야 할 React.FC 생략의 예
function Greetings({name, mark,option, onClick}: GreetingsProps){
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

