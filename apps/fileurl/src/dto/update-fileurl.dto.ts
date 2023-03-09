import { IsOptional, IsString, IsNumber, IsPositive, IsBoolean, IsDate } from 'class-validator';
import { StringOrNull } from "./types";

export class UpdateFileUrlDTO {
    @IsString()
    @IsOptional()
    fileurl?:     string;
    
    @IsNumber()
    @IsPositive()
    @IsOptional()
    item_id?:     number

    @IsString()
    @IsOptional()
    module_key?:  string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    app_id?:      number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    business_id?: number;

    @IsString()
    @IsOptional()
    image_alt?:   StringOrNull;
    
    @IsString()
    @IsOptional()
    image_title?: StringOrNull;
    
    @IsString()
    @IsOptional()
    description?: StringOrNull;
    
    @IsString()
    @IsOptional()
    updatedBy?:   StringOrNull;
    
    @IsString()
    @IsOptional()
    remoteAddr?:  StringOrNull;
    
    @IsString()
    @IsOptional()
    userAgent?:   StringOrNull;
    
    @IsBoolean()
    @IsOptional()
    status?:      boolean;
    
    @IsNumber()
    @IsPositive()
    @IsOptional()
    sort_order?:  number;
    
    @IsDate()
    @IsOptional()
    deletedAt?:   Date;
    
    @IsBoolean()
    @IsOptional()
    isDelete?:    boolean;
    
    @IsBoolean()
    @IsOptional()
    isPublish?:   boolean;
    
    @IsNumber()
    @IsPositive()
    @IsOptional()
    hitCount?:    number
}