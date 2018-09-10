// import style from './main.css';

const fizzbuzz = (num) => {
  if (num === 0) return num;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';

  return num;
};

const foo = () => {
  return 'bla';
};

export default fizzbuzz;
