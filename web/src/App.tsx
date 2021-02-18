import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Register from "./pages/register";
import Login from "./pages/login";
import Posts from "./pages/posts";
import CreatePost from "./pages/create-post";
import Navbar from "./components/Navbar";
import { useMeQuery } from "./generated/graphql";

const App = () => {
  const { data } = useMeQuery();

  const routes = data?.me ? (
    <Fragment>
      <Route path="/create-post" component={CreatePost} exact />
    </Fragment>
  ) : (
    <Fragment>
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
    </Fragment>
  );

  return (
    <Fragment>
      <Navbar />
      <Box p="4">
        <Route path="/" component={Posts} exact />
        <Switch>{routes}</Switch>
      </Box>
    </Fragment>
  );
};

export default App;
