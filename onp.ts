import {calculate} from "./calc";

const calcWithRpn = (value: string[]) => {
  const mathSigns = '+-*/%';
  const stack = [];

  for (const element of [...value]){
    if(!isNaN(Number(element))) {
      stack.push(element);
      continue;
    }

    if(mathSigns.includes(element)){
      const a = stack.splice(stack.length-1, 1);
      const b = stack.splice(stack.length-1, 1);
      const math = calculate(Number(b), Number(a), element);

      stack.push(String(math));

      if(stack.length === 1 && value[value.length-1] === element){
        return stack[0];
      }
    }

  }
}

console.log(calcWithRpn(['2', '3', '5', '-', '3', '*', '-']))
console.log(calcWithRpn(['4', '7', '-']))
console.log(calcWithRpn(['4', '2', '8', '-', '*']))
console.log(calcWithRpn(['2', '4', '+', '4', '6', '-', '*']))
console.log(calcWithRpn(['5', '3', '7', '-', '2', '*', '3', '5', '1', '+', '*', '-', '*', '3', '-']))