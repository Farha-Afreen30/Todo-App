import { ReactElement } from "react";

type ProtectedRouteProps = {
  element: ReactElement;
};

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  return element; 
};

export default ProtectedRoute;
