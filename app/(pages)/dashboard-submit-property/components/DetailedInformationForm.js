export function DetailedInformationForm() {
  return (
    <div className="row">
      <div className="col mb-30">
        <div className="border rounded bg-white p-30">
          <h4 className="mb-4">Detailed Information</h4>
          <form className="form-boder" action="#" method="POST">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-20">
                <label className="mb-2 font-fifteen font-500">
                  Property Id
                </label>
                <input
                  className="form-control"
                  id="propertyid"
                  name="propertyid"
                  type="text"
                />
              </div>
              <div className="col-lg-4 col-md-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Area Size</label>
                <input
                  className="form-control"
                  id="areasize"
                  name="areasize"
                  type="text"
                />
              </div>
              <div className="col-lg-4 col-md-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Land Size</label>
                <input
                  className="form-control"
                  id="landsize"
                  name="landsize"
                  type="text"
                />
              </div>
              <div className="col-lg-4 col-md-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Bathrooms</label>
                <input
                  className="form-control"
                  id="Bathrooms"
                  name="Bathrooms"
                  type="text"
                />
              </div>
              <div className="col-lg-4 col-md-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Garage</label>
                <select>
                  <option>Select Garage</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="col-lg-4 col-md-6 mb-20">
                <label className="mb-2 font-fifteen font-500">
                  Garage Size
                </label>
                <input
                  className="form-control"
                  id="garagesize"
                  name="garagesize"
                  type="text"
                />
              </div>
              <div className="col-lg-4 col-md-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Age Year</label>
                <input
                  className="form-control"
                  id="build"
                  name="build"
                  type="text"
                />
              </div>
              <div className="col-lg-4 col-md-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Video URL</label>
                <input
                  className="form-control"
                  id="video"
                  name="video"
                  type="text"
                />
              </div>
              <div className="col-md-12">
                <h6 className="mb-2">Check options</h6>
              </div>
              <div className="col-md-12">
                <ul className="row row-cols-lg-3 row-cols-1 custom-check-box mb-20">
                  <li className="col">
                    <input
                      type="checkbox"
                      className="custom-control-input hide"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Air Conditioning
                    </label>
                  </li>
                  <li className="col">
                    <input
                      type="checkbox"
                      className="custom-control-input hide"
                      id="customCheck2"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck2"
                    >
                      Garage Facility
                    </label>
                  </li>
                  <li className="col">
                    <input
                      type="checkbox"
                      className="custom-control-input hide"
                      id="customCheck3"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck3"
                    >
                      Swiming Pool
                    </label>
                  </li>
                  <li className="col">
                    <input
                      type="checkbox"
                      className="custom-control-input hide"
                      id="customCheck4"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck4"
                    >
                      Fire Security
                    </label>
                  </li>
                  <li className="col">
                    <input
                      type="checkbox"
                      className="custom-control-input hide"
                      id="customCheck5"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck5"
                    >
                      Fire Place Facility
                    </label>
                  </li>
                  <li className="col">
                    <input
                      type="checkbox"
                      className="custom-control-input hide"
                      id="customCheck6"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck6"
                    >
                      Play Ground
                    </label>
                  </li>
                  <li className="col">
                    <input
                      type="checkbox"
                      className="custom-control-input hide"
                      id="customCheck7"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck7"
                    >
                      Ferniture Include
                    </label>
                  </li>
                  <li className="col">
                    <input
                      type="checkbox"
                      className="custom-control-input hide"
                      id="customCheck8"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck8"
                    >
                      Marbel Floor
                    </label>
                  </li>
                  <li className="col">
                    <input
                      type="checkbox"
                      className="custom-control-input hide"
                      id="customCheck9"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck9"
                    >
                      Store Room
                    </label>
                  </li>
                  <li className="col">
                    <input
                      type="checkbox"
                      className="custom-control-input hide"
                      id="customCheck10"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck10"
                    >
                      Hight Class Door
                    </label>
                  </li>
                  <li className="col">
                    <input
                      type="checkbox"
                      className="custom-control-input hide"
                      id="customCheck11"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck11"
                    >
                      Floor Heating System
                    </label>
                  </li>
                  <li className="col">
                    <input
                      type="checkbox"
                      className="custom-control-input hide"
                      id="customCheck12"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck12"
                    >
                      Garden Include
                    </label>
                  </li>
                </ul>
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
