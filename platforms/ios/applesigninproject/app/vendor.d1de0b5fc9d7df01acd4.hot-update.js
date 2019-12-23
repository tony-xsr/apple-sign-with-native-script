webpackHotUpdate("vendor",{

/***/ "../node_modules/nativescript-apple-sign-in/apple-sign-in.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
var utils_1 = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");
var jsArrayToNSArray = utils_1.ios.collections.jsArrayToNSArray;
var controller;
var delegate;
function isSignInWithAppleSupported() {
    return parseInt(platform_1.device.osVersion) >= 13;
}
exports.isSignInWithAppleSupported = isSignInWithAppleSupported;
function getSignInWithAppleState(user) {
    return new Promise(function (resolve, reject) {
        if (!user) {
            reject("The 'user' parameter is mandatory");
            return;
        }
        if (!isSignInWithAppleSupported()) {
            reject("Not supported");
            return;
        }
        var provider = ASAuthorizationAppleIDProvider.new();
        provider.getCredentialStateForUserIDCompletion(user, function (state, error) {
            if (error) {
                reject(error.localizedDescription);
                return;
            }
            if (state === 1) {
                resolve("AUTHORIZED");
            }
            else if (state === 2) {
                resolve("NOTFOUND");
            }
            else if (state === 3) {
                resolve("REVOKED");
            }
            else {
                reject("Invalid state for getSignInWithAppleState: " + state + ", please report an issue at he plugin repo!");
            }
        });
    });
}
exports.getSignInWithAppleState = getSignInWithAppleState;
function signInWithApple(options) {
    return new Promise(function (resolve, reject) {
        if (!isSignInWithAppleSupported()) {
            reject("Not supported");
            return;
        }
        var provider = ASAuthorizationAppleIDProvider.new();
        var request = provider.createRequest();
        if (options && options.user) {
            request.user = options.user;
        }
        if (options && options.scopes) {
            var nsArray_1 = NSMutableArray.new();
            options.scopes.forEach(function (s) {
                if (s === "EMAIL") {
                    nsArray_1.addObject(ASAuthorizationScopeEmail);
                }
                else if (s === "FULLNAME") {
                    nsArray_1.addObject(ASAuthorizationScopeFullName);
                }
                else {
                    console.log("Unsupported scope: " + s + ", use either EMAIL or FULLNAME");
                }
            });
            request.requestedScopes = nsArray_1;
        }
        controller = ASAuthorizationController.alloc().initWithAuthorizationRequests(jsArrayToNSArray([request]));
        controller.delegate = delegate = ASAuthorizationControllerDelegateImpl.createWithPromise(resolve, reject);
        controller.performRequests();
    });
}
exports.signInWithApple = signInWithApple;
var ASAuthorizationControllerDelegateImpl = (function (_super) {
    __extends(ASAuthorizationControllerDelegateImpl, _super);
    function ASAuthorizationControllerDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ASAuthorizationControllerDelegateImpl.new = function () {
        try {
            ASAuthorizationControllerDelegateImpl.ObjCProtocols.push(ASAuthorizationControllerDelegate);
            return _super.new.call(this);
        }
        catch (ignore) {
            console.log("Apple Sign In not supported on this device - it requires iOS 13+. Tip: use 'isSignInWithAppleSupported' before calling 'signInWithApple'.");
            return null;
        }
    };
    ASAuthorizationControllerDelegateImpl.createWithPromise = function (resolve, reject) {
        var delegate = ASAuthorizationControllerDelegateImpl.new();
        if (delegate === null) {
            reject("Not supported");
        }
        else {
            delegate.resolve = resolve;
            delegate.reject = reject;
        }
        return delegate;
    };
    ASAuthorizationControllerDelegateImpl.prototype.authorizationControllerDidCompleteWithAuthorization = function (controller, authorization) {
        console.log(">>> credential.state: " + authorization.credential.state);
        this.resolve({
            user: authorization.credential.user,
        });
    };
    ASAuthorizationControllerDelegateImpl.prototype.authorizationControllerDidCompleteWithError = function (controller, error) {
        this.reject(error.localizedDescription);
    };
    ASAuthorizationControllerDelegateImpl.ObjCProtocols = [];
    return ASAuthorizationControllerDelegateImpl;
}(NSObject));
//# sourceMappingURL=apple-sign-in.ios.js.map

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1hcHBsZS1zaWduLWluL2FwcGxlLXNpZ24taW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxpQkFBaUIsbUJBQU8sQ0FBQyx5REFBMkI7QUFDcEQsY0FBYyxtQkFBTyxDQUFDLG1EQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDZDIiwiZmlsZSI6InZlbmRvci5kMWRlMGI1ZmM5ZDdkZjAxYWNkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcGxhdGZvcm1fMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTtcbnZhciBqc0FycmF5VG9OU0FycmF5ID0gdXRpbHNfMS5pb3MuY29sbGVjdGlvbnMuanNBcnJheVRvTlNBcnJheTtcbnZhciBjb250cm9sbGVyO1xudmFyIGRlbGVnYXRlO1xuZnVuY3Rpb24gaXNTaWduSW5XaXRoQXBwbGVTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHBsYXRmb3JtXzEuZGV2aWNlLm9zVmVyc2lvbikgPj0gMTM7XG59XG5leHBvcnRzLmlzU2lnbkluV2l0aEFwcGxlU3VwcG9ydGVkID0gaXNTaWduSW5XaXRoQXBwbGVTdXBwb3J0ZWQ7XG5mdW5jdGlvbiBnZXRTaWduSW5XaXRoQXBwbGVTdGF0ZSh1c2VyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICByZWplY3QoXCJUaGUgJ3VzZXInIHBhcmFtZXRlciBpcyBtYW5kYXRvcnlcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1NpZ25JbldpdGhBcHBsZVN1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICByZWplY3QoXCJOb3Qgc3VwcG9ydGVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm92aWRlciA9IEFTQXV0aG9yaXphdGlvbkFwcGxlSURQcm92aWRlci5uZXcoKTtcbiAgICAgICAgcHJvdmlkZXIuZ2V0Q3JlZGVudGlhbFN0YXRlRm9yVXNlcklEQ29tcGxldGlvbih1c2VyLCBmdW5jdGlvbiAoc3RhdGUsIGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IubG9jYWxpemVkRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoXCJBVVRIT1JJWkVEXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT09IDIpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKFwiTk9URk9VTkRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGF0ZSA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoXCJSRVZPS0VEXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiSW52YWxpZCBzdGF0ZSBmb3IgZ2V0U2lnbkluV2l0aEFwcGxlU3RhdGU6IFwiICsgc3RhdGUgKyBcIiwgcGxlYXNlIHJlcG9ydCBhbiBpc3N1ZSBhdCBoZSBwbHVnaW4gcmVwbyFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5nZXRTaWduSW5XaXRoQXBwbGVTdGF0ZSA9IGdldFNpZ25JbldpdGhBcHBsZVN0YXRlO1xuZnVuY3Rpb24gc2lnbkluV2l0aEFwcGxlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAoIWlzU2lnbkluV2l0aEFwcGxlU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAgIHJlamVjdChcIk5vdCBzdXBwb3J0ZWRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb3ZpZGVyID0gQVNBdXRob3JpemF0aW9uQXBwbGVJRFByb3ZpZGVyLm5ldygpO1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHByb3ZpZGVyLmNyZWF0ZVJlcXVlc3QoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy51c2VyKSB7XG4gICAgICAgICAgICByZXF1ZXN0LnVzZXIgPSBvcHRpb25zLnVzZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zY29wZXMpIHtcbiAgICAgICAgICAgIHZhciBuc0FycmF5XzEgPSBOU011dGFibGVBcnJheS5uZXcoKTtcbiAgICAgICAgICAgIG9wdGlvbnMuc2NvcGVzLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocyA9PT0gXCJFTUFJTFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG5zQXJyYXlfMS5hZGRPYmplY3QoQVNBdXRob3JpemF0aW9uU2NvcGVFbWFpbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHMgPT09IFwiRlVMTE5BTUVcIikge1xuICAgICAgICAgICAgICAgICAgICBuc0FycmF5XzEuYWRkT2JqZWN0KEFTQXV0aG9yaXphdGlvblNjb3BlRnVsbE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbnN1cHBvcnRlZCBzY29wZTogXCIgKyBzICsgXCIsIHVzZSBlaXRoZXIgRU1BSUwgb3IgRlVMTE5BTUVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXF1ZXN0LnJlcXVlc3RlZFNjb3BlcyA9IG5zQXJyYXlfMTtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sbGVyID0gQVNBdXRob3JpemF0aW9uQ29udHJvbGxlci5hbGxvYygpLmluaXRXaXRoQXV0aG9yaXphdGlvblJlcXVlc3RzKGpzQXJyYXlUb05TQXJyYXkoW3JlcXVlc3RdKSk7XG4gICAgICAgIGNvbnRyb2xsZXIuZGVsZWdhdGUgPSBkZWxlZ2F0ZSA9IEFTQXV0aG9yaXphdGlvbkNvbnRyb2xsZXJEZWxlZ2F0ZUltcGwuY3JlYXRlV2l0aFByb21pc2UocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgY29udHJvbGxlci5wZXJmb3JtUmVxdWVzdHMoKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuc2lnbkluV2l0aEFwcGxlID0gc2lnbkluV2l0aEFwcGxlO1xudmFyIEFTQXV0aG9yaXphdGlvbkNvbnRyb2xsZXJEZWxlZ2F0ZUltcGwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBU0F1dGhvcml6YXRpb25Db250cm9sbGVyRGVsZWdhdGVJbXBsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFTQXV0aG9yaXphdGlvbkNvbnRyb2xsZXJEZWxlZ2F0ZUltcGwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQVNBdXRob3JpemF0aW9uQ29udHJvbGxlckRlbGVnYXRlSW1wbC5uZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBBU0F1dGhvcml6YXRpb25Db250cm9sbGVyRGVsZWdhdGVJbXBsLk9iakNQcm90b2NvbHMucHVzaChBU0F1dGhvcml6YXRpb25Db250cm9sbGVyRGVsZWdhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5uZXcuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoaWdub3JlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFwcGxlIFNpZ24gSW4gbm90IHN1cHBvcnRlZCBvbiB0aGlzIGRldmljZSAtIGl0IHJlcXVpcmVzIGlPUyAxMysuIFRpcDogdXNlICdpc1NpZ25JbldpdGhBcHBsZVN1cHBvcnRlZCcgYmVmb3JlIGNhbGxpbmcgJ3NpZ25JbldpdGhBcHBsZScuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFTQXV0aG9yaXphdGlvbkNvbnRyb2xsZXJEZWxlZ2F0ZUltcGwuY3JlYXRlV2l0aFByb21pc2UgPSBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IEFTQXV0aG9yaXphdGlvbkNvbnRyb2xsZXJEZWxlZ2F0ZUltcGwubmV3KCk7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmVqZWN0KFwiTm90IHN1cHBvcnRlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlbGVnYXRlLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgZGVsZWdhdGUucmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWxlZ2F0ZTtcbiAgICB9O1xuICAgIEFTQXV0aG9yaXphdGlvbkNvbnRyb2xsZXJEZWxlZ2F0ZUltcGwucHJvdG90eXBlLmF1dGhvcml6YXRpb25Db250cm9sbGVyRGlkQ29tcGxldGVXaXRoQXV0aG9yaXphdGlvbiA9IGZ1bmN0aW9uIChjb250cm9sbGVyLCBhdXRob3JpemF0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiPj4+IGNyZWRlbnRpYWwuc3RhdGU6IFwiICsgYXV0aG9yaXphdGlvbi5jcmVkZW50aWFsLnN0YXRlKTtcbiAgICAgICAgdGhpcy5yZXNvbHZlKHtcbiAgICAgICAgICAgIHVzZXI6IGF1dGhvcml6YXRpb24uY3JlZGVudGlhbC51c2VyLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEFTQXV0aG9yaXphdGlvbkNvbnRyb2xsZXJEZWxlZ2F0ZUltcGwucHJvdG90eXBlLmF1dGhvcml6YXRpb25Db250cm9sbGVyRGlkQ29tcGxldGVXaXRoRXJyb3IgPSBmdW5jdGlvbiAoY29udHJvbGxlciwgZXJyb3IpIHtcbiAgICAgICAgdGhpcy5yZWplY3QoZXJyb3IubG9jYWxpemVkRGVzY3JpcHRpb24pO1xuICAgIH07XG4gICAgQVNBdXRob3JpemF0aW9uQ29udHJvbGxlckRlbGVnYXRlSW1wbC5PYmpDUHJvdG9jb2xzID0gW107XG4gICAgcmV0dXJuIEFTQXV0aG9yaXphdGlvbkNvbnRyb2xsZXJEZWxlZ2F0ZUltcGw7XG59KE5TT2JqZWN0KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHBsZS1zaWduLWluLmlvcy5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9