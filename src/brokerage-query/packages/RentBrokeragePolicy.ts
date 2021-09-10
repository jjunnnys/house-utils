import { BrokeragePolicy } from './BrokeragePolicy';
import { BrokerageRule } from './BrokerageRule';

/* 임대차 때 중개수수료를 계산해주는 클래스 */
export class RentBrokeragePolicy implements BrokeragePolicy {
  private rule: BrokerageRule | undefined;

  calculate(price: number): number {
    return this.createBrokerageRule(price).calcMaxBrokerage(price);
  }

  private createBrokerageRule(price: number): BrokerageRule {
    if (price < 50_000_000) {
      this.rule = new BrokerageRule(0.5, 200_000);
    } else if (price < 100_000_000) {
      this.rule = new BrokerageRule(0.3, 300_000);
    } else if (price < 300_000_000) {
      this.rule = new BrokerageRule(0.3);
    } else if (price < 600_000_000) {
      this.rule = new BrokerageRule(0.4);
    } else {
      this.rule = new BrokerageRule(0.8);
    }
    return this.rule;
  }
}
