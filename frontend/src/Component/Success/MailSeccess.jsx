import React from "react";
import { Link } from "react-router-dom";

function MailSuccess() {
  return (
    <div class="flex items-center justify-center bg-violet-100">
      <div class="container mx-auto p-6 bg-violet-100 shadow-lg rounded-lg max-w-md text-center">
        <h1 class="text-green-500 text-2xl font-semibold">
          Mail Successfully Sent!
        </h1>
        <p class="text-gray-700 text-base break-words">
          Your valuable message has been sent to our server. Thank you for your
          time.
        </p>
        <Link
          to="/home"
          class="mt-6 inline-block text-white bg-green-500 py-2 px-6 rounded-lg hover:bg-green-600 transition-colors"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
}

export default MailSuccess;
