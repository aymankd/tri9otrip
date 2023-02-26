import { NavLink } from "react-router-dom";
import login_page_illustration from "../assets/images/login-page-illustration.png";
import logo from "../assets/images/logo.png";
import { Input } from "../components/base/Input";
import { Button } from "../components/base/Button";
import { ROUTES } from "../constants/routes";

export function Login() {
  return (
    <div className="grid h-screen grid-cols-11 xl:grid-cols-12">
      <div className="hidden h-full items-center bg-gradient-to-b from-brand-100 to-brand-200 lg:col-span-5 lg:flex xl:col-span-5 ">
        <div className="flex w-full flex-col gap-2 px-10 lg:px-12 xl:px-16 ">
          <h2 className="font-poppinsBold text-xl text-white lg:text-2xl xl:text-3xl">
            Share your journey
          </h2>
          <h4 className="pb-8 text-lg text-white lg:text-xl xl:text-2xl">
            Discover new destinations, get inspired by others' trips, and share
            your own experiences.
          </h4>
          <img
            src={login_page_illustration}
            className="hidden h-full object-cover md:col-span-3 lg:col-span-4 lg:block"
            alt="person-with-phone"
          />
        </div>
      </div>
      <div className="col-span-full flex flex-col items-center lg:col-span-6 xl:col-span-7">
        <div className="mt-24 mb-12">
          <img src={logo} className="h-24 w-auto" alt="person-with-phone" />
        </div>
        <div className="flex w-full flex-col items-center gap-2 px-6">
          <h4 className="w-full text-left font-poppinsBold text-2xl lg:text-xl">
            Login
          </h4>
          <h2 className="w-full text-left font-poppins text-xs">
            Login to share and enjoy beautiful, amazing trips
          </h2>
          <div className="w-full py-4">
            <Input className="w-full" placeholder="Email" id="email" />
            <Input
              className="my-2 w-full"
              placeholder="Password"
              type="password"
              id="password"
            />
            <h2 className="mt-4 w-full text-right font-poppinsMedium text-sm text-brand-100">
              Forgot password ?
            </h2>
          </div>
          <div className="flex w-full items-center justify-center">
            <NavLink to={ROUTES.CREATE} className="h-14 w-10/12">
              <Button className="h-full w-full bg-brand-300 text-white hover:bg-brand-200 hover:shadow-inner">
                Login
              </Button>
            </NavLink>
          </div>
        </div>
        <div className="flex w-full"></div>
      </div>
    </div>
  );
}
