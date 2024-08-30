import { BasicInformationForm } from "./components/BasicInformationForm";
import { DetailedInformationForm } from "./components/DetailedInformationForm";
import { PropertyMediaForm } from "./components/PropertyMediaForm";
import AdditionalInformationForm from "./components/AdditionalInformationForm";

export default function DashboardSubmitProperty() {
  return (
    <div className="full-row px-40 py-30 xs-p-0">
      <div className="container-fluid">
        {/* Page Title */}
        <div className="row">
          <div className="col-12">
            <h3 className="my-3">Add New Property</h3>
          </div>
        </div>

        <BasicInformationForm />
        <DetailedInformationForm />
        <PropertyMediaForm />
        <AdditionalInformationForm />
      </div>
    </div>
  );
}
