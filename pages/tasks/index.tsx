import React from "react";
import { NavHeader } from "@/packages/components/NavHeader/NavHeader";
import { NavPages } from "@/packages/config/NavPages";
import { useRedirectOnSessionExpired } from "@/packages/login/useRedirectOnSessionExpired";

const Tasks: React.FC = () => {
  useRedirectOnSessionExpired("/");

  return (
    <main>
      <NavHeader navItems={NavPages} />
    </main>
  );
};

export default Tasks;
