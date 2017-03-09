import { Injectable } from '@angular/core';

@Injectable()
export class MateService {

  constructor() { }

  toUp(cuvant: string): string {
    return cuvant.toUpperCase();
  }

}
