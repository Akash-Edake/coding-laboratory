// var stud = {
//     fName:'Alex',
//     lName: 'Simi',
//     age: 15,
//     getFullName: function(){
//         var fullNm = this.fName +' '+ this.lName
//         // console.log(fullNm);
//     }   
// }

// stud.getFullName();
// stud.fName =" CTS";
// console.log(stud.fName);


// var getHobbies = function(){
//     console.log(this.getFullName() +'is haing hobbies like ' + this.hobby1 + this.hobby2);
// }
// // getHobbies('swimming', 'watching movies');

// getHobbies.call(stud, 'swimming', 'watching movies');
// getHobbies.apply(stud, ['swimming', 'watching movies']);


// const book = {
//     title: 'Brave New World',
//     author: 'Aldous Huxley',
//   }
  

// function longerSummary(txt1, txt2) {
//         console.log(this.title, this.author);
//         console.log(txt1, txt2);
//   }
  
// //   longerSummary('test1', 'test2');

// longerSummary.call(book, 'test1', 'test2');
// longerSummary.apply(book, ['test1', 'test2']);

// var studName = function() {
//     console.log('Selected Student name is  '+ this.getFullName() )
// }

//  var getStudent = studName.bind(student);
//  getStudent();

var student = {
    'fname':'Alex',
    'lname':'Simi',
    'getFullName': function() {
        var fullName = this.fname + ' '+ this.lname;
        return fullName;
    }
}

var getHobbies = function (hobby1, hobby2) {
    console.log(this.getFullName() +' is having hobbis like ' + hobby1 +' and ' + hobby2);
}

// var getHobbies = function (hobby1, hobby2) {
//     console.log(' is having hobbis like ' + hobby1 +' and ' + hobby2);
// }

// getHobbies('watching Movies',' Cricket');

// getHobbies.call( this, 'watching Movies',' Cricket');
// getHobbies.apply(this,  ['watching Movies',' Cricket'] );

getHobbies.call( student, 'watching Movies',' Cricket');
getHobbies.apply(student,  ['watching Movies',' Cricket']);