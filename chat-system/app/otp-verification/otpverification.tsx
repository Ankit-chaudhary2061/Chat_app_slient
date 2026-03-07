'use client'


import { otpVerification, resendOtp } from "@/src/lib/store/auth/auths-slice"
import { useAppDispatch, useAppSelector } from "@/src/lib/store/hook"
import { MessageCircleIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation";
import { Status } from "@/src/lib/types/global-type"


const OtpVerification = () => {
 const router = useRouter();
  const dispatch = useAppDispatch()
  const { status, user } = useAppSelector((store) => store.auth)

  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [timer, setTimer] = useState(60)

  const inputs = useRef<(HTMLInputElement | null)[]>([])

  /* -------------------------
     Autofill Email From Store
  -------------------------- */
console.log('user ', user?.email)
 useEffect(() => {
  if (user?.email) {
    setEmail(user.email)
  }
}, [user])
  /* -------------------------
     Resend Timer
  -------------------------- */

 useEffect(() => {
  if (timer === 0) return

  const interval = setInterval(() => {
    setTimer((prev) => prev - 1)
  }, 1000)

  return () => clearInterval(interval)
}, [timer])

  /* -------------------------
     OTP Input Logic
  -------------------------- */

  const handleChange = (value: string, index: number) => {

    if (!/^[0-9]?$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 5) {
      inputs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {

    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  /* -------------------------
     Paste Full OTP
  -------------------------- */

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {

    const pastedData = e.clipboardData.getData("text").slice(0, 6)

    if (!/^\d+$/.test(pastedData)) return

    const otpArray = pastedData.split("")
    const newOtp = [...otp]

    otpArray.forEach((num, i) => {
      newOtp[i] = num
    })

    setOtp(newOtp)

    inputs.current[5]?.focus()
  }

  /* -------------------------
     Submit OTP
  -------------------------- */

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  const otpCode = otp.join("")

  console.log("Submitting OTP:", otpCode)
  console.log("Email:", email)

  dispatch(
    otpVerification({
      email,
      otp: otpCode
    })
  )
}
  useEffect(() => {
    if (status === Status.SUCCESS) {
      toast.success("Register successful!");
      router.push(`/login`);
    }
  }, [status, router]);

  /* -------------------------
     Resend OTP
  -------------------------- */

  const handleResendOtp = () => {

    dispatch(resendOtp({ email }))

    setTimer(60)
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-900 p-4">

      <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-lg p-8">

        {/* Header */}

        <div className="text-center mb-6">
          <MessageCircleIcon className="w-12 h-12 mx-auto text-indigo-400 mb-4" />

          <h2 className="text-2xl font-bold text-slate-100">
            OTP Verification
          </h2>

          <p className="text-slate-400 text-sm mt-2">
            Enter the 6 digit code sent to
          </p>

          <p className="text-indigo-400 font-medium mt-1">
            {email}
          </p>

        </div>

        {/* Form */}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* OTP BOXES */}

          <div className="flex justify-between gap-2">

            {otp.map((digit, index) => (

              <input
                key={index}
                ref={(el) => { inputs.current[index] = el }}

                type="text"
                maxLength={1}

                value={digit}

                onChange={(e) =>
                  handleChange(e.target.value, index)
                }

                onKeyDown={(e) =>
                  handleKeyDown(e, index)
                }

                onPaste={handlePaste}

                className="w-12 h-12 text-center text-xl rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

            ))}

          </div>

          {/* Verify Button */}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium"
          >

            {status === "loading"
              ? "Verifying..."
              : "Verify OTP"}

          </button>

        </form>

        {/* Resend Section */}

        <div className="text-center mt-6">

          {timer > 0 ? (

            <p className="text-slate-400 text-sm">
              Resend OTP in {timer}s
            </p>

          ) : (

            <button
              onClick={handleResendOtp}
              className="text-indigo-400 hover:underline text-sm"
            >
              Resend OTP
            </button>

          )}

        </div>

      </div>

    </div>
  )
}

export default OtpVerification