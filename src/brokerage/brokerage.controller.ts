import { Controller, Get, Query } from '@nestjs/common';
import { ActionType } from '@/types/ActionType';
import { BroKeragePolicyFactory } from './policy';
import { BrokerageService } from './brokerage.service';

const dummyDBApartment = [
  { id: 1, address: '서울시 강남구', name: '퍼스트 클래스 아파트', price: 1_000_000_000 },
  { id: 2, address: '서울시 송파구', name: '리버뷰 아파트', price: 800_000_000 },
];

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
    @Query('apartmentId') id: number,
    @Query('actionType') actionType: ActionType,
  ): Promise<number> {
    const policy = BroKeragePolicyFactory.of(actionType);
    // const price: number = await this.brokerageService.getPriceOrThrow(id); // TODO: apartmentId -> price  DB에서 금액을 가져와서 계산
    // return policy.calculate(price);

    try {
      const resultPrice = new Promise<number>((resolve, reject) => {
        const price = dummyDBApartment.find((apart) => apart.id === id)?.price;
        if (price) {
          return resolve(price);
        }
        return reject(new Error('찾는 id 값이 없습니다.'));
      });
      const price = await resultPrice;
      return policy.calculate(price);
    } catch (error) {
      throw new Error(`ENTITY NOT FOUND: ${error}`);
    }
  }
}
