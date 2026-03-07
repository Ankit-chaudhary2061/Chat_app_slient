"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { RegisterData } from "./register-types";
import { useAppDispatch, useAppSelector } from "..//../src/lib/store/hook";
import { registerUser } from "..//../src/lib/store/auth/auths-slice";
import { Status } from "..//../src/lib/types/global-type";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import BorderAnimation from "..//../src/lib/components/bodyanimators";
import {  MessageCircleIcon } from "lucide-react";
import Link from "next/link";


const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { status } = useAppSelector((store) => store.auth);

  const [data, setData] = useState<RegisterData>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Submitting:", data);  // 🔥 must appear in browser console
  dispatch(registerUser(data));
};

  useEffect(() => {
    if (status === Status.SUCCESS) {
      toast.success("Register successful!");
      router.push(`/otp-verification?email=${data.email}`);
    }
  }, [status, router, data.email]);

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
                    Create an Account
                  </h2>
                  <p className="text-slate-400">
                    Join our community today!
                  </p>
                </div>

                {/* Form */}
                <form  onSubmit={handleSubmit}  className="space-y-6">

                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={data.username}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

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
                    {status === Status.LOADING ? "Registering..." : "Register"}
                  </button>

                </form>
               {/* Link to Login */}
                <p className="text-center text-sm text-slate-300 mt-6">
                  Already have an account?{" "}
                  <Link href="/login" className="text-blue-400 hover:underline font-medium">
                    Log in here
                  </Link>
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="md:w-1/2 hidden md:flex items-center justify-center p-8">
              <div className="text-center text-slate-300">
                <h3 className="text-3xl font-bold mb-4">
                  Welcome to friends book (text- chat cat)
                </h3>
                <p className="text-slate-400">
                  lets chat motherfucker yeta chai image rakhney ho
                </p>
              </div>
            </div>

          </div>
        </BorderAnimation>

      </div>
    </div>
  );
};

export default RegisterPage;