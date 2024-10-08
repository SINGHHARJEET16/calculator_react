import styles from "./App.module.css"
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  
  const [calValue, setCalValue]= useState("");
  const onButtonClick = (buttonName) => {
    if(buttonName==='AC'){
      setCalValue("");
    }else if(buttonName==='='){
      const result = eval(calValue);
      setCalValue(result);
    }else if(buttonName==='←'){
      const del= calValue.substring(0,calValue.length-1);
      setCalValue(del); 
    }   else if (buttonName === ".") {
      const lastNumber = calValue.split(/[\+\-\*\/]/).pop();
      if (!lastNumber.includes(".")) {
        setCalValue(calValue + ".");
      }
    
    }else{
      const newDisplayValue= calValue + buttonName;
      setCalValue(newDisplayValue);
    }
  }
   return(
<div className={styles.calculator}>
  <Display displayValue={calValue}></Display>
 <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
</div>
  );
}

export default App;
