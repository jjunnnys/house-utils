import { Controller, Get, Query } from '@nestjs/common';
import { ActionType } from '@/types/ActionType';
import { BroKeragePolicyFactory } from './packages';

/**
 * 중개수수료가 얼마인지 조회하는 컨트롤러
 */
@Controller()
export class BrokerageQueryController {
  @Get('api/calc/brokerage')
  calcBrokerage(@Query('actionType') actionType: ActionType, @Query('price') priceString: string): number {
    // type의 처리에 대한 건 factory에서만 분기가 될 수 있게 함
    return BroKeragePolicyFactory.of(actionType).calculate(+priceString);
  }
}
