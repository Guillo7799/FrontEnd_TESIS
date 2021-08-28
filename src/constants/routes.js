const publicRoutes = {
  LOGIN: "/login",
  REGISTER: "/registro-estudiante",
  BUSINESSREGISTER: "/registro-empresarial",
  REMEMBERPASSWORD: "/olvide-mi-clave",
  GENERAL: "/registro-general",
  POLITICS: "/politicas-de-uso-privacidad",
  LEYES: "/ley-ecuatoriana",
  FORO: "/foro",
  ABOUT: "/acerca-de",
};

const privateRoutes = {
  HOME: "/",
  GLOBALPROFILE: "/perfil",
  GLOBALCOUNT: "/mi-cuenta",
  PUBLICATIONS: "/publications",
  PUBLICATION_ID: "publications/:id",
  CURRICULUMS: "/curriculums",
  CURRICULUM_ID: "/curriculums/:id",
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;
