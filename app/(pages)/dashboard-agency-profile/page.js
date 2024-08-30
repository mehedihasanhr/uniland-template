import { PackagePlanForm } from "./components/PackagePlanForm";
import { ProfileInfoForm } from "./components/ProfileInfoForm";

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
            <ProfileInfoForm />
            <PackagePlanForm />
          </div>
        </div>
      </div>
    </div>
  );
}
