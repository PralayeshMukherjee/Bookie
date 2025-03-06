import { useState } from "react";

export default function ProfileSettings() {
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
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-auto">
        <div className="border p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Personal Info</h3>
          <div className="mb-2">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full p-2 border rounded-md bg-gray-200"
            />
            <p className="text-xs text-gray-500">
              We'll never share your details
            </p>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Bio</label>
            <textarea
              className="w-full p-2 border rounded-md"
              placeholder="A bit about yourself and your role"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
            Save personal info
          </button>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Change password</h3>
          <div className="mb-2">
            <label className="block text-gray-700">Old password</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">New password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <p className="text-xs text-gray-500">Minimum 6 characters</p>
          </div>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
            Change
          </button>
        </div>
      </div>
      <div className="mt-6 text-right">
        <button className="text-red-600">Delete account</button>
      </div>
    </div>
  );
}
