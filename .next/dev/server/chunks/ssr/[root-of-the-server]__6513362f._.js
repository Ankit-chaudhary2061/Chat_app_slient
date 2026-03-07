module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/chat-system/src/lib/types/global-type.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Status",
    ()=>Status
]);
var Status = /*#__PURE__*/ function(Status) {
    Status["IDLE"] = "idle";
    Status["LOADING"] = "loading";
    Status["SUCCESS"] = "success";
    Status["ERROR"] = "error";
    return Status;
}({});
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/chat-system/src/lib/http/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "http://localhost:6767/api",
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});
const __TURBOPACK__default__export__ = api;
}),
"[project]/chat-system/src/lib/store/auth/auths-slice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearUser",
    ()=>clearUser,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchCurrentUser",
    ()=>fetchCurrentUser,
    "forgotPassword",
    ()=>forgotPassword,
    "loginUser",
    ()=>loginUser,
    "logoutUser",
    ()=>logoutUser,
    "onBoardUser",
    ()=>onBoardUser,
    "otpVerification",
    ()=>otpVerification,
    "registerUser",
    ()=>registerUser,
    "resendOtp",
    ()=>resendOtp,
    "resetPassword",
    ()=>resetPassword,
    "setCurrentUser",
    ()=>setCurrentUser,
    "setStatus",
    ()=>setStatus,
    "setToken",
    ()=>setToken,
    "setUser",
    ()=>setUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/chat-system/src/lib/types/global-type.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/chat-system/src/lib/http/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
const initialState = {
    user: null,
    status: __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].IDLE
};
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'auth',
    initialState,
    reducers: {
        setUser (state, action) {
            state.user = action.payload;
        },
        setStatus (state, action) {
            state.status = action.payload;
        },
        setToken (state, action) {
            if (state.user) {
                state.user.token = action.payload;
            }
        },
        setCurrentUser (state, action) {
            state.user = action.payload;
        },
        clearUser (state) {
            state.user = null;
            state.status = __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].IDLE;
        }
    }
});
const __TURBOPACK__default__export__ = authSlice.reducer;
const { setUser, setStatus, setToken, setCurrentUser, clearUser } = authSlice.actions;
function registerUser(data) {
    return async function registerUserThunk(dispatch) {
        try {
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].LOADING));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/register", data);
            if (response.status >= 200 && response.status < 300) {
                dispatch(setUser(response.data.data));
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].SUCCESS));
            } else {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].ERROR));
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.response?.data?.message || error.message);
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].ERROR));
        }
    };
}
function otpVerification(data) {
    return async function otpVerificationThunk(dispatch) {
        try {
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].LOADING));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/otp-verification", data);
            if (response.status >= 200 && response.status < 300) {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].SUCCESS));
            } else {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].ERROR));
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.response?.data?.message || error.message);
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].ERROR));
        }
    };
}
function resendOtp(data) {
    return async function resendOtpThunk(dispatch) {
        try {
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].LOADING));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/resend-otp", data);
            if (response.status >= 200 && response.status < 300) {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].SUCCESS));
            } else {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].ERROR));
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.response?.data?.message || error.message);
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].ERROR));
        }
    };
}
function forgotPassword(data) {
    return async function forgotPasswordThunk(dispatch) {
        try {
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].LOADING));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/forgot-password", data);
            if (response.status >= 200 && response.status < 300) {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].SUCCESS));
            } else {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].ERROR));
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.response?.data?.message || error.message);
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].ERROR));
        }
    };
}
function resetPassword(data) {
    return async function resetPasswordThunk(dispatch) {
        try {
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].LOADING));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/reset-password", data);
            if (response.status >= 200 && response.status < 300) {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].SUCCESS));
            } else {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].ERROR));
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.response?.data?.message || error.message);
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].ERROR));
        }
    };
}
function loginUser(data) {
    return async function loginUserThunk(dispatch) {
        try {
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].LOADING));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/login", data);
            if (response.status >= 200 && response.status < 300) {
                dispatch(setUser(response.data.data));
                dispatch(setToken(response.data.token));
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].SUCCESS));
            } else {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].ERROR));
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.response?.data?.message || error.message);
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].ERROR));
        }
    };
}
function logoutUser() {
    return async function logoutUserThunk(dispatch) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/logout');
            if (response.status >= 200 && response.status < 300) {
                dispatch(clearUser()); // ✅ clearUser instead of setUser({} as User)
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.response?.data?.message || error.message);
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].ERROR));
        }
    };
}
function onBoardUser(data) {
    return async function onBoardUserThunk(dispatch) {
        try {
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].LOADING));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/onboarded", data);
            if (response.status >= 200 && response.status < 300) {
                dispatch(setUser(response.data.data));
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].SUCCESS));
            } else {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].ERROR));
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.response?.data?.message || error.message);
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].ERROR));
        }
    };
}
function fetchCurrentUser(userId) {
    return async function fetchCurrentUserThunk(dispatch) {
        try {
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].LOADING));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/users/${userId}`);
            if (response.status >= 200 && response.status < 300) {
                dispatch(setCurrentUser(response.data.data));
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].SUCCESS));
            } else {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].ERROR));
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.response?.data?.message || error.message);
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Status"].ERROR));
        }
    };
}
}),
"[project]/chat-system/src/lib/store/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$store$2f$auth$2f$auths$2d$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/chat-system/src/lib/store/auth/auths-slice.ts [app-ssr] (ecmascript)");
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        auth: __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$store$2f$auth$2f$auths$2d$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }
});
const __TURBOPACK__default__export__ = store;
}),
"[project]/chat-system/src/lib/provider/provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReduxProvider",
    ()=>ReduxProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/chat-system/src/lib/store/store.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function ReduxProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$chat$2d$system$2f$src$2f$lib$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        children: children
    }, void 0, false, {
        fileName: "[project]/chat-system/src/lib/provider/provider.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6513362f._.js.map