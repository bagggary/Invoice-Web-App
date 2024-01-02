import { useEffect } from "react";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });
  if (user) {
    return children;
  }
};

export default PrivateRoute;
