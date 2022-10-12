import {useState} from "react";
import {useEffect} from "react";

function UseStateHookExample(){

    const[counter,setcounter]=useState(0);

    const[counter2,setcounter2]=useState(0);

    const handleClick=() => {
        const v= counter + 1;
        setcounter(v)
        setcounter2(v)
    }

    useEffect(() => {
      const v=counter + 1;
        setcounter2(v);
    }, [counter])
    

return(
    <>
    <p> Use State Hook Example  </p>
    <p> { counter }</p>
    <p> { counter2 }</p>
    <button type="submit" onClick={handleClick}>Click here </button>
    </> 
)
}

export default UseStateHookExample;