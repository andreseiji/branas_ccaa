import { Item } from '../Item/Item';

export class OrderItem extends Item {
  quantity: number;

  constructor (
    description: string,
    price: number,
    quantity: number
  ) {
    super(description, price);
    this.quantity = quantity;
 }
}
