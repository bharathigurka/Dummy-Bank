import { environment } from '../environments/environment';

export const APP_CONFIG = {
  // we can set environment variable by using commands  dynamically
  serverEnvironments: ['static', 'stage', 'prod', 'uat'],
  apiMode: environment.APIMODE,
  httpTimeout: 60000,
  amountType: ['CRDT', 'DBIT'],
};
