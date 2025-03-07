import React from "react";

function SettingSection() {
  return (
    <div className="h-20 w-full p-6 flex flex-col bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Settings
      </h2>
      <div className="border-b border-gray-300 dark:border-gray-700 mb-4">
        <nav className="flex space-x-6 text-gray-500 dark:text-gray-400">
          <span className="hover:text-gray-900 dark:hover:text-gray-200">
            Permissions
          </span>
          <span className="hover:text-gray-900 dark:hover:text-gray-200">
            Integrations
          </span>
          <span className="hover:text-gray-900 dark:hover:text-gray-200">
            Notifications
          </span>
          <span className="hover:text-gray-900 dark:hover:text-gray-200">
            KPI Goals
          </span>
          <span className="hover:text-gray-900 dark:hover:text-gray-200">
            Programmatic
          </span>
          <span className="hover:text-gray-900 dark:hover:text-gray-200">
            Edit Profile
          </span>
        </nav>
      </div>
    </div>
  );
}

export default SettingSection;
