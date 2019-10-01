import { post } from "./index";

const QueryMedium = Object.freeze({
  WebQueryMedium: 1,
  MobileQueryMedium: 2
});

const QueryType = Object.freeze({
  GetQueryType: 1,
  GetByIDQueryType: 2,
  FillQueryType: 3
});

const getRequestHeader = (kind, tenant, querytype) => {
  const values = {
    kind: kind,
    tenantgroup: "rta1fts",
    tenant: tenant
  };

  //applicable for select operations....(get,byid,fill)
  if (querytype && querytype > 0) {
    values.querytype = querytype.toString();
    values.querymedium = QueryMedium.WebQueryMedium.toString();
  }

  //base64 encoding
  return {
    "Query-Param": btoa(JSON.stringify(values))
  };
};

const getByID = (url, param, kind, tenant) => {
  const headers = getRequestHeader(kind, tenant, QueryType.GetByIDQueryType);
  return post(url, param, headers);
};

const get = (url, param, kind, tenant) => {
  const headers = getRequestHeader(kind, tenant, QueryType.GetQueryType);
  return post(url, param, headers);
};

const fill = (url, param, kind, tenant) => {
  const headers = getRequestHeader(kind, tenant, QueryType.FillQueryType);
  return post(url, param, headers);
};

const create = (url, param, kind, tenant) => {
  const headers = getRequestHeader(kind, tenant);
  return post(url, param, headers);
};

export { getByID, get, fill, create };
