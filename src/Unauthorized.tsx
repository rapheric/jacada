// src/Unauthorized.tsx
import React from "react";

export const Unauthorized: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Unauthorized</h1>
      <p>You do not have permission to view this page.</p>
    </div>
  );
};
