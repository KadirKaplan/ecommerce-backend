import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Category } from 'src/category/entities/category.entity';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) { }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const { categoryId, name,  ...rest } = createProductDto;
    const category = await this.categoryRepository.findOne({
      where: {
        id: categoryId
      }
    })
    if(!category) {
      throw new NotFoundException('Category not found')
    }
    const product = await this.productRepository.findOne({
      where: {
        name
      }
    });
  
    if (product) {
      throw new ConflictException('Product already exists');
    }
    const newProduct = this.productRepository.create({...rest, name, category});
    return await this.productRepository.save(newProduct);
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
