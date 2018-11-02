'use strict';
/*
const myConst = 6;

console.log(myConst);

for (let i = 5; i < 10; i++) {
  console.log(i);
}
*/
/*
const saySomething = word => {
  console.log(word);
};

for (let i = 0; i < 4; i++) {
  saySomething('You are number' + i);
}
*/

/*
const user = {
  'first': 'Hung',
  'last': 'Saunaman'
};
user.dob = 1990;
console.log(`user ${user.first} is ${2018-user.dob} old´);
*/

class Rectangle {
  constructor(width = 5, height = 7){
    this.width = width;
    this.height = height;
  }
  get area(){
    return this.width * this.height;
  }
  set widht2(width) {
    this.width = width;
  }
}

class Square extends Rectangle{
  constructor(w){
   super(w, w);
  }
}



const mySquare = new Square(4);
//myRect.widht2 = 8;
console.log(mySquare);
console.log(mySquare.area);