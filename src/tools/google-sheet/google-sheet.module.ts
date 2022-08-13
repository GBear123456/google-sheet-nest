import { Module } from '@nestjs/common';
import { GoogleSheetService } from './google-sheet.service';
import { GoogleSheetController } from './google-sheet.controller';

@Module({
  imports: [],
  controllers: [GoogleSheetController],
  providers: [GoogleSheetService],
})
export class GoogleSheetModule {}
