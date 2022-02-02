import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Navbar from "../Navbar";
import "../styles/ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profile-screen">
      <Navbar />
      <div className="profile-screen-body">
        <h1 className="profile-screen-title">Edit Profile</h1>
        <div className="profile-screen-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix user avatar"
          />
          <div className="profile-screen-details">
            <h2 className="profile-screen-email">{user.email}</h2>
            <h3 className="profile-screen-plans-title">
              Plans (Current Plan: premium)
            </h3>
            <div className="profile-screen-plans">
              <button
                onClick={() => {
                  auth.signOut();
                }}
                className="profile-screen-signout-btn"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
