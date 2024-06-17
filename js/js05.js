// <!-- 5.  У вас є масив ["1-Pyton", "2-C++", "3-C#","4-PHP"]. В результаті вам
//     потрібно отримати ["Pyton", "C++", "C#","PHP"] -->

// ДЗ - 5

const programs = ["1-Pyton", "2-C++", "3-C#", "4-PHP"];

// for (let program of programs) {
//   program2 = program.slice(2);
//   console.log(program);
//   program = program2;
//   console.log(program);
// }
// console.log(programs);

for (let i = 0; i < programs.length; i++) {
  let program = programs[i];
  //   console.log(program);
  let deletedSymbol = program.slice(2);
  programs[i] = deletedSymbol;
}

console.log(programs);
