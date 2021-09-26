export class InvalidCpfError extends Error {
  constructor() {
    super();
    this.message = 'CPF is invalid';
  }
}
