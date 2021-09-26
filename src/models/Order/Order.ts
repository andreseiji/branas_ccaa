import { OrderItem } from '../OrderItem/OrderItem';
import { CPFValidator } from '../../validators/CPFValidator/CPFValidator';
import { InvalidCpfError } from '../../errors/InvalidCpfError';

export class Order {
  items: Array<OrderItem>;
  couponCode: string;

  constructor (
    items: Array<OrderItem> = []
  ) {
    this.items = items;
    this.couponCode = '';
  }

  addItem(item: OrderItem): void {
    // TODO: verify if it already exists, if so, add to quantity
    this.items.push(item);
  }
  placeOrder(cpf: string): Order {
    if (!CPFValidator.isValid(cpf)) {
      throw new InvalidCpfError();
    }

    return this;
  }

}
