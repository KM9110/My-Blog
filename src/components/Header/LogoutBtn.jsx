import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
        authService.logOut().then(() => {
            dispatch(logout());
            navigate("/login");
        });
    };

    return (
        <button
            className="inline-block list-none px-6 py-2 duration-200 text-[#a49d91] hover:text-white rounded-full"
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;
