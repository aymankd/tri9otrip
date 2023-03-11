import { NavLink } from "react-router-dom";
import { Button } from "../../components/base/Button";
import { ROUTES } from "../../constants";

export function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <NavLink to={ROUTES.CREATE}>
        <Button className="h-full w-full bg-brand-300 text-white hover:bg-brand-200 hover:shadow-inner">
          Create Trip
        </Button>
      </NavLink>
    </div>
  );
}
