export function SocialMediaForm() {
  return (
    <div className="border rounded bg-white p-30 mb-30">
      <div className="row">
        <div className="col-xl-2">
          <h4 className="mb-4 font-400">Social Media</h4>
        </div>
        <div className="col-xl-10">
          <form action="#" className="form-boder" method="POST">
            <div className="row">
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Skype</label>
                <input
                  className="form-control"
                  name="title"
                  placeholder="skype.id"
                  type="text"
                />
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Website</label>
                <input
                  className="form-control"
                  name="title"
                  placeholder="mywebsite.com"
                  type="email"
                />
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Facebook</label>
                <input className="form-control" name="title" type="text" />
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Twitter</label>
                <input className="form-control" name="title" type="text" />
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Linkedin</label>
                <input className="form-control" name="title" type="text" />
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Instagram</label>
                <input className="form-control" name="title" type="text" />
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">
                  Google Plus
                </label>
                <input className="form-control" name="title" type="text" />
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Youtube</label>
                <input className="form-control" name="title" type="text" />
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Facebook</label>
                <input className="form-control" name="title" type="text" />
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Pinterest</label>
                <input className="form-control" name="title" type="text" />
              </div>
              <div className="col-lg-6 mb-20">
                <label className="mb-2 font-fifteen font-500">Vimeo</label>
                <input className="form-control" name="title" type="text" />
              </div>
              <div className="col-lg-12 mb-20">
                <button type="submit" name="name" className="btn btn-primary">
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
