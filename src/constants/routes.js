const publicRoutes = {
  LOGIN: "/inicio-de-sesion",
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
  GLOBALCOUNT: "/mi-cuenta",
  PUBLICATIONS: "/publications",
  PUBLICATION_ID: "publications/:id",
  CURRICULUMS: "/curriculums",
  CURRICULUM_ID: "/curriculums/:id",
  UPDATECV: "/actualizar-curriculum",
  UPDATEINFO: "/actualizar-info-personal",
  GESTION: "/mis-publicaciones",
  NEWCURRICULUM: "/nuevo-curriculum",
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;
