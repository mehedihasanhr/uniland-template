export function ProfileInfoForm() {
  return (
    <div className="border rounded bg-white p-30 mb-30">
      <div className="row">
        <div className="col-xl-2">
          <h4 className="mb-4 font-400">Profile Information</h4>
        </div>
        <div className="col-xl-10">
          <form action="#" className="form-boder" method="POST">
            <div className="row">
              <div className="col-lg-12">
                <div className="wrap-custom-file">
                  <input
                    type="file"
                    name="image1"
                    id="image1"
                    accept=".gif, .jpg, .png"
                  />
                  <label
                    htmlFor="image1"
                    style={{ backgroundImage: "url(assets/images/team/2.jpg)" }}
                  >
                    <span>
                      <i className="flaticon-download" /> Upload Photo{" "}
                    </span>
                  </label>
                </div>
                <p>*minimum 260px x 260px</p>
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Username</label>
                <input
                  className="form-control"
                  name="username"
                  placeholder="admin"
                  type="text"
                />
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Email</label>
                <input
                  className="form-control"
                  name="email"
                  placeholder="admin@website.com"
                  type="email"
                />
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">First Name</label>
                <input
                  className="form-control"
                  name="firstname"
                  placeholder="Brain"
                  type="text"
                />
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Last Name</label>
                <input
                  className="form-control"
                  name="lastname"
                  placeholder="Adams"
                  type="text"
                />
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Position</label>
                <input
                  className="form-control"
                  name="position"
                  placeholder="Property Broker"
                  type="text"
                />
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Phone</label>
                <input
                  className="form-control"
                  name="phone"
                  placeholder="+1-908-941-6051"
                  type="text"
                />
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Fax Number</label>
                <input
                  className="form-control"
                  name="faxnumber"
                  placeholder="94 1551 466 1"
                  type="text"
                />
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Language</label>
                <select>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>Arabic</option>
                  <option>Dutch</option>
                  <option>German</option>
                  <option>Franch</option>
                  <option>African</option>
                </select>
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">
                  Company Name
                </label>
                <input
                  className="form-control"
                  name="companyname"
                  placeholder="Company Name"
                  type="text"
                />
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Address</label>
                <input
                  className="form-control"
                  name="address"
                  placeholder="3170 Fairfax Drive New Brunswick, NJ 08901"
                  type="text"
                />
              </div>
              <div className="col-12 mb-20">
                <label className="mb-2 font-500 w-100">About Me</label>
                <textarea
                  className="form-control bg-light"
                  placeholder="Write Details..."
                  rows={6}
                  defaultValue={""}
                />
              </div>
              <div className="col-12 mb-20">
                <button type="submit" className="btn btn-primary">
                  Update Profile
                </button>
              </div>
            </div>
          </form>
          <p>
            <span className="font-500">NOTE :</span> Morbi nibh dis. Pede. Erat,
            porta urna. Adipiscing Ipsum nibh morbi taciti proin quisque sit
            quam curae; vulputate ridiculus. Dictumst ullamcorper nullam
            Parturient, urna. Etiam nascetur enim lectus torquent pellentesque.
          </p>
        </div>
      </div>
    </div>
  );
}
