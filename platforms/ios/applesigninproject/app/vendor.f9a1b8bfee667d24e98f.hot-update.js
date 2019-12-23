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
        console.log(">>> credential.state: " + JSON.stringify(authorization));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1hcHBsZS1zaWduLWluL2FwcGxlLXNpZ24taW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxpQkFBaUIsbUJBQU8sQ0FBQyx5REFBMkI7QUFDcEQsY0FBYyxtQkFBTyxDQUFDLG1EQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCw2QyIsImZpbGUiOiJ2ZW5kb3IuZjlhMWI4YmZlZTY2N2QyNGU5OGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHBsYXRmb3JtXzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIik7XG52YXIganNBcnJheVRvTlNBcnJheSA9IHV0aWxzXzEuaW9zLmNvbGxlY3Rpb25zLmpzQXJyYXlUb05TQXJyYXk7XG52YXIgY29udHJvbGxlcjtcbnZhciBkZWxlZ2F0ZTtcbmZ1bmN0aW9uIGlzU2lnbkluV2l0aEFwcGxlU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiBwYXJzZUludChwbGF0Zm9ybV8xLmRldmljZS5vc1ZlcnNpb24pID49IDEzO1xufVxuZXhwb3J0cy5pc1NpZ25JbldpdGhBcHBsZVN1cHBvcnRlZCA9IGlzU2lnbkluV2l0aEFwcGxlU3VwcG9ydGVkO1xuZnVuY3Rpb24gZ2V0U2lnbkluV2l0aEFwcGxlU3RhdGUodXNlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgcmVqZWN0KFwiVGhlICd1c2VyJyBwYXJhbWV0ZXIgaXMgbWFuZGF0b3J5XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNTaWduSW5XaXRoQXBwbGVTdXBwb3J0ZWQoKSkge1xuICAgICAgICAgICAgcmVqZWN0KFwiTm90IHN1cHBvcnRlZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvdmlkZXIgPSBBU0F1dGhvcml6YXRpb25BcHBsZUlEUHJvdmlkZXIubmV3KCk7XG4gICAgICAgIHByb3ZpZGVyLmdldENyZWRlbnRpYWxTdGF0ZUZvclVzZXJJRENvbXBsZXRpb24odXNlciwgZnVuY3Rpb24gKHN0YXRlLCBlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yLmxvY2FsaXplZERlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKFwiQVVUSE9SSVpFRFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShcIk5PVEZPVU5EXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKFwiUkVWT0tFRFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIkludmFsaWQgc3RhdGUgZm9yIGdldFNpZ25JbldpdGhBcHBsZVN0YXRlOiBcIiArIHN0YXRlICsgXCIsIHBsZWFzZSByZXBvcnQgYW4gaXNzdWUgYXQgaGUgcGx1Z2luIHJlcG8hXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZ2V0U2lnbkluV2l0aEFwcGxlU3RhdGUgPSBnZXRTaWduSW5XaXRoQXBwbGVTdGF0ZTtcbmZ1bmN0aW9uIHNpZ25JbldpdGhBcHBsZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKCFpc1NpZ25JbldpdGhBcHBsZVN1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICByZWplY3QoXCJOb3Qgc3VwcG9ydGVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm92aWRlciA9IEFTQXV0aG9yaXphdGlvbkFwcGxlSURQcm92aWRlci5uZXcoKTtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBwcm92aWRlci5jcmVhdGVSZXF1ZXN0KCk7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMudXNlcikge1xuICAgICAgICAgICAgcmVxdWVzdC51c2VyID0gb3B0aW9ucy51c2VyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2NvcGVzKSB7XG4gICAgICAgICAgICB2YXIgbnNBcnJheV8xID0gTlNNdXRhYmxlQXJyYXkubmV3KCk7XG4gICAgICAgICAgICBvcHRpb25zLnNjb3Blcy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMgPT09IFwiRU1BSUxcIikge1xuICAgICAgICAgICAgICAgICAgICBuc0FycmF5XzEuYWRkT2JqZWN0KEFTQXV0aG9yaXphdGlvblNjb3BlRW1haWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzID09PSBcIkZVTExOQU1FXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbnNBcnJheV8xLmFkZE9iamVjdChBU0F1dGhvcml6YXRpb25TY29wZUZ1bGxOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5zdXBwb3J0ZWQgc2NvcGU6IFwiICsgcyArIFwiLCB1c2UgZWl0aGVyIEVNQUlMIG9yIEZVTExOQU1FXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVxdWVzdC5yZXF1ZXN0ZWRTY29wZXMgPSBuc0FycmF5XzE7XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbGxlciA9IEFTQXV0aG9yaXphdGlvbkNvbnRyb2xsZXIuYWxsb2MoKS5pbml0V2l0aEF1dGhvcml6YXRpb25SZXF1ZXN0cyhqc0FycmF5VG9OU0FycmF5KFtyZXF1ZXN0XSkpO1xuICAgICAgICBjb250cm9sbGVyLmRlbGVnYXRlID0gZGVsZWdhdGUgPSBBU0F1dGhvcml6YXRpb25Db250cm9sbGVyRGVsZWdhdGVJbXBsLmNyZWF0ZVdpdGhQcm9taXNlKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIGNvbnRyb2xsZXIucGVyZm9ybVJlcXVlc3RzKCk7XG4gICAgfSk7XG59XG5leHBvcnRzLnNpZ25JbldpdGhBcHBsZSA9IHNpZ25JbldpdGhBcHBsZTtcbnZhciBBU0F1dGhvcml6YXRpb25Db250cm9sbGVyRGVsZWdhdGVJbXBsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQVNBdXRob3JpemF0aW9uQ29udHJvbGxlckRlbGVnYXRlSW1wbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBU0F1dGhvcml6YXRpb25Db250cm9sbGVyRGVsZWdhdGVJbXBsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEFTQXV0aG9yaXphdGlvbkNvbnRyb2xsZXJEZWxlZ2F0ZUltcGwubmV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgQVNBdXRob3JpemF0aW9uQ29udHJvbGxlckRlbGVnYXRlSW1wbC5PYmpDUHJvdG9jb2xzLnB1c2goQVNBdXRob3JpemF0aW9uQ29udHJvbGxlckRlbGVnYXRlKTtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIubmV3LmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBcHBsZSBTaWduIEluIG5vdCBzdXBwb3J0ZWQgb24gdGhpcyBkZXZpY2UgLSBpdCByZXF1aXJlcyBpT1MgMTMrLiBUaXA6IHVzZSAnaXNTaWduSW5XaXRoQXBwbGVTdXBwb3J0ZWQnIGJlZm9yZSBjYWxsaW5nICdzaWduSW5XaXRoQXBwbGUnLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBU0F1dGhvcml6YXRpb25Db250cm9sbGVyRGVsZWdhdGVJbXBsLmNyZWF0ZVdpdGhQcm9taXNlID0gZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBBU0F1dGhvcml6YXRpb25Db250cm9sbGVyRGVsZWdhdGVJbXBsLm5ldygpO1xuICAgICAgICBpZiAoZGVsZWdhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlamVjdChcIk5vdCBzdXBwb3J0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIGRlbGVnYXRlLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVsZWdhdGU7XG4gICAgfTtcbiAgICBBU0F1dGhvcml6YXRpb25Db250cm9sbGVyRGVsZWdhdGVJbXBsLnByb3RvdHlwZS5hdXRob3JpemF0aW9uQ29udHJvbGxlckRpZENvbXBsZXRlV2l0aEF1dGhvcml6YXRpb24gPSBmdW5jdGlvbiAoY29udHJvbGxlciwgYXV0aG9yaXphdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIj4+PiBjcmVkZW50aWFsLnN0YXRlOiBcIiArIEpTT04uc3RyaW5naWZ5KGF1dGhvcml6YXRpb24pKTtcbiAgICAgICAgY29uc29sZS5sb2coXCI+Pj4gY3JlZGVudGlhbC5zdGF0ZTogXCIgKyBhdXRob3JpemF0aW9uLmNyZWRlbnRpYWwuc3RhdGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIj4+PiBjcmVkZW50aWFsLnN0YXRlOiBcIiArIGF1dGhvcml6YXRpb24uY3JlZGVudGlhbC5zdGF0ZSk7XG4gICAgICAgIHRoaXMucmVzb2x2ZSh7XG4gICAgICAgICAgICB1c2VyOiBhdXRob3JpemF0aW9uLmNyZWRlbnRpYWwudXNlcixcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBU0F1dGhvcml6YXRpb25Db250cm9sbGVyRGVsZWdhdGVJbXBsLnByb3RvdHlwZS5hdXRob3JpemF0aW9uQ29udHJvbGxlckRpZENvbXBsZXRlV2l0aEVycm9yID0gZnVuY3Rpb24gKGNvbnRyb2xsZXIsIGVycm9yKSB7XG4gICAgICAgIHRoaXMucmVqZWN0KGVycm9yLmxvY2FsaXplZERlc2NyaXB0aW9uKTtcbiAgICB9O1xuICAgIEFTQXV0aG9yaXphdGlvbkNvbnRyb2xsZXJEZWxlZ2F0ZUltcGwuT2JqQ1Byb3RvY29scyA9IFtdO1xuICAgIHJldHVybiBBU0F1dGhvcml6YXRpb25Db250cm9sbGVyRGVsZWdhdGVJbXBsO1xufShOU09iamVjdCkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwbGUtc2lnbi1pbi5pb3MuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==