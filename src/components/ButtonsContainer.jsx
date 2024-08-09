import styles from "./ButtonsContainer.module.css"
const Buttonscontainer=({onButtonClick})=>{

    const buttonNames=['AC','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','←','='];

    return(
    <div className={styles.buttonscontaner}>
    {/* use map method  */}
    {buttonNames.map((buttonName, index)=>( 
        <button
         key={index} 
         className={`${styles.button} 
          ${buttonName === 'AC' ? styles.acButton : ''}
          ${buttonName === '%' ? styles.OpButton : ''}
          ${buttonName === '/' ? styles.OpButton : ''}
          ${buttonName === '*' ? styles.OpButton : ''}
          ${buttonName === '+' ? styles.OpButton : ''}
          ${buttonName === '-' ? styles.OpButton : ''}
          ${buttonName === '=' ? styles.OpButton : ''}
          `}
         
         onClick={()=> onButtonClick(buttonName)}
         >
          {buttonName}
        </button>
    ))}
  </div>)
}
export default Buttonscontainer;