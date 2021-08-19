const publicRoutes = {
  LOGIN: "/login",
  REGISTER: "/registro-estudiante",
  BUSINESSREGISTER: "/registro-empresarial",
  REMEMBERPASSWORD: "/olvide-mi-clave",
  GENERAL: "/registro-general",
  POLITICS: "/politicas-de-uso-privacidad",
  LEYES: "/ley-ecuatoriana",
  FORO: "/foro",
};

const privateRoutes = {
  HOME: "/",
  GLOBALPROFILE: "/perfil",
  PUBLICATIONS: "/publications",
  //ARTICLES: "/articles",
  // PUBLICATION_ID: "/publication/:id",
  // USERS: "/usuarios",
  // USERS_ID: `/usuario/:id`,
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;
