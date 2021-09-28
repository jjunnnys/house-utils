import { Controller, Get, Param, Query } from '@nestjs/common';
import { ActionType } from '@/types/ActionType';
import { BroKeragePolicyFactory } from './policy';
import { BrokerageService } from './brokerage.service';

@Controller('api/calc')
export class BrokerageController {
  constructor(private brokerageService: BrokerageService) {}

  @Get('brokerage')
  calcBrokerage(
    @Query('actionType') actionType: ActionType,
    @Query('price') price: number,
  ): number {
    // type의 처리에 대한 건 factory에서만 분기가 될 수 있게 함
    const policy = BroKeragePolicyFactory.of(actionType);
    return policy.calculate(price);
  }

  // 이 아파트는 얼마??
  @Get('apartment/:apartmentId')
  async calcBrokerageByApartmentId(
    @Param('apartmentId') id: number,
    @Query('actionType') actionType: ActionType,
  ): Promise<number> {
    const policy = BroKeragePolicyFactory.of(actionType);

    try {
      const price: number = await this.brokerageService.getPriceOrThrow(id); // TODO: apartmentId -> price  DB에서 금액을 가져와서 계산
      return policy.calculate(price);
    } catch (error) {
      throw new Error(`ENTITY NOT FOUND: ${error}`);
    }
  }
}
