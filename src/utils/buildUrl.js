const buildUrl = (par, url) => {
  Object.keys(par).map((param) => {
    url = url.replace(`:${param}`, par[param]);
  });
  return url;
};

export default buildUrl;
