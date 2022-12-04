import {calculate} from "./calc";

const calcWithRpn = (value: string[]) => {
  const STEPS_TO_DO = value.length;
  const mathSigns = '+-*/%';
  const stack = [];
  let actualStep = 0;
  for (const element of [...value]){
    actualStep++;
    if(!isNaN(Number(element))) {
      stack.push(element);
      continue;
    }

    if(mathSigns.includes(element)){
      const a = stack.splice(stack.length-1, 1);
      const b = stack.splice(stack.length-1, 1);
      const math = calculate(Number(b), Number(a), element);

      stack.push(String(math));

      if(actualStep === STEPS_TO_DO){
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
console.log(calcWithRpn(['2', '9', '3', '/', '+', '14', '3', '2', '+', '*', '+']))