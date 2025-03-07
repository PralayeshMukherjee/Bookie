import { useState } from "react";

export default function EditSection() {
  const [name, setName] = useState("Jack");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("you@email.com");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div className="h-screen w-full p-6 flex flex-col bg-white dark:bg-gray-900">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-auto">
        {/* Personal Info Section */}
        <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Personal Info
          </h3>
          <div className="mb-2">
            <label className="block text-gray-700 dark:text-gray-400">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 dark:text-gray-400">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              We'll never share your details
            </p>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 dark:text-gray-400">
              Age
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 dark:text-gray-400">
              Phone Number
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 dark:text-gray-400">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-400">
              Bio
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="A bit about yourself and your role"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition">
            Save personal info
          </button>
        </div>

        {/* Change Password Section */}
        <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-gray-800 h-80">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Change password
          </h3>
          <div className="mb-2">
            <label className="block text-gray-700 dark:text-gray-400">
              Old password
            </label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-400">
              New password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Minimum 6 characters
            </p>
          </div>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition">
            Change
          </button>
        </div>
      </div>

      {/* Delete Account */}
      <div className="mt-6 text-right">
        <button className="text-red-600 dark:text-red-400 hover:underline">
          Delete account
        </button>
      </div>
    </div>
  );
}
