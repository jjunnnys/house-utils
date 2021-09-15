import { BrokeragePolicy } from '../interface/bokerage-policy.inerfase';
import { BrokerageRule } from './BrokerageRule';

/* 매매일 때 중개수수료를 계산해주는 클래스 */
export class PurchaseBrokeragePolicy implements BrokeragePolicy {
  private rule: BrokerageRule | undefined;

  calculate(price: number): number {
    return this.createBrokerageRule(price).calcMaxBrokerage(price);
  }

  private createBrokerageRule(price: number): BrokerageRule {
    if (price < 50_000_000) {
      this.rule = new BrokerageRule(0.6, 250_000);
    } else if (price < 200_000_000) {
      this.rule = new BrokerageRule(0.5, 800_000);
    } else if (price < 600_000_000) {
      this.rule = new BrokerageRule(0.4);
    } else if (price < 900_000_000) {
      this.rule = new BrokerageRule(0.5);
    } else {
      this.rule = new BrokerageRule(0.9);
    }
    return this.rule;
  }
}
