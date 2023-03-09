import { Test, TestingModule } from '@nestjs/testing';
import { FileUrlService } from './fileurl.service';

describe('FileUrlService', () => {
  let fileUrlService: FileUrlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileUrlService],
    }).compile();

    fileUrlService = module.get<FileUrlService>(FileUrlService);
  });

  it('should be defined', () => {
    expect(fileUrlService).toBeDefined();
  });
});
