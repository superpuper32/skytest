import React from 'react';
import { Switch, Redirect, Route } from "react-router-dom";

import Layout from "./layout";
import MainPage from "./routes/main-page";
import HistoryPage from "./routes/history-page";

function App() {
  return (
    <Layout>
      <Switch>
        <Redirect exact from="/" to="/main" />
        <Route path="/main" component={MainPage} />
        <Route path="/history" component={HistoryPage} />
      </Switch>
    </Layout>
  );
}

export default App;
