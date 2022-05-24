/**
 * Array to Iterate ----
 * every()
 * filter() 
 * map()
 * reduce()
 * forEach()
 */

const developerPositions = ["React Developer", "iOS Developer", "Java Developer", "Php Developer", "Backend Developer", "ABC", "DEV"];

// if value is Backend Developer then show Backend Developer on Console, if React Developer then show UI developer

//forEach() method executes a function once for each item in the array
// developerPositions.forEach((developer) => {
//   if (developer === "Backend Developer") { console.log("Backend Developer"); }
//   else if (developer === "React Developer") { console.log("UI developer"); }
// });

/**
 * Every() => The every() method executes a function for each array element.
 */

// const belowValue = (currentValue) => currentValue.age > 18;
// let values = [19, 20, 30, 45, 60, 100];
// console.log(values.every(belowValue));

// Without ForEach Example
// if (values.every(belowValue)) {
//   console.log("everyone are adults");
// } else {
//   console.log("someof them are minors");
// }

// With ForEach Example
// let minorCount = 0;
// let adultCount = 0;
// values.forEach((value) => {
//   if (value > 18) {
//     adultCount++; // 1, 2, 3, 4, 5
//   } else {
//     minorCount++; // 1
//   }
// })

// if (minorCount > 0) {
//   console.log("someof them are minors");
// } else {
//   console.log("everyone are adults");
// }


/**
 * Filter() =>creates a new array filled with elements that pass a test provided by a function.
 */

// const developerPositions1 = ["React Developer", "iOS Developer", "Java Developer", "Php Developer", "Backend Developer", "ABC", "DEV"];

// let devs = developerPositions.filter((element) => {
//   if (element.includes("Dev")) {
//     console.log("filter:: element -->", element)
     
//   }
// })


// console.log("developerPositions1 -->", developerPositions1)
// console.log("Devs -->", devs);

/**
 * Destrcting of Array  => Destructuring means to break down a complex structure into simpler parts
 */

// let array = {
//   data: [
//     {
//       name: "Ankit",
//       age: ""
//     },
//     {
//       name: "Gorakh",
//       age: ""
//     },
//     {
//       name: "React Devs",
//       age: ""
//     }
//   ],
//   page: "1",
//   totalCount: '100',
//   allUserData: "50000",
//   abcd: "50000",
//   def: "50000",
// };

// let { data, page, totalCount, abcd } = array;


// console.log("data ==>", data);
// console.log("page ==>", page);
// console.log("totalCount ==>", totalCount);










