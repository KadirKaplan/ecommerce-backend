import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>

  ) { }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: {
        name: createCategoryDto.name
      }
    })
    if (category) {
      throw new ConflictException('Category already exists!')
    }
    const newCategory = await this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(newCategory);
  }



  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }


  async findOne(id: string) {
    const category = await this.categoryRepository.findOne({
      where: {
        id
      }
    });
    if (!category) {
      throw new NotFoundException('Category not found')
    }
    return category;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
