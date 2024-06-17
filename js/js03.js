const programNames = ["Pyton", "C++", "C#", "PHP", "1"];
let searchProgram = prompt("ВЕДЕИ ЗНАЧЕННЯ");
let position = -1;

for (let i = 0; i < programNames.length; i++) {
  if (programNames[i] === searchProgram) {
    position = i;
    console.log(position);
    break;
  }
}
console.log(position);

if (position !== -1) {
  alert("ВВЕДЕНА МОВА Є У МАСИВІ");
} else {
  alert("ВВЕДЕНА МОВА ВІДСУТНЯ,ДОБАВЛЯЮ У МАСИВ");
  programNames.push(searchProgram);
}

console.log(programNames);
