export default function RegistrationForm() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-400">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-center text-cyan-600 mb-4">
          • Registration Form •
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Country"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <p className="text-xs text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <button className="w-full bg-cyan-500 text-white py-2 rounded-md hover:bg-cyan-600 transition">
            CREATE ACCOUNT
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-cyan-500 hover:underline">
            Sign in
          </a>
        </p>
        <p className="text-center text-xs text-gray-500 mt-2">
          designed by <span className="font-semibold">freepik</span>
        </p>
      </div>
    </div>
  );
}
