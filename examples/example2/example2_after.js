const CPF_VALID_LENGTH = 11;
const FACTOR_FIRST_DIGIT = 10;
const FACTOR_SECOND_DIGIT = 11;

const cleanCpf = (cpf) => cpf.replace(/\D+/g,'');

const charsAreTheSame = (str) => {
  const [firstDigit] = str;
  return [...str].every(c => c === firstDigit);
};

const calculateDigit = (cpf, factor) => {
  let total = 0;
  for (const digit of cpf) {
    if (factor > 1) {
      total = total + parseInt(digit) * factor--;
    }
  }
  const remainder = total % 11;
  return (remainder < 2) ? 0 : (11 - remainder);
}

const getVerifierDigits = (cpf) => cpf.slice(9);

function validate(str) {
  const cpf = cleanCpf(str);

  if (!cpf) return false;
  if (cpf.length !== CPF_VALID_LENGTH) return false;
  if (charsAreTheSame(cpf)) return false;

  const firstDigit = calculateDigit(cpf, FACTOR_FIRST_DIGIT);
  const secondDigit = calculateDigit(cpf, FACTOR_SECOND_DIGIT);
  const verifierDigits = getVerifierDigits(cpf);
  const calculatedVerifierDigits = `${firstDigit}${secondDigit}`;

  return verifierDigits === calculatedVerifierDigits;
}

module.exports = {
  validate
}
