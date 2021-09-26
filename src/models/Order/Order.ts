import { OrderItem } from '../OrderItem/OrderItem';

export class Order {
  items: Array<OrderItem>;
  couponCode: string | null;

  constructor (
    items: Array<OrderItem> = [],
    couponCode: string | null = null
  ) {
    this.items = items;
    this.couponCode = couponCode;
  }

  addItem(item: OrderItem): void {
    // TODO: verify if it already exists, if so, add to quantity
    this.items.push(item);
  }

}
