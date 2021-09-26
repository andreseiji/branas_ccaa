export class Coupon {
  code: string;
  discount: number;

  constructor (
    code: string,
    discount: number
  ) {
    this.code = code;
    this.discount = discount;
 }
}
