import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactSeller = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-violet-200 to-violet-400 text-black p-6 md:p-16">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-12 bg-white shadow-lg rounded-lg">
        <h1 className="text-5xl font-extrabold text-violet-700 mb-6">
          Contact Us
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Feel free to contact us any time. We will get back to you as soon as
          we can!
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <textarea
            placeholder="Message"
            className="w-full p-4 border border-violet-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-violet-500"
          ></textarea>
          <button className="w-full p-4 bg-violet-700 text-white font-semibold rounded-lg hover:bg-violet-900 transition duration-300 shadow-md">
            SEND
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 bg-black text-white p-6 md:p-12 rounded-lg shadow-lg relative flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">Info</h2>
        <div className="space-y-6 text-lg">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-yellow-400" />{" "}
            <span>info@getintouch.we</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-yellow-400" /> <span>+24 56 89 146</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-yellow-400" />{" "}
            <span>14 Greenroad St.</span>
          </div>
          <div className="flex items-center gap-4">
            <FaClock className="text-yellow-400" /> <span>09:00 - 18:00</span>
          </div>
        </div>
        <div className="absolute top-0 left-0 bg-yellow-400 w-6 h-6 rounded-full"></div>
        <div className="absolute bottom-0 right-0 bg-yellow-400 w-12 h-12 rounded-full"></div>
      </div>
    </div>
  );
};

export default ContactSeller;
