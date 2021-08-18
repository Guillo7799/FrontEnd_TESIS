const publicRoutes = {
  LOGIN: "/login",
  REGISTER: "/registro-estudiante",
  BUSINESSREGISTER: "/registro-empresarial",
  ARTICLES: "/articles",
  REMEMBERPASSWORD: "/olvide-mi-clave",
  GENERAL: "/registro-general",
  POLITICS: "/politicas-de-uso-privacidad",
  LEYES: "/ley-ecuatoriana",
  FORO: "/foro",
  REGISTROE: "/registroE",
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
  PUBLICATIONS: "/publications",
  // PUBLICATION_ID: "/publication/:id",
  // USERS: "/usuarios",
  // USERS_ID: `/usuario/:id`,
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;
