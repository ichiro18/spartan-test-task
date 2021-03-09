export const DEBUG = process.env.NODE_ENV !== 'production' || process.env.VUE_APP_DEBUG || false;

export const BASE_URL = process.env.VUE_APP_BASE_URL || '/';

export const API_URL = process.env.VUE_APP_API_URL || '/';

export default {
  DEBUG,
  BASE_URL,
  API_URL
}
