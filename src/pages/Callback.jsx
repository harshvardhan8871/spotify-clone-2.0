import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    const token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))?.split("=")[1];
    if (token) {
      window.localStorage.setItem("token", token);
      navigate("/", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-2xl">Logging you in...</div>
    </div>
  );
};

export default Callback; 