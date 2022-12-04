export const calculate = (a: number, b: number, sign: string) => {
  switch (sign) {
    case '+':
      return a + b

    case '-':
      return a - b

    case '*':
      return a*b

    case '/':
      return a/b

    case '%':
      return a%b
  }
}