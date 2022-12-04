enum CalculateEnum {
  PlusSign = '+',
  MinusSign = '-',
  MultiplySign = '*',
  DivideSign = '/',
  ModuloSign = '%',
}

export const calculate = (a: number, b: number, sign: string) => {
  switch (sign) {
    case CalculateEnum.PlusSign:
      return a + b;
    case CalculateEnum.MinusSign:
      return a - b;
    case CalculateEnum.MultiplySign:
      return a * b;
    case CalculateEnum.DivideSign:
      return a / b;
    case CalculateEnum.ModuloSign:
      return a % b;
  }
}