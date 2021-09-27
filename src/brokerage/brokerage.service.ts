import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApartmentRepository } from './repositories/ApartmentRepository';

@Injectable()
export class BrokerageService {
  constructor(
    @InjectRepository(ApartmentRepository) private apartmentRepository: ApartmentRepository,
  ) {}

  async getPriceOrThrow(apartmnetId: number): Promise<number> {
    try {
      const findPrice = await this.apartmentRepository.findOne(apartmnetId);
      return findPrice!.price;
    } catch (e) {
      throw new Error(`ENTITY NOT FOUND: ${e}`);
    }
  }
}
