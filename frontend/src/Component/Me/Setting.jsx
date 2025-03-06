import React from "react";

function Setting() {
  return (
    <div className="h-screen w-full p-6 flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div className="border-b mb-4">
        <nav className="flex space-x-6 text-gray-500">
          <span>Permissions</span>
          <span>Integrations</span>
          <span>Notifications</span>
          <span>KPI Goals</span>
          <span>Programmatic</span>
          <span className="text-black font-semibold border-b-2 border-purple-500">
            Edit Profile
          </span>
        </nav>
      </div>
    </div>
  );
}

export default Setting;
