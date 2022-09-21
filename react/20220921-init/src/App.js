//방법1
// function App() {
//   const flag = true;
//   var name = "";
//   if (flag) name = "이것은  div입니다";
//   else name = "문래";


//   const style = {
//     backgroundColor : "yello",
//     color: "blue"
//   };

//   return (
//     <div className="class" style={style}>
//       {divv}
//       {flag && (<h3>이것은 div안에 있는 h3태그 입니다</h3>)}
//     </div>
//   );
// }

// export default App;


//방법2
// function App() {
//   const flag = true;
//   var name = "";
//   if (flag) name = "SeSAC";
//   else name = "문래";

//   return (
//     <div style ={{
//       backgroundColor : "yello",
//       color: "blue"
//     }}>
//       {name}
//       { flag ? (<h1>True</h1>):<h2>False</h2>}
//     </div>
//   );
// }

// export default App;


//실습1
import './App.css';

function App() {
  var name = "로이";
  var animal = "강아지";

  var a = "3";
  var b = "5";

  var title = "Hello World"

  return (
    <div>
      <div>
        <h3>이것은 div입니다.</h3>
        <h3>이것은 div안에 있는 h3태그 입니다.</h3>
      </div>

      <div>
        <h2>제 반려 동물의 이름은 {name}입니다.</h2>
        <h2>{name}는 {animal}입니다.</h2>
      </div>

      <div>
        { (3+5 ==8) ? (<h1>정답입니다!</h1>) : <h2>오답입니다</h2> }
      </div>

      <div>
        { a < b && (<h3>a가 b보다 큽니다</h3>)}
      </div>
      
      <div className='input'>
        <p className="test">{title}</p>
        아이디: <input className="input"></input>
        <br></br>
        <br></br>
        비밀번호: <input className="input"></input>
      </div>

      <div className='color'>
        <div className='red'></div>
        <div className='orange'></div>
        <div className='yellow'></div>
        <div className='green'></div>
        <div className='blue'></div>
        <div className='navy'></div>
        <div className='purple'></div>
      </div>
    </div>
  );
}

export default App;