import { HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { FileUrlController } from './fileurl.controller';
import { FileUrlService } from './fileurl.service';

const httpMocks    = require("node-mocks-http");
const mockResponse = httpMocks.createResponse();

describe('FileurlController', () => {
  let fileUrlController: FileUrlController;
  
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FileUrlController],
      providers:   [FileUrlService],
    }).compile();

    fileUrlController = app.get<FileUrlController>(FileUrlController);
  });

  describe('root', () => {
    let mockCreateFileUrlDTO = {
      fileurl:     "https://dummy/imageUrl",
      item_id:     1,
      module_key:  "ecom.product.image",
      app_id:      1,
      business_id: 1
    }

    it('should return 201', () => {
      expect(fileUrlController.create(mockResponse, mockCreateFileUrlDTO).then(res => {
        return res.statusCode;
      })).toBe(HttpStatus.CREATED); 
    });
  });
});