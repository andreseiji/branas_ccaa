import { Coupon } from '../Coupon/Coupon';
import { OrderItem } from '../OrderItem/OrderItem';
import { CPFValidator } from '../../validators/CPFValidator/CPFValidator';
import { InvalidCpfError } from '../../errors/InvalidCpfError';

export class Order {
  items: Array<OrderItem>;
  price: number;

  constructor (
    items: Array<OrderItem> = []
  ) {
    this.items = items;
    this.price = this.calculatePrice();
  }

  addItem(item: OrderItem): void {
    // TODO: verify if it already exists, if so, add to quantity
    this.items.push(item);
  }

  calculatePrice(coupon?: Coupon): number {
    let discount = 0;
    const orderPrice = this.items.reduce((price, item) => price + item.price * item.quantity, 0);
    if (coupon) {
      discount = coupon.discount;
    }
    return orderPrice - orderPrice * discount;
  }

  placeOrder(cpf: string, coupon?: Coupon): Order {
    if (!CPFValidator.isValid(cpf)) {
      throw new InvalidCpfError();
    }

    this.price = this.calculatePrice(coupon);

    return this;
  }

}
