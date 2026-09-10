import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { NotFound } from "../../components/NotFound";
import { Footer } from "../../components/Footer";

const App = () => {
  const location = useLocation();
  const pathMapping = getPathMapping();
  const currentPath =
    location.pathname
      .split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`)
      .pop() || "/";

  // Set Page Title
  const currentPage = currentPath in pathMapping ? pathMapping[currentPath] : undefined;
  const navigationTitle = currentPage ? currentPage.navigationTitle : "Not Found";

  useEffect(() => {
    document.title = `${navigationTitle || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [navigationTitle]);

  useEffect(() => {
    document.documentElement.classList.add("scrollbar");
    document.body.classList.add("scrollbar");

    return () => {
      document.documentElement.classList.remove("scrollbar");
      document.body.classList.remove("scrollbar");
    };
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <Navbar />

      {/* Header and PageContent */}
      <main className="content">
        <Routes>
          {Object.entries(pathMapping).map(
            ([path, { title, lead, component: Component }]) => (
              <Route
                key={path}
                path={path}
                element={
                  <>
                    {path !== "/" && (
                      <Header title={title || ""} lead={lead || ""} />
                    )}
                    <div className={path === "/" ? "home-container" : "container"}>
                      <Component />
                    </div>
                  </>
                }
              />
            ),
          )}
          <Route
            path="*"
            element={
              <>
                <Header
                  title="Not Found"
                  lead="The requested URL was not found on this server."
                />
                <NotFound />
              </>
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      {/* MUST mention license AND have a link to team wiki's repository on gitlab.igem.org */}
      <Footer />
    </div>
  );
};

export default App;
