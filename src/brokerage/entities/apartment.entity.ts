import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 자료구조는 데이터에 접근해서 그 데이터만 보여 줌 -> getter setter를 굳이 구현 안해도 됨
@Entity()
export class Apartment {
  @PrimaryGeneratedColumn('rowid')
  id!: number;

  @Column('text', { nullable: false })
  name!: string;

  @Column('text', { nullable: false })
  address!: string;

  @Column('bigint', { nullable: false })
  price!: number;
}
