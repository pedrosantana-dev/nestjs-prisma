import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ReviewsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createReviewDto: Prisma.ReviewCreateInput) {
    return this.databaseService.review.create({ data: createReviewDto });
  }

  findAll() {
    return this.databaseService.review.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.review.findUnique({
      where: { id },
    });
  }

  update(id: number, updateReviewDto: Prisma.ReviewUpdateInput) {
    return this.databaseService.review.update({
      where: {
        id,
      },
      data: updateReviewDto,
    });
  }

  remove(id: number) {
    return this.databaseService.review.delete({
      where: { id },
    });
  }
}
