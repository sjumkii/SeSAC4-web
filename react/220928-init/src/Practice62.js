function App() {
  return (
    <div className="Student">
    </div>
  );
}

export default App;

class Student {
  constructor(name, school, age, num) {
    this.name = name;
    this.school = school;
    this.age = age;
    this.num = num;
  }
  getArea() {
    return `${'이름 : ' + this.name} ${'학교 : ' + this.school} ${'나이 : ' + this.age} ${'학번 : ' + this.num}`;
  }
}

class kim extends Student {
    constructor(height, weight) {
        this.weight = weight
        this.height = height
    }
    getArea() {
        return `${'키 : ' + this.height} ${'몸무게 : ' + this.weight}`;
    }
}
class lee extends Student {
}

let student1 = new Student('수연', "k고", 13, 28123);
console.log( student1.getArea() );

let student2 = new Student('수민', 's고', 15, 23455);
console.log( student2.getArea() );

let student3 = new Student('수현', 'm고', 14, 23214);
console.log( student3.getArea() );

let student4 = new Student('수광', 'l고', 16, 25345);
console.log( student4.getArea() );