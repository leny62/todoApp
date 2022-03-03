import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env';

const development = {
  DEV_BACKEND_URL,
};

const production = {
  PROD_BACKEND_URL,
};

export default __DEV__
  ? development.DEV_BACKEND_URL
  : production.PROD_BACKEND_URL;
