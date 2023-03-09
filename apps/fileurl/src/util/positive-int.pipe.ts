import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class PositiveIntPipe implements PipeTransform<number, number> {
    transform(value: number, metadata: ArgumentMetadata) {
        if (value >= 0) {
            return value;
        }

        throw new BadRequestException('Must be a non-negative integer');
    }
}
