import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column('text')
    description: string;

    @Column('decimal')
    price: number;

    @Column()
    sku: string;

    @Column()
    quentity: number;

    // @ManyToOne(() => Category, category => category.products)
    // category: Category;
   


}
