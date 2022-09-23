import React, {useState} from 'react';

function StateFuntion () {
    const [msg, setMsg] = useState("");
    const [list, setList] = useState([]);
    // this.state {
        //msg: ""
    // }
    
    function changeMsg() {
        setMsg('메세지')
        // setStaet({msg: "메세지"})
    }

    return (
        <div>
            <p>{msg}</p>
            StateFuntion
            <button onClick={changeMsg}>클릭</button>
        </div>
    )
}
export default StateFuntion;