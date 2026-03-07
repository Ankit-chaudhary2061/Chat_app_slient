"use client";


import { useState, useEffect } from "react";
import { LoginUserData } from "./login";

import { MessageCircleIcon } from "lucide-react";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/src/lib/store/hook";
import { loginUser } from "@/src/lib/store/auth/auths-slice";
import { Status } from "@/src/lib/types/global-type";
import BorderAnimation from "@/src/lib/components/bodyanimators";
import Link from "next/link";

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { status, user } = useAppSelector((store) => store.auth);

  const [data, setData] = useState<LoginUserData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser(data));
  };

  // Handle login success
  useEffect(() => {
    if (status === Status.SUCCESS && user?.email) {
      toast.success("Login successful!");
      router.push("/dashboard"); // Navigate to dashboard or home after login
    } else if (status === Status.ERROR) {
      toast.error("Login failed. Check your credentials.");
    }
  }, [status, router, user]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 bg-slate-900">
      <div className="relative w-full max-w-5xl">
        <BorderAnimation>
          <div className="flex flex-col md:flex-row w-full">

            {/* LEFT SIDE - FORM */}
            <div className="md:w-1/2 p-8 flex items-center justify-center md:border-r border-slate-700">
              <div className="w-full max-w-md">
                {/* Heading */}
                <div className="text-center mb-8">
                  <MessageCircleIcon className="w-12 h-12 mx-auto text-slate-400 mb-4" />
                  <h2 className="text-2xl font-bold text-slate-200">
                    Login to Your Account
                  </h2>
                  <p className="text-slate-400">
                    Enter your credentials to continue
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <button
                    type="submit"
                    disabled={status === Status.LOADING}
                    className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
                  >
                    {status === Status.LOADING ? "Logging in..." : "Login"}
                  </button>
                </form>
                {/* Forgot Password Link */}
<div className="text-right mt-2">
  <Link
    href="/forgot-password"
    className="text-blue-400 hover:text-blue-500 hover:underline text-sm font-medium transition-colors"
  >
    Forgot password?
  </Link>
</div>
              </div>
            </div>

            {/* RIGHT SIDE - INFO/IMAGE */}
            <div className="md:w-1/2 hidden md:flex items-center justify-center p-8">
              <div className="text-center text-slate-300">
                <h3 className="text-3xl font-bold mb-4">
                  Welcome Back!
                </h3>
                <p className="text-slate-400">
                  Connect with your friends and start chatting instantly.
                </p>
              </div>
            </div>

          </div>
        </BorderAnimation>
      </div>
    </div>
  );
};

export default LoginPage;