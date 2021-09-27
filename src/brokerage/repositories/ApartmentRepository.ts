import { EntityRepository, Repository } from 'typeorm';
import { Apartment } from '../entities/apartment.entity';

@EntityRepository(Apartment)
export class ApartmentRepository extends Repository<Apartment> {}
