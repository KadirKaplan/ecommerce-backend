import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "src/category/entities/category.entity";
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

    @ManyToOne(() => Category, category => category.product)
    category: Category;
    


}
