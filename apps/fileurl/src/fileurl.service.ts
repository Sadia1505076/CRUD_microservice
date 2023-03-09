import { Injectable } from '@nestjs/common';
import { CreateFileUrlDTO } from './dto/create-fileurl.dto';
import { Prisma, fileurl } from '@prisma/client';
import { PrismaService } from './prisma.service';
import * as moment from "moment";
import { UpdateFileUrlDTO } from './dto/update-fileurl.dto';
import { FileUrlOrNull } from './dto/types';

@Injectable()
export class FileUrlService {
  constructor(private prisma: PrismaService) {}

  async createFileUrl(createFileUrlDTO: CreateFileUrlDTO): Promise<fileurl> {
    let newFileUrl: Prisma.fileurlCreateInput = {
      ...createFileUrlDTO,
      status: true,
      sort_order: 1,
      isDelete: false,
      isPublish: true,
      hitCount: 0,
    };
    return this.prisma.fileurl.create({ data: newFileUrl });
  }

  async getFileUrl(
    item_id: number,
    app_id: number,
    business_id: number,
  ): Promise<FileUrlOrNull> {
    return this.prisma.fileurl.findFirst({
      where: {
        item_id,
        app_id,
        business_id,
        isDelete: false
      }
    });
  }

  async getAllFileUrls(): Promise<fileurl[]> {
    return this.prisma.fileurl.findMany({
      where: {
        isDelete: false
      }
    });
  }

  async updateFileUrl(
    id: number,
    updateFileUrlDTO: UpdateFileUrlDTO,
  ): Promise<FileUrlOrNull> {
    return this.prisma.fileurl.update({
      where: {
        id,
      },
      data: {
        ...updateFileUrlDTO,
        updatedAt: moment().toDate()
      },
    });
  }

  async deleteFileUrl(id: number): Promise<FileUrlOrNull> {
    return this.updateFileUrl(id, {
      isDelete: true,
      deletedAt: moment().toDate(),
    });
  }
}
