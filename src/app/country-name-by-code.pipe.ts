import { Pipe, PipeTransform } from '@angular/core';
const COUNTRY_NAMES = {
  TR: 'Türkiye',
};
@Pipe({
  name: 'countryNameByCode',
  standalone: true,
})
export class CountryNameByCodePipe implements PipeTransform {
  transform(val: string | undefined): string {
    if (COUNTRY_NAMES[val as keyof typeof COUNTRY_NAMES]) {
      return COUNTRY_NAMES[val as keyof typeof COUNTRY_NAMES];
    }
    return 'Bilinmiyor';
  }
}
