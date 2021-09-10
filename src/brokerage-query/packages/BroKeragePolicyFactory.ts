import { ActionType } from '@/types/ActionType';
import { BrokeragePolicy } from './BrokeragePolicy';
import { PurchaseBrokeragePolicy } from './PurchaseBrokeragePolicy';
import { RentBrokeragePolicy } from './RentBrokeragePolicy';

export class BroKeragePolicyFactory {
  public static of(actionType: ActionType): BrokeragePolicy {
    switch (actionType) {
      case 'RENT':
        return new RentBrokeragePolicy();
      case 'PURCHASE':
        return new PurchaseBrokeragePolicy();
      default:
        throw new Error('Illegal Argument Exception: 해당 actionType에 대한 정책이 존재하지 않습니다.');
    }
  }
}
