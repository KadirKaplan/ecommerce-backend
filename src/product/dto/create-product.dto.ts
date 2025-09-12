import { IsNotEmpty, isNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    name: string;


    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsString()
    sku: string;

    @IsNotEmpty()
    @IsNumber()
    quentity: number;

    @IsNotEmpty()
    @IsString()
    categoryId: string;
}
