import { ActionType } from '@/types/ActionType';
import { ErrorCode, HouseUtilsException } from '../../exception/houseUtilsException';
import { BrokeragePolicy } from '../interface/bokerage-policy.inerfase';
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
        throw new HouseUtilsException(
          ErrorCode.INTERNAL_ERROR,
          '해당 actionType에 대한 정책이 존재하지 않습니다.',
        );
    }
  }
}
