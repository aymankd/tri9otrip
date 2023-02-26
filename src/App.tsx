import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { Login } from "./views";
import createRootStore from "./redux/store/root.store";
import { ROUTES } from "./constants";
import { CreateTrip } from "./views/CreateTrip";
import { AddSteps } from "./views/AddSteps";
import { Landing } from "./views/landing";

const store = createRootStore();

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Landing />,
  },
  {
    path: ROUTES.AUTH,
    element: <Login />,
  },
  {
    path: ROUTES.TRIP,
    children: [
      {
        path: ROUTES.CREATE,
        element: <CreateTrip />,
      },
      {
        path: ROUTES.STEPS,
        element: <AddSteps />,
        index: true,
      },
    ],
  },
]);

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

export default App;
