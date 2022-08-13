import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GoogleSheetService } from './google-sheet.service';
import { CreateGoogleSheetDto } from './dto/create-google-sheet.dto';
import { UpdateGoogleSheetDto } from './dto/update-google-sheet.dto';

@Controller('getData')
export class GoogleSheetController {
  constructor(private readonly googleSheetService: GoogleSheetService) {}

  @Post()
  create(@Body() createGoogleSheetDto: CreateGoogleSheetDto) {
    return this.googleSheetService.create(createGoogleSheetDto);
  }

  @Get()
  findAll() {
    return this.googleSheetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.googleSheetService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGoogleSheetDto: UpdateGoogleSheetDto,
  ) {
    return this.googleSheetService.update(+id, updateGoogleSheetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.googleSheetService.remove(+id);
  }
}
