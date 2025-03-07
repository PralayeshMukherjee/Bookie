import React from "react";

function SettingSection() {
  return (
    <div className="h-20 w-full p-6 flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div className="border-b mb-4">
        <nav className="flex space-x-6 text-gray-500">
          <span>Permissions</span>
          <span>Integrations</span>
          <span>Notifications</span>
          <span>KPI Goals</span>
          <span>Programmatic</span>
          <span>Edit Profile</span>
        </nav>
      </div>
    </div>
  );
}

export default SettingSection;
