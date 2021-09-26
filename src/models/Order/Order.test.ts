import { Order } from './Order';
import { OrderItem } from '../OrderItem/OrderItem';
import { InvalidCpfError } from '../../errors/InvalidCpfError';
import { Coupon } from '../Coupon/Coupon';

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

  describe('When 3 items are added', () => {
    test('it should place order with 3 items', () => {
      const cpf = '935.411.347-80';
      const items: Array<OrderItem> = [];
      const order = new Order(items);
      const apple = new OrderItem('apple', 2, 1);
      const banana = new OrderItem('banana', 1.50, 1);
      const carrot = new OrderItem('carrot', 1.0, 1);
      order.addItem(apple);
      order.addItem(banana);
      order.addItem(carrot);
      const placedOrder = order.placeOrder(cpf);
      expect(placedOrder.items).toHaveLength(3);
    });
  });

  describe('When order has no disccount', () => {
    test('it should place order full value', () => {
      const cpf = '935.411.347-80';
      const items: Array<OrderItem> = [];
      const order = new Order(items);
      const apple = new OrderItem('apple', 6, 1);
      const banana = new OrderItem('banana', 4, 1);
      order.addItem(apple);
      order.addItem(banana);
      const placedOrder = order.placeOrder(cpf);
      expect(placedOrder.price).toBe(10);
    });
  });

  describe('When order has 70% disccount coupon', () => {
    test('it should place order with discount', () => {
      const cpf = '935.411.347-80';
      const items: Array<OrderItem> = [];
      const order = new Order(items);
      const apple = new OrderItem('apple', 6, 1);
      const banana = new OrderItem('banana', 4, 1);
      const coupon = new Coupon('promobomba', 0.7);
      order.addItem(apple);
      order.addItem(banana);
      const placedOrder = order.placeOrder(cpf, coupon);
      expect(placedOrder.price).toBe(3);
    });
  });
});
