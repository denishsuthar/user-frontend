import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup/Signup";
import Profile from "./Components/Profile/Profile";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Redux/actions/userAction";
import { ProtectedRoute } from "protected-route-react";
import Loader from "./Components/Loader/Loader";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/ForgotPassword/ResetPassword";
import UpdateProfile from "./Components/Profile/UpdateProfile";
import UpdatePassword from "./Components/Profile/UpdatePassword";

function App() {
  const { isAuthenticated, user, message, error, loading } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Signup />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
                  <Profile user={user} />
                </ProtectedRoute>
              }
            />

            <Route path="/forgotpassword" element={<ForgotPassword />} />

            <Route
              path="/api/v1/password/reset/:token"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ResetPassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/me/update"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/password/update"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
                  <UpdatePassword />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Toaster />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
