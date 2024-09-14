import { useState } from "react";

export default function Content() {
  const [currentData, setCurrentData] = useState({
    name: "",
    description: "",
  });

  const [data, setData] = useState([]);

  const handleDelete = (index) => {
    const newArray = [...data.slice(0, index), ...data.slice(index + 1)];
    setData(newArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, currentData]);
    setCurrentData({
      name: "",
      description: "",
    });
  };

  const handleChange = (e, field) => {
    const value = e.target.value;
    if (field === "name") {
      setCurrentData({ ...currentData, name: value });
    } else {
      setCurrentData({ ...currentData, description: value });
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="m-5 text-center">To - Do App</h1>
        <form onSubmit={(e) => handleSubmit(e)} className="row g-3">
          <div className="col-auto">
            <h2>Create a new task</h2>
          </div>
          <div className="col-auto">
            <label htmlFor="name" className="form-label visually-hidden">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Enter the name of task"
              onChange={(e) => handleChange(e, "name")}
              value={currentData.name}
            />
          </div>
          <div className="col-auto">
            <label htmlFor="description" className="form-label visually-hidden">
              Description
            </label>
            <input
              type="textarea"
              name="description"
              id="description"
              className="form-control"
              placeholder="Enter Description"
              onChange={(e) => handleChange(e, "description")}
              value={currentData.description}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="container mt-5">
        <div>
          <h2 className="mb-3">List of items</h2>
        </div>
        <div>
          {data.length ? (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Sl. No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td onClick={() => handleDelete(index)}>
                        <button className="btn btn-primary mb-3">Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p>List is Empty</p>
          )}
        </div>
      </div>
    </>
  );
}
