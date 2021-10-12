const validateSameChar = (str) => !str.split('').every(c => c === str[0]);

const getVerifierDigit = (digit) => {
  const remainder = (digit % 11);
  return (remainder < 2) ? 0 : 11 - remainder;
}

function validate(str) {
  const cpf = str.replace(/\D+/g,'');

  if (!cpf) {
    return false;
  }

  if (cpf.length !== 11) {
    return false;
  }

  if (!validateSameChar(cpf)) {
    return false;
  }
  
  const firstDigits = cpf.substring(0, 9).split('');
  const verifierDigits = cpf.substring(9, 11);
  let d1, d2;
  d1 = d2 = 0;

  firstDigits.forEach((d, index) => {
    let digit = parseInt(d);
    d1 = d1 + ( 10 - index ) * digit;
    d2 = d2 + ( 11 - index ) * digit;
  });

  const firstVerifier = getVerifierDigit(d1);
  d2 = d2 + 2 * firstVerifier;
  const secondVerifier = getVerifierDigit(d2);

  return verifierDigits == `${firstVerifier}${secondVerifier}`;
}

module.exports = {
  validate
}
