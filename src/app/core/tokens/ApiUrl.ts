import { InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';

export const API_URL = new InjectionToken<string>('Api Url', {
  factory: () => environment.api
})
