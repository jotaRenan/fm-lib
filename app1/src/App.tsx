import * as React from "react";

const RemoteButton = React.lazy(() => import("app2/Button"));

const App = () => {
   return (
  <div>
    <h1>Typescript</h1>
    <h2>App 1</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton label="Testando" />
    </React.Suspense>
  </div>);
};

export default App;
