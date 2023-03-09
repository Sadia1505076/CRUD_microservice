import { IsNotEmpty, IsNumber, IsString, IsPositive } from 'class-validator';

export class CreateFileUrlDTO {
    @IsNotEmpty()
    fileurl:     string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    item_id:     number;

    @IsString()
    @IsNotEmpty()
    module_key:  string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    app_id:      number;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    business_id: number;
}