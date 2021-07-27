// This should be your API's base domain
let domain = process.env.REACT_APP_API_DOMAIN;

// This will be lists of your API
const apiEndpoints = {
  apiCategory: {
    getEndpointList: domain + "apiendpointsexample",
  },
};

export default apiEndpoints;
