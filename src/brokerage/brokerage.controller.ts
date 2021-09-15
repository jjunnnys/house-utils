import { Controller, Get, Query } from '@nestjs/common';
import { ActionType } from '@/types/ActionType';
import { BroKeragePolicyFactory } from './policy';

@Controller('api/calc/brokerage')
export class BrokerageController {
  @Get()
  calcBrokerage(@Query('actionType') actionType: ActionType, @Query('price') price: number): number {
    // type의 처리에 대한 건 factory에서만 분기가 될 수 있게 함
    const policy = BroKeragePolicyFactory.of(actionType);
    return policy.calculate(price);
  }
}
