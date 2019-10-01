import axios from "axios";

const instance = axios.create();
instance.defaults.timeout = 10000;
instance.defaults.baseURL = "http://localhost:8004/";
instance.defaults.headers.post["content-Type"] =
  "application/json;charset=UTF-8";
instance.defaults.headers.common["Authorization"] = "AuthToken";
// instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const setParam = (name, value) => {
  instance.defaults[name] = value;
};

const setHeader = (name, value) => {
  instance.defaults.headers.common[name] = value;
};

const get = (url, params, headers) => {
  return instance.get(url, params, {
    headers: headers
  });
};

const post = (url, params, headers) => {
  // return instance.post(url, params, {
  //   headers: headers
  // });
  return {
    data: {
      user: [
        {
          companyname: "Dubai Technologies",
          departmentname: "Dubai Dept1",
          name: "Ann Fredin",
          password: "test",
          regionname: "Dubai",
          username: "fredin@dt.ae",
          usertypename: "Super Admin"
        }
      ],
      menus: [
        {
          modules: [
            {
              uid: "0x2752",
              title: "Admin Panel",
              iconclassname: "fa-university",
              menu: [
                {
                  uid: "0x275a",
                  title: "Menu",
                  path: "/menu",
                  componentpath: "menu.component",
                  iconclassname: "fa-list"
                },
                {
                  uid: "0x275b",
                  title: "Screen",
                  path: "/screen",
                  componentpath: "screen.component",
                  iconclassname: "fa-tv"
                },
                {
                  uid: "0x279b",
                  title: "TreeGrid",
                  path: "/TreeGrid",
                  componentpath: "treegridview.component",
                  iconclassname: "fa-tv"
                },
                {
                  uid: "0x2790",
                  title: "TestGrid",
                  path: "/TestGrid",
                  componentpath: "gridBinding.component",
                  iconclassname: "fa-tv"
                },
                {
                  uid: "0x2798",
                  title: "chatbot",
                  path: "/chatbot",
                  componentpath: "chatbot",
                  iconclassname: "fa-tv"
                },
                {
                  uid: "0x2797",
                  title: "Maps",
                  path: "/maps",
                  componentpath: "maps.component",
                  iconclassname: "fa-tv"
                }
              ]
            },
            {
              uid: "0x2753",
              title: "Master",
              iconclassname: "fa-universal-access",
              menu: [
                {
                  uid: "0x275c",
                  title: "User",
                  path: "/user",
                  componentpath: "user.component",
                  iconclassname: "fa-user-circle"
                },
                {
                  uid: "0x275d",
                  title: "Vehicle",
                  path: "/vehicle",
                  componentpath: "vehicle.component",
                  iconclassname: "fa-truck"
                }
              ]
            },
            {
              uid: "0x2754",
              title: "Operations",
              iconclassname: "fa-cab",
              menu: [
                {
                  uid: "0x275e",
                  title: "Map",
                  path: "/map",
                  componentpath: "map.component",
                  iconclassname: "fa-map"
                },
                {
                  uid: "0x275f",
                  title: "Vehicle Monitor",
                  path: "/vehiclemonitor",
                  componentpath: "vehiclemonitor.component",
                  iconclassname: "fa-tachometer"
                }
              ]
            },
            { uid: "0x2755", title: "Scheduling", iconclassname: "fa-bus" },
            { uid: "0x2756", title: "Finance", iconclassname: "fa-cc-visa" },
            { uid: "0x2757", title: "Reports", iconclassname: "fa-area-chart" }
          ]
        }
      ]
    }
  };
};

export { get, post, setParam, setHeader };
