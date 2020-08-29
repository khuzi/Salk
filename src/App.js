import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { MuiThemeProvider, StylesProvider } from "@material-ui/core";
import { theme } from "./Theme";

const Layout = lazy(() => import("./Hoc/Layout/Layout"));
const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Route
          path="/"
          render={() => (
            <Suspense fallback={<div>Loading...!</div>}>
              <Layout>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <Suspense fallback={<div>Loading...!</div>}>
                        <Home />
                      </Suspense>
                    )}
                  />
                  <Route
                    exact
                    path="/about"
                    render={() => (
                      <Suspense fallback={<div>Loading...!</div>}>
                        <About />
                      </Suspense>
                    )}
                  />
                  <Route
                    exact
                    path="/contact"
                    render={() => (
                      <Suspense fallback={<div>Loading...!</div>}>
                        <Contact />
                      </Suspense>
                    )}
                  />
                </Switch>
              </Layout>
            </Suspense>
          )}
        />
      </StylesProvider>
    </MuiThemeProvider>
  );
}

export default App;
