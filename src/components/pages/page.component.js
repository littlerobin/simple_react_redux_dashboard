import React, { Suspense } from "react";
import { Redirect, Switch, Route, withRouter } from "react-router-dom";

import HomeComponent from "./home.component";

//dynamic loader...
const DynamicLoader = props => {
  const Page_Path_Prefix = "./";
  const LazyComponent = React.lazy(() =>
    import(`${Page_Path_Prefix + props.component}`)
  );

  return (
    <Route exact path={props.path} render={ps => <LazyComponent {...ps} />} />
  );
};

const PageComponent = ({ menudata, ...ppp }) => {
  const DEFAULT_PAGE = {
    pathname: "/user",
    state: {
      uid: "0x275c",
      title: "User",
      path: "/user",
      componentpath: "user.component",
      iconclassname: "fa-user-circle"
    }
  };

  // const PAGE_NAME =
  //   history.location.state && history.location.state.title
  //     ? history.location.state.title
  //     : history.location.path
  //     ? history.location.path.toString().replace("/", "")
  //     : "";

  // const [pageName, setPageName] = useState(PAGE_NAME);
  // const histryListener = useRef();

  //change page name logic...
  // useEffect(() => {
  //   histryListener.current = history.listen(location => {
  //     if (location.state && location.state.title)
  //       setPageName(location.state.title);
  //   });

  //   //cleaning listener!!!
  //   return () => {
  //     if (histryListener.current) histryListener.current();
  //   };
  // }, [history]);

  return (
    <div className="page-wrapper">
      {menudata.length === 0 ? (
        <HomeComponent />
      ) : (
        // <div className="wrapper1">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {menudata.map(menu => {
              return menu.menu
                ? menu.menu.map(item => {
                    return (
                      <DynamicLoader
                        key={item.title}
                        path={item.path}
                        component={item.componentpath}
                      />
                    );
                  })
                : "";
            })}

            <Redirect to={DEFAULT_PAGE} />
          </Switch>
        </Suspense>
        // </div>
      )}
    </div>
  );
};

export default withRouter(PageComponent);
