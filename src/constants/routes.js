const publicRoutes = {
  LOGIN: "/login",
  REGISTER: "/register",
  BUSINESSREGISTER: "/registro-empresarial",
  ARTICLES: "/articles",
  ABOUT: "/about",
  REMEMBERPASSWORD: "/olvide-mi-clave",
  GENERAL: "/registro-general",
  POLITICS: "/politicas-de-uso-privacidad",
  LEYES: "/ley-ecuatoriana",
  FORO: "/foro",
};

const privateRoutes = {
  HOME: "/",
  UPDATESPROFILESTUDENT: "/updateStudent",
  UPDATESPROFILEBUSINESS: "/updateBusiness",
  STUDENTPROFILE: "/studentProfile",
  BUSINESSPROFILE: "/businessProfile",
  ADMINISTRADOR: "/administrador",
  PERFIL: "/perfil-estudiante",
  PERFILB: "/perfil-empresa",
  // PUBLICATION_ID: "/publication/:id",
  // USERS: "/usuarios",
  // USERS_ID: `/usuario/:id`,
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;
