import React from "react";
import { useAuth } from "@/lib/auth";
import withAuth from "@/hocs/withAuth";
import StudentProfile from "@/components/StudentProfile";
import BusinessProfile from "@/components/BusinessProfile";
import AdministratorProfile from "@/components/AdministratorProfile";

const Profile = () => {
  const { user } = useAuth();
  return (
    <>
      <div>
        {(() => {
          switch (user.role) {
            case "ROLE_STUDENT":
              return <StudentProfile />;
            case "ROLE_BUSINESS":
              return <BusinessProfile />;
            case "ROLE_SUPERADMIN":
              return <AdministratorProfile />;
          }
        })()}
      </div>
    </>
  );
};

export default withAuth(Profile);
