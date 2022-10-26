import 'whatwg-fetch';

const JIMDO_GEO_LOCATION_API_URI = 'https://a.jimdo.com/app/price/index/country';

export const fetchRequest = url => fetch(url).then(response => response.json());
export const getCountryIsoCode = () => fetchRequest(JIMDO_GEO_LOCATION_API_URI);
