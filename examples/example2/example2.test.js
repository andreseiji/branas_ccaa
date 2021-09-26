const example2 = require('./example2_after');

describe('Given validate CPF', () => {
  test('When CPF is 935.411.347-80 it is valid', () => {
    const cpf = '935.411.347-80';
    const isValid = example2.validate(cpf);
    expect(isValid).toBe(true);
  });

  test('When CPF is 93541134780 it is valid', () => {
    const cpf = '93541134780';
    const isValid = example2.validate(cpf);
    expect(isValid).toBe(true);
  });

  test('When CPF is empty it is invalid', () => {
    const cpf = '';
    const isValid = example2.validate(cpf);
    expect(isValid).toBe(false);
  });
  
  test('When CPF is 111.111.111-11 it is invalid', () => {
    const cpf = '111.111.111-11';
    const isValid = example2.validate(cpf);
    expect(isValid).toBe(false);
  });
  
  test('When CPF is 123.456.789-99 it is invalid', () => {
    const cpf = '123.456.789-99';
    const isValid = example2.validate(cpf);
    expect(isValid).toBe(false);
  });
});
