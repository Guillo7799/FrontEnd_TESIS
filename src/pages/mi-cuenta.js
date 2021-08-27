import React from "react";
import { useAuth } from "@/lib/auth";
import withAuth from "@/hocs/withAuth";
import StudentCount from "@/components/StudentCount";
import BusinessCount from "@/components/BusinessCount";
import AdminCount from "@/components/AdminCount";

const Count = () => {
  const { user } = useAuth();
  return (
    <>
      <div>
        {(() => {
          switch (user.role) {
            case "ROLE_STUDENT":
              return <StudentCount />;
            case "ROLE_BUSINESS":
              return <BusinessCount />;
            case "ROLE_SUPERADMIN":
              return <AdminCount />;
          }
        })()}
      </div>
    </>
  );
};

export default withAuth(Count);
