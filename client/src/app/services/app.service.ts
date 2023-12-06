import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {
  private pageName: string = '';

  get getPageName() {
    return this.pageName;
  }

  set setPageName(pageName: string) {
    this.pageName = pageName;
  }
}
