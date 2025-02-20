import React from "react";

function EditSectionSeller() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold">Edit Profile</h2>
      <div
        //   key={field}
        className="flex flex-col md:flex-row md:items-center gap-4"
      >
        <label className="w-32 text-sm font-medium capitalize">{field}</label>
        {field === "bio" ? (
          <textarea
            //   name={field}
            //   value={profile[field]}
            //   onChange={handleChange}
            className="flex-1 p-3 rounded-lg border dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500"
          />
        ) : (
          <input
            //   type={field === "email" ? "email" : "text"}
            //   name={field}
            //   value={profile[field]}
            //   onChange={handleChange}
            className="flex-1 p-3 rounded-lg border dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500"
          />
        )}
      </div>
      <button className="mt-4 bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg">
        Save Changes
      </button>
    </div>
  );
}

export default EditSectionSeller;
