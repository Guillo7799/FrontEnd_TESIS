const publicRoutes = {
  LOGIN: "/login",
  REGISTER: "/register",
  ARTICLES: "/articles",
  ABOUT: "/about",
  REMEMBERPASSWORD: "/olvide-mi-clave",
  GENERAL: "/registro-general",
  POLITICS: "/politicas-de-uso-privacidad",
  LEYES: "/ley-ecuatoriana",
};

const privateRoutes = {
  HOME: "/",
  // PUBLICATION_ID: "/publication/:id",
  // USERS: "/usuarios",
  // USERS_ID: `/usuario/:id`,
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;
