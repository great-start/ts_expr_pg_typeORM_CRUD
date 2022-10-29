import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        length: 100,
    })
        post: string;

    @Column()
        status: number;

    // @Column()
    //     status: boolean;
}
