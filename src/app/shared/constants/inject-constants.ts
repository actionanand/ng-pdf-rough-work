import { InjectionToken } from '@angular/core';

import { Logger } from '../../models/loger.model';

export const LOGGER_TOKEN = new InjectionToken<Logger>('Logger Injection Token', {
  factory: () => {
    return {
      log: console.log,
    };
  },
});
