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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1hcHBsZS1zaWduLWluL2FwcGxlLXNpZ24taW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxpQkFBaUIsbUJBQU8sQ0FBQyx5REFBMkI7QUFDcEQsY0FBYyxtQkFBTyxDQUFDLG1EQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsNkMiLCJmaWxlIjoidmVuZG9yLjg0NTg2MjZlMWVjZjkxMmM2ZmZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwbGF0Zm9ybV8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCIpO1xudmFyIGpzQXJyYXlUb05TQXJyYXkgPSB1dGlsc18xLmlvcy5jb2xsZWN0aW9ucy5qc0FycmF5VG9OU0FycmF5O1xudmFyIGNvbnRyb2xsZXI7XG52YXIgZGVsZWdhdGU7XG5mdW5jdGlvbiBpc1NpZ25JbldpdGhBcHBsZVN1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQocGxhdGZvcm1fMS5kZXZpY2Uub3NWZXJzaW9uKSA+PSAxMztcbn1cbmV4cG9ydHMuaXNTaWduSW5XaXRoQXBwbGVTdXBwb3J0ZWQgPSBpc1NpZ25JbldpdGhBcHBsZVN1cHBvcnRlZDtcbmZ1bmN0aW9uIGdldFNpZ25JbldpdGhBcHBsZVN0YXRlKHVzZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIHJlamVjdChcIlRoZSAndXNlcicgcGFyYW1ldGVyIGlzIG1hbmRhdG9yeVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzU2lnbkluV2l0aEFwcGxlU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAgIHJlamVjdChcIk5vdCBzdXBwb3J0ZWRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb3ZpZGVyID0gQVNBdXRob3JpemF0aW9uQXBwbGVJRFByb3ZpZGVyLm5ldygpO1xuICAgICAgICBwcm92aWRlci5nZXRDcmVkZW50aWFsU3RhdGVGb3JVc2VySURDb21wbGV0aW9uKHVzZXIsIGZ1bmN0aW9uIChzdGF0ZSwgZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvci5sb2NhbGl6ZWREZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShcIkFVVEhPUklaRURcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGF0ZSA9PT0gMikge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoXCJOT1RGT1VORFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShcIlJFVk9LRURcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJJbnZhbGlkIHN0YXRlIGZvciBnZXRTaWduSW5XaXRoQXBwbGVTdGF0ZTogXCIgKyBzdGF0ZSArIFwiLCBwbGVhc2UgcmVwb3J0IGFuIGlzc3VlIGF0IGhlIHBsdWdpbiByZXBvIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLmdldFNpZ25JbldpdGhBcHBsZVN0YXRlID0gZ2V0U2lnbkluV2l0aEFwcGxlU3RhdGU7XG5mdW5jdGlvbiBzaWduSW5XaXRoQXBwbGUob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmICghaXNTaWduSW5XaXRoQXBwbGVTdXBwb3J0ZWQoKSkge1xuICAgICAgICAgICAgcmVqZWN0KFwiTm90IHN1cHBvcnRlZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvdmlkZXIgPSBBU0F1dGhvcml6YXRpb25BcHBsZUlEUHJvdmlkZXIubmV3KCk7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gcHJvdmlkZXIuY3JlYXRlUmVxdWVzdCgpO1xuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnVzZXIpIHtcbiAgICAgICAgICAgIHJlcXVlc3QudXNlciA9IG9wdGlvbnMudXNlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNjb3Blcykge1xuICAgICAgICAgICAgdmFyIG5zQXJyYXlfMSA9IE5TTXV0YWJsZUFycmF5Lm5ldygpO1xuICAgICAgICAgICAgb3B0aW9ucy5zY29wZXMuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgIGlmIChzID09PSBcIkVNQUlMXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbnNBcnJheV8xLmFkZE9iamVjdChBU0F1dGhvcml6YXRpb25TY29wZUVtYWlsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocyA9PT0gXCJGVUxMTkFNRVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG5zQXJyYXlfMS5hZGRPYmplY3QoQVNBdXRob3JpemF0aW9uU2NvcGVGdWxsTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVuc3VwcG9ydGVkIHNjb3BlOiBcIiArIHMgKyBcIiwgdXNlIGVpdGhlciBFTUFJTCBvciBGVUxMTkFNRVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlcXVlc3QucmVxdWVzdGVkU2NvcGVzID0gbnNBcnJheV8xO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xsZXIgPSBBU0F1dGhvcml6YXRpb25Db250cm9sbGVyLmFsbG9jKCkuaW5pdFdpdGhBdXRob3JpemF0aW9uUmVxdWVzdHMoanNBcnJheVRvTlNBcnJheShbcmVxdWVzdF0pKTtcbiAgICAgICAgY29udHJvbGxlci5kZWxlZ2F0ZSA9IGRlbGVnYXRlID0gQVNBdXRob3JpemF0aW9uQ29udHJvbGxlckRlbGVnYXRlSW1wbC5jcmVhdGVXaXRoUHJvbWlzZShyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICBjb250cm9sbGVyLnBlcmZvcm1SZXF1ZXN0cygpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5zaWduSW5XaXRoQXBwbGUgPSBzaWduSW5XaXRoQXBwbGU7XG52YXIgQVNBdXRob3JpemF0aW9uQ29udHJvbGxlckRlbGVnYXRlSW1wbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFTQXV0aG9yaXphdGlvbkNvbnRyb2xsZXJEZWxlZ2F0ZUltcGwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQVNBdXRob3JpemF0aW9uQ29udHJvbGxlckRlbGVnYXRlSW1wbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBBU0F1dGhvcml6YXRpb25Db250cm9sbGVyRGVsZWdhdGVJbXBsLm5ldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEFTQXV0aG9yaXphdGlvbkNvbnRyb2xsZXJEZWxlZ2F0ZUltcGwuT2JqQ1Byb3RvY29scy5wdXNoKEFTQXV0aG9yaXphdGlvbkNvbnRyb2xsZXJEZWxlZ2F0ZSk7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLm5ldy5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChpZ25vcmUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXBwbGUgU2lnbiBJbiBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgZGV2aWNlIC0gaXQgcmVxdWlyZXMgaU9TIDEzKy4gVGlwOiB1c2UgJ2lzU2lnbkluV2l0aEFwcGxlU3VwcG9ydGVkJyBiZWZvcmUgY2FsbGluZyAnc2lnbkluV2l0aEFwcGxlJy5cIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQVNBdXRob3JpemF0aW9uQ29udHJvbGxlckRlbGVnYXRlSW1wbC5jcmVhdGVXaXRoUHJvbWlzZSA9IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gQVNBdXRob3JpemF0aW9uQ29udHJvbGxlckRlbGVnYXRlSW1wbC5uZXcoKTtcbiAgICAgICAgaWYgKGRlbGVnYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZWplY3QoXCJOb3Qgc3VwcG9ydGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZWdhdGUucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICBkZWxlZ2F0ZS5yZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlbGVnYXRlO1xuICAgIH07XG4gICAgQVNBdXRob3JpemF0aW9uQ29udHJvbGxlckRlbGVnYXRlSW1wbC5wcm90b3R5cGUuYXV0aG9yaXphdGlvbkNvbnRyb2xsZXJEaWRDb21wbGV0ZVdpdGhBdXRob3JpemF0aW9uID0gZnVuY3Rpb24gKGNvbnRyb2xsZXIsIGF1dGhvcml6YXRpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCI+Pj4gY3JlZGVudGlhbC5zdGF0ZTogXCIgKyBhdXRob3JpemF0aW9uLmNyZWRlbnRpYWwuc3RhdGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIj4+PiBjcmVkZW50aWFsLnN0YXRlOiBcIiArIGF1dGhvcml6YXRpb24uY3JlZGVudGlhbC5zdGF0ZSk7XG4gICAgICAgIHRoaXMucmVzb2x2ZSh7XG4gICAgICAgICAgICB1c2VyOiBhdXRob3JpemF0aW9uLmNyZWRlbnRpYWwudXNlcixcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBU0F1dGhvcml6YXRpb25Db250cm9sbGVyRGVsZWdhdGVJbXBsLnByb3RvdHlwZS5hdXRob3JpemF0aW9uQ29udHJvbGxlckRpZENvbXBsZXRlV2l0aEVycm9yID0gZnVuY3Rpb24gKGNvbnRyb2xsZXIsIGVycm9yKSB7XG4gICAgICAgIHRoaXMucmVqZWN0KGVycm9yLmxvY2FsaXplZERlc2NyaXB0aW9uKTtcbiAgICB9O1xuICAgIEFTQXV0aG9yaXphdGlvbkNvbnRyb2xsZXJEZWxlZ2F0ZUltcGwuT2JqQ1Byb3RvY29scyA9IFtdO1xuICAgIHJldHVybiBBU0F1dGhvcml6YXRpb25Db250cm9sbGVyRGVsZWdhdGVJbXBsO1xufShOU09iamVjdCkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwbGUtc2lnbi1pbi5pb3MuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==