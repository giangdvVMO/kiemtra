import { Column, Entity, PrimaryColumn } from 'typeorm';
import { COMPANY_CONST } from './company.constant';

@Entity({ name: COMPANY_CONST.MODEL_NAME })
export class CompanyEntity {
  @PrimaryColumn('varchar', { length: 10 })
  PK_SanphamID: string;

  @Column('nvarchar', { length: 45, nullable: false })
  TenSanpham: string;

  @Column({ type: 'int' })
  NamSanxuat: number;

  @Column({ type: 'float' })
  Trongluong: string;

  @Column({ type: 'boolean' })
  Devo: boolean;
}
