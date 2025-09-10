import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({
        enum: ['admin', 'customer']
    })
    role: string; // e.g., 'admin', 'customer'

    @Column({ default: '' })
    profile: string;

    @Column({ default: true })
    isActive: boolean;

}
