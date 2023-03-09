import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  NotFoundException,
  Body,
  Put,
  Delete,
  Post,
} from '@nestjs/common';
import { CreateFileUrlDTO } from './dto/create-fileurl.dto';
import { UpdateFileUrlDTO } from './dto/update-fileurl.dto';
import { FileUrlService } from './fileurl.service';
import { PositiveIntPipe } from './util/positive-int.pipe';

@Controller('')
export class FileUrlController {
  constructor(private fileUrlService: FileUrlService) {}

  @Post('')
  async create(@Res() res, @Body() createFileUrlDTO: CreateFileUrlDTO) {
    const newFileUrl = await this.fileUrlService.createFileUrl(
      createFileUrlDTO,
    );
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      message: 'New file url is created',
      data: newFileUrl,
    });
  }

  @Get('/:item_id/:app_id/:business_id')
  async getFileUrl(
    @Res() res,
    @Param('item_id', PositiveIntPipe) item_id: number,
    @Param('app_id', PositiveIntPipe) app_id: number,
    @Param('business_id', PositiveIntPipe) business_id: number,
  ) {
    const fileUrl = await this.fileUrlService.getFileUrl(
      item_id,
      app_id,
      business_id,
    );
    if (!fileUrl) {
      throw new NotFoundException('FileUrl does not exist!');
    }
    // updating hit count
    let updatedFileUrl = await this.fileUrlService.updateFileUrl(fileUrl.id, {
      hitCount: fileUrl.hitCount + 1
    })

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'ok',
      data: updatedFileUrl,
    });
  }

  @Get('')
  async getFileUrls(@Res() res) {
    const fileUrls = await this.fileUrlService.getAllFileUrls();
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'ok',
      data: fileUrls,
    });
  }

  @Put(':id')
  async updateFileUrl(
    @Res() res,
    @Param('id', PositiveIntPipe) id: number,
    @Body() updateFileUrlDTO: UpdateFileUrlDTO,
  ) {
    try {
      const editedFileUrl = await this.fileUrlService.updateFileUrl(
        id,
        updateFileUrlDTO,
      );
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'ok',
        data: editedFileUrl,
      });
    } catch (error) {
      throw new NotFoundException('fileurl does not exist!');
    }
  }

  @Delete(':id')
  async deleteFileUrl(@Res() res, @Param('id', PositiveIntPipe) id: number) {
    try {
      const deletedFileUrl = await this.fileUrlService.deleteFileUrl(id);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'ok',
        data: deletedFileUrl,
      });
    } catch (error) {
      throw new NotFoundException('FileUrl does not exist!');
    }
  }
}
