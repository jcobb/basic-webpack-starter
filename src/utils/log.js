import { APP_ID } from '../constants/constants';

/* eslint-disable no-console */
const error = (msg, payload = '') =>
  console.error(`[${APP_ID}] ${msg}`, payload);

const warn = (msg, payload = '') =>
  console.warn(`[${APP_ID}] ${msg}`, payload);

const info = (msg, payload = '') =>
  console.info(`[${APP_ID}] ${msg}`, payload);

const log = (msg, payload = '') =>
  console.log(`[${APP_ID}] ${msg}`, payload);
/* eslint-enable no-console */

log.warn = warn;
log.error = error;
log.info = info;

export default log;
