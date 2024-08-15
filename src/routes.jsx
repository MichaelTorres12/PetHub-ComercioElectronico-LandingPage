import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "Inicio",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Categorias",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Productos",
    path: "/sign-in",
    element: <SignIn />,
  },
];

export default routes;
