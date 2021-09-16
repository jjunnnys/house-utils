import { Repository } from 'typeorm';
import { Apartment } from '../entities/apartment.entity';

export interface ApartmentRepository extends Repository<Apartment> {}
