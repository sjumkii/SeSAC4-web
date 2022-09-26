import React, { useState } from "react";
    const Event_ex = () => {
        const[info, setInfos] = useState([
            {id:1, name:'코디', mail:'codi@gmail.com'},
            {id:2, name:'윤소희', mail:'yoobsohee@gmail.com'},
        ]);
        const [nextId, setNextId] = useState(3);
        const [inputName, setInputName] = useState('');
        const [inputMail, setInputMail] = useState("");
        const onAddName = (e) => {
            setInputName(e.target.value);
        }
        const onAddMail = (e) => {
            setInputMail(e.target.value);
        }
        const onClick = () => {
            const userInfo = info.concat({
                id: nextId,
                name: inputName,
                mail: inputMail,
            });
            setNextId(nextId + 1);
            setInfos(userInfo);
            setInputName('');
            setInputMail('');
        }
        const onRemove = id => {
            const removeUser = info.filter(info => info.id !== id);
            setInfos(removeUser);
        }
        const infoList = info.map(info => <li key={info.id} onDoubleClick={()=> onRemove(info.id)}>{info.name} : {info.mail}</li>);
        return (
            <div>
                <input value={inputName} onChange={onAddName} placeholder="이름"></input>
                <input value={inputMail} onChange={onAddMail} placeholder="이메일"></input>
                <button onClick={onClick}>등록</button>
                <ul>
                    {infoList}
                </ul>
            </div>
        )
    }
export default Event_ex;