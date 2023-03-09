import { Module } from '@nestjs/common';
import { FileUrlController } from './fileurl.controller';
import { FileUrlService } from './fileurl.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [FileUrlController],
  providers: [FileUrlService, PrismaService],
})
export class FileurlModule {}
