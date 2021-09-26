import { CPFValidator } from './CPFValidator';

describe('Given validate CPF', () => {
  test('When CPF is 935.411.347-80 it is valid', () => {
    const cpf = '935.411.347-80';
    expect(CPFValidator.isValid(cpf)).toBe(true);
  });

  test('When CPF is 93541134780 it is valid', () => {
    const cpf = '93541134780';
    expect(CPFValidator.isValid(cpf)).toBe(true);
  });

  test('When CPF is empty it is invalid', () => {
    const cpf = '';
    expect(CPFValidator.isValid(cpf)).toBe(false);
  });
  
  test('When CPF is 111.111.111-11 it is invalid', () => {
    const cpf = '111.111.111-11';
    expect(CPFValidator.isValid(cpf)).toBe(false);
  });
  
  test('When CPF is 123.456.789-99 it is invalid', () => {
    const cpf = '123.456.789-99';
    expect(CPFValidator.isValid(cpf)).toBe(false);
  });
});
