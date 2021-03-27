import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import CreatePage from "./pages/CreatePage/index";
import DetailPage from "./pages/DetailPage/index";
import ProfilePage from "./pages/ProfilePage/index";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import Button from "./Layout/Button";

export const useRoutes = (isAuthentficated) => {
  if (isAuthentficated) {
    return (
      <Switch>
        <Route path="/" exact>
          <AuthPage />
        </Route>
        <Route exact path={["/profile", "/detail"]}>
          <Layout>
            <Route path="/profile" exact>
              <Button />
              <ProfilePage />
            </Route>
            <Route path="/detail" exact>
              <DetailPage />
            </Route>
          </Layout>
        </Route>
        <Redirect to="/detail"></Redirect>
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Route path="/detail" exact>
        <ProfilePage />
      </Route>
      <Route path="/create">
        <CreatePage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
};
