import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

export function Home() {
  return <NavLink to={ROUTES.CREATE}>Create Trip</NavLink>;
}
