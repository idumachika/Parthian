export const generateRandom = (maxLimit = 100000000000) => {
  let rand = Math.random() * maxLimit;
  rand = Math.floor(rand); // 99

  return rand;
};

export const validateAmount = (input: string): boolean => {
   const amount = parseFloat(input);
   return !isNaN(amount) && amount >= 100 && amount <= 10000000;
 };

