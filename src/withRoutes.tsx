import { Routes, Route } from "react-router-dom";

const withRoutes = (routes: { path: string; element: JSX.Element }[]) => {
  return () => (
    <Routes>
      {routes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default withRoutes;
