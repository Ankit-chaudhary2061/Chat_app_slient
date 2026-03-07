(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/store/hook.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppDispatch",
    ()=>useAppDispatch,
    "useAppSelector",
    ()=>useAppSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
const useAppDispatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"].withTypes();
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"].withTypes();
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/types/global-type.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Status",
    ()=>Status
]);
var Status = /*#__PURE__*/ function(Status) {
    Status["SUCCESS"] = "success";
    Status["LOADING"] = "loading";
    Status["ERROR"] = "error";
    return Status;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/http/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "http://localhost:6767/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/store/auth/auths-slice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
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
    "setStatus",
    ()=>setStatus,
    "setToken",
    ()=>setToken,
    "setUser",
    ()=>setUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types/global-type.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/http/api.ts [app-client] (ecmascript)");
;
;
;
const initialState = {
    user: {},
    status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].LOADING
};
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
        }
    }
});
const __TURBOPACK__default__export__ = authSlice.reducer;
const { setUser, setStatus, setToken } = authSlice.actions;
function registerUser(data) {
    return async function registerUserThunk(dispatch) {
        try {
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].LOADING));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/register", data);
            if (response.status >= 200 && response.status < 300) {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].SUCCESS));
                dispatch(setUser(response.data.data));
            } else {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].ERROR));
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].ERROR));
        }
    };
}
function otpVerification(data) {
    return async function otpVerificationThunk(dispatch) {
        try {
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].LOADING));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/otp-verification", data);
            if (response.status >= 200 && response.status < 300) {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].SUCCESS));
            } else {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].ERROR));
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].ERROR));
        }
    };
}
function forgotPassword(data) {
    return async function forgotPasswordThunk(dispatch) {
        try {
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].LOADING));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/forgot-password", data);
            if (response.status >= 200 && response.status < 300) {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].SUCCESS));
            } else {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].ERROR));
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].ERROR));
        }
    };
}
function resendOtp(data) {
    return async function resendOtpThunk(dispatch) {
        try {
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].LOADING));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/resend-otp", data);
            if (response.status >= 200 && response.status < 300) {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].SUCCESS));
            } else {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].ERROR));
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].ERROR));
        }
    };
}
function resetPassword(data) {
    return async function resetPasswordThunk(dispatch) {
        try {
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].LOADING));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/reset-password", data);
            if (response.status >= 200 && response.status < 300) {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].SUCCESS));
            } else {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].ERROR));
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].ERROR));
        }
    };
}
function loginUser(data) {
    return async function loginUserThunk(dispatch) {
        try {
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].LOADING));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/login", data);
            if (response.status >= 200 && response.status < 300) {
                dispatch(setUser(response.data.data));
                dispatch(setToken(response.data.token));
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].SUCCESS));
            } else {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].ERROR));
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].ERROR));
        }
    };
}
function logoutUser() {
    return async function logoutUserThunk(dispatch) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/logout');
            if (response.status >= 200 && response.status < 300) {
                dispatch(setUser({}));
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].SUCCESS));
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].ERROR));
        }
    };
}
const onBoardUser = (data)=>{
    return async (dispatch)=>{
        try {
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].LOADING));
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$http$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/onboarded", data, {
                withCredentials: true
            });
            if (response.status >= 200 && response.status < 300) {
                dispatch(setUser(response.data.data));
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].SUCCESS));
            } else {
                dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].ERROR));
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
            dispatch(setStatus(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].ERROR));
        }
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/components/bodyanimators.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const BorderAnimation = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl bg-white dark:bg-black p-4 h-full w-full",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/lib/components/bodyanimators.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/lib/components/bodyanimators.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BorderAnimation;
const __TURBOPACK__default__export__ = BorderAnimation;
var _c;
__turbopack_context__.k.register(_c, "BorderAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/register/registerPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$hook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store/hook.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$auth$2f$auths$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/store/auth/auths-slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types/global-type.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$components$2f$bodyanimators$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/components/bodyanimators.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircleIcon>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const RegisterPage = ()=>{
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$hook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$hook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "RegisterPage.useAppSelector": (store)=>store.auth
    }["RegisterPage.useAppSelector"]);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        username: "",
        email: "",
        password: ""
    });
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$auth$2f$auths$2d$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerUser"])(data));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RegisterPage.useEffect": ()=>{
            if (status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].SUCCESS) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Register successful!");
                router.push(`/otp-verification?email=${data.email}`);
            }
        }
    }["RegisterPage.useEffect"], [
        status,
        router,
        data.email
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen flex items-center justify-center p-4 bg-slate-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-5xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$components$2f$bodyanimators$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:w-1/2 p-8 flex items-center justify-center md:border-r border-slate-700",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircleIcon$3e$__["MessageCircleIcon"], {
                                                className: "w-12 h-12 mx-auto text-slate-400 mb-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/register/registerPage.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-slate-200",
                                                children: "Create an Account"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/register/registerPage.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400",
                                                children: "Join our community today!"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/register/registerPage.tsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/register/registerPage.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "username",
                                                placeholder: "Username",
                                                value: data.username,
                                                onChange: handleChange,
                                                className: "w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/register/registerPage.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                name: "email",
                                                placeholder: "Email",
                                                value: data.email,
                                                onChange: handleChange,
                                                className: "w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/register/registerPage.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "password",
                                                name: "password",
                                                placeholder: "Password",
                                                value: data.password,
                                                onChange: handleChange,
                                                className: "w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/register/registerPage.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].LOADING,
                                                className: "w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition",
                                                children: status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$global$2d$type$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Status"].LOADING ? "Registering..." : "Register"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/register/registerPage.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/register/registerPage.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/register/registerPage.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/register/registerPage.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:w-1/2 hidden md:flex items-center justify-center p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-slate-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-3xl font-bold mb-4",
                                        children: "Welcome 👋"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/register/registerPage.tsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400",
                                        children: "Create your account and start chatting with people around the world."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/register/registerPage.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/register/registerPage.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/register/registerPage.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/register/registerPage.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/register/registerPage.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/register/registerPage.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/register/registerPage.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(RegisterPage, "3p8122rbJ6FXCRPId2z61vXU2t0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$hook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2f$hook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = RegisterPage;
const __TURBOPACK__default__export__ = RegisterPage;
var _c;
__turbopack_context__.k.register(_c, "RegisterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ae1eda9e._.js.map