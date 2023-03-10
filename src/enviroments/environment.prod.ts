const HOST = 'http://mejoratec-backend.test'

export const environment = {
  production: true,
  HOST,
  STORAGE_URL: `${HOST}/storage`,
  URL_PRIVATE: HOST,
  API_URL_PRIVATE: `${HOST}/api/v1/private`,
  API_URL_PUBLIC: `${HOST}/api/v1/public`,
  VERSION: '1.0.1',
};
