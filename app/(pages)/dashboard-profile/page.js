import { ProfileInfoForm } from "./components/ProfileInfoForm";
import { SocialMediaForm } from "./components/SocialMediaForm";

export default function DashboardProfile() {
  return (
    <div className="full-row px-40 py-30 xs-p-0">
      <div className="container-fluid">
        {/* Page Title */}
        <div className="row">
          <div className="col-12">
            <h3 className="my-3">My Profile</h3>
          </div>
        </div>

        <div className="row">
          <div className="col">
            {/* Profile info */}
            <ProfileInfoForm />
            <SocialMediaForm />
          </div>
        </div>
      </div>
    </div>
  );
}
