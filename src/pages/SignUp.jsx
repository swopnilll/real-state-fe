import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="bg-gradient-to-br from-space-500 to-space-900 flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-galaxy-800/30 backdrop-blur-xl rounded-2xl shadow-custom-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Graphic Design */}
          <div className="md:w-1/2 bg-gradient-to-b from-stellar-400 to-stellar-600 p-8 hidden md:block">
            <div className="flex flex-col justify-center items-center space-y-6">
              <div className="w-48 h-48 bg-white/10 rounded-full backdrop-blur-sm animate-float"></div>
              <h2 className="text-2xl font-bold text-white">Join Us</h2>
              <p className="text-center text-white/80">
                Become part of our innovative community and shape the future of
                technology.
              </p>
            </div>
          </div>

          {/* Right Section - Sign Up Form */}
          <div className="md:w-1/2 p-8 bg-white/5 backdrop-blur-sm">
            <h1 className="text-3xl font-bold text-neon-400 mb-8">Sign Up</h1>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-space-700/50 rounded-lg border border-space-400 focus:ring-2 focus:ring-neon-400 focus:border-transparent placeholder-gray-400 text-black"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-space-700/50 rounded-lg border border-space-400 focus:ring-2 focus:ring-neon-400 focus:border-transparent placeholder-gray-400 text-black"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-space-700/50 rounded-lg border border-space-400 focus:ring-2 focus:ring-neon-400 focus:border-transparent placeholder-gray-400 text-black"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-space-700/50 rounded-lg border border-space-400 focus:ring-2 focus:ring-neon-400 focus:border-transparent placeholder-gray-400 text-black"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-neon-400 focus:ring-neon-400 border-space-400 rounded"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-300"
                >
                  I agree to the{" "}
                  <a href="#" className="text-neon-300 hover:text-neon-400">
                    terms and conditions
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-neon-400 to-cyan-400 rounded-lg font-semibold text-space-900 hover:opacity-90 transition-opacity"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-space-400"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-space-800/50 text-gray-300">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <button className="flex items-center justify-center p-3 bg-space-700/50 hover:bg-space-600 rounded-lg transition-colors">
                  <FcGoogle className="h-5 w-5" />
                </button>
                <button className="flex items-center justify-center p-3 bg-space-700/50 hover:bg-space-600 rounded-lg transition-colors">
                  <FaGithub className="h-5 w-5 text-gray-300" />
                </button>
                <button className="flex items-center justify-center p-3 bg-space-700/50 hover:bg-space-600 rounded-lg transition-colors">
                  <FaApple className="h-5 w-5 text-gray-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
