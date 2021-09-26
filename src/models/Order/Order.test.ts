import { Order } from './Order';
import { OrderItem } from '../OrderItem/OrderItem';
import { InvalidCpfError } from '../../errors/InvalidCpfError';

describe('Given Order', () => {
  describe('When CPF is invalid', () => {
    test('it should throw invalid CPF error', () => {
      const cpf = '123.456.789-99';
      const items: Array<OrderItem> = [];
      const order = new Order(items);
      expect(() => {
        order.placeOrder(cpf);
      }).toThrow(new InvalidCpfError());
    });

    test('it should throw invalid CPF error', () => {
      const cpf = '';
      const items: Array<OrderItem> = [];
      const order = new Order(items);
      expect(() => {
        order.placeOrder(cpf);
      }).toThrow(new InvalidCpfError());
    });
  });
});
