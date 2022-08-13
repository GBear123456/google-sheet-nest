import { Injectable } from '@nestjs/common';
import { CreateGoogleSheetDto } from './dto/create-google-sheet.dto';
import { UpdateGoogleSheetDto } from './dto/update-google-sheet.dto';
import { google } from 'googleapis';
import * as credentals from './credentials.json';
import path = require('path');

@Injectable()
export class GoogleSheetService {
  create(createGoogleSheetDto: CreateGoogleSheetDto) {
    return 'This action adds a new googleSheet';
  }

  async findAll() {
    const auth = new google.auth.GoogleAuth({
      keyFile: __dirname + '/credentials.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });
    const client = await auth.getClient();
    const spreadsheetId = process.env.SHEET_ID;
    const googleSheets = google.sheets({ version: 'v4', auth: client });

    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: 'Sheet1!A2:C',
    });

    // data processing: to make object from the raw data accoring to the email address
    const resRows = {};
    const data = getRows.data.values;
    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        const key = data[i][1].toString().toLowerCase();
        if (Object.keys(resRows).includes(key)) {
          resRows[key].push(data[i][2]);
        } else {
          resRows[key] = [data[i][2]];
        }
      }
    }
    return resRows;
  }

  findOne(id: number) {
    return `This action returns a #${id} googleSheet`;
  }

  update(id: number, updateGoogleSheetDto: UpdateGoogleSheetDto) {
    return `This action updates a #${id} googleSheet`;
  }

  remove(id: number) {
    return `This action removes a #${id} googleSheet`;
  }
}
