import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartment } from './entities/apartment.entity';
import { ApartmentRepository } from './repository/ApartmentRepository';

@Injectable()
export class BrokerageService {
  constructor(
    @InjectRepository(Apartment) private readonly apartmentRepository: ApartmentRepository,
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
