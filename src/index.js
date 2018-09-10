// import style from './main.css';
const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const multi = (num1, num2) => num1 * num2;
const div = (num1, num2) => { return num2 === 0 ? 'Division by 0 is not possible' : num1 / num2; };

export { sum, sub, multi, div };
