import React from "react";
import { useAuth } from "@/lib/auth";
import withAuth from "@/hocs/withAuth";
import Formulario from "@/components/NewCVitae";
import Access from "@/components/Access";

const NewCurriculumStudent = () => {
  const { user } = useAuth();
  return (
    <>
      <div>
        {(() => {
          switch (user.role) {
            case "ROLE_STUDENT":
              return <Formulario />;
            case "ROLE_BUSINESS":
              return <Access />;
            case "ROLE_SUPERADMIN":
              return <Access />;
          }
        })()}
      </div>
    </>
  );
};

export default withAuth(NewCurriculumStudent);
