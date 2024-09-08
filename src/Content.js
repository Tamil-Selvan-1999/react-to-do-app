export default function Content() {
  return (
    <>
      <div className="container">
        <h1 className="mt-5">To - Do App</h1>
        <div>
          <div>
            <h2>Create a new item</h2>
          </div>
          <div>
            <form>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary mb-3">
                Add
              </button>
            </form>
          </div>
        </div>
        <div>
          <div>
            <h2>List of items</h2>
          </div>
          <div>
            <p>List</p>
          </div>
        </div>
      </div>
    </>
  );
}
