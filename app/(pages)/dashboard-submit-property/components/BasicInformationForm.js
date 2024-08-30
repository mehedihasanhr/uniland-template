export function BasicInformationForm() {
  return (
    <div className="row">
      <div className="col mb-30">
        <div className="border rounded bg-white p-30">
          <h4 className="mb-4">Basic Information</h4>
          <form className="form-boder" action="#" method="POST">
            <div className="row">
              <div className="col-md-12 mb-20">
                <label className="mb-2 font-fifteen font-500">
                  Property Title
                </label>
                <input className="form-control" name="title" type="text" />
              </div>
              <div className="col-md-12 mb-20">
                <label className="mb-2 font-fifteen font-500">
                  Description
                </label>
                <textarea
                  className="form-control"
                  rows={10}
                  name="description"
                  defaultValue={""}
                />
              </div>
              <div className="col-md-6 mb-20">
                <label className="mb-2 font-fifteen font-500">
                  Property Types
                </label>
                <select>
                  <option>Select Types</option>
                  <option>House</option>
                  <option>Office</option>
                  <option>Appartment</option>
                  <option>Condos</option>
                  <option>Villa</option>
                  <option>Small Family</option>
                  <option>Single Room</option>
                </select>
              </div>
              <div className="col-md-6 mb-20">
                <label className="mb-2 font-fifteen font-500">
                  Property Status
                </label>
                <select>
                  <option>Property Status</option>
                  <option>For Rent</option>
                  <option>For Sale</option>
                </select>
              </div>
              <div className="col-md-4 mb-20">
                <label className="mb-2 font-fifteen font-500">Price(USD)</label>
                <input
                  className="form-control"
                  id="price"
                  name="price"
                  type="text"
                />
              </div>
              <div className="col-md-4 mb-20">
                <label className="mb-2 font-fifteen font-500">Area(sqft)</label>
                <input
                  className="form-control"
                  id="area"
                  name="area"
                  type="text"
                />
              </div>
              <div className="col-md-4 mb-20">
                <label className="mb-2 font-fifteen font-500">Rooms</label>
                <select>
                  <option>Select Number of Rooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </select>
              </div>
              <div className="col-md-12 mb-20">
                <button className="btn btn-primary" name="submitbasic">
                  Save Information
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
