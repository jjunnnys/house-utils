export interface BrokeragePolicy {
  //   createBrokerageRule(price: number): BrokerageRule;
  calculate(price: number): number;
}
