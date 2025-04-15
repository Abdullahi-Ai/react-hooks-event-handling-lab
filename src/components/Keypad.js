// Code Keypad Component Here

function Keypad (){
    
        function changeFn(){
            console.log("Entering password...");
        }
        return(
            <div>
                <input type="password" onChange={changeFn} />
                </div>
    )
}

export default Keypad;