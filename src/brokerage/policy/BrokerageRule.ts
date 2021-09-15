/* 가격이 특정 범위일 떄 상한효율과 상한금액을 가지는 클래스 */
export class BrokerageRule {
  private brokeragePercent: number;

  private limitAmount?: number; // 상한금액

  constructor(brokeragePercent: number, limitAmount?: number) {
    this.brokeragePercent = brokeragePercent;
    this.limitAmount = limitAmount;
  }

  calcMaxBrokerage(price: number): number {
    if (!this.limitAmount) {
      return this.multiplyPercent(price);
    }
    return Math.min(this.multiplyPercent(price), this.limitAmount);
  }

  private multiplyPercent(price: number): number {
    return Math.floor((this.brokeragePercent / 100) * price);
  }
}
