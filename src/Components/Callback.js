import React, { useState } from 'react';


const Callback = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/.netlify/functions/sendEmail/send2', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        setForm({
          name: '',
          email: '',
          number: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      });
  };

  return (
    <div className="yellow p-4" id="callback">
      <section>
        <div className="container newsletter">
          <div className="px-3">
            <div className="row">
              <div className="col py-4 text-light">
                <h2>Request Callback</h2>
                <div className="py-2 m-0">
                  <p>Only for working professionals or Final year Students</p>
                </div>
              </div>

              <div className="col ms-auto">
                <div className="row row-cols-1 row-cols-md-6 row-cols-lg-6 row-cols-xl-2">
                  <div className="col-md input-group p-3 flex-nowrap">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md input-group p-3 flex-nowrap">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2">
                  <div className="col input-group p-3 flex-nowrap">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                      name="number"
                      value={form.number}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col   p-3">
                    <div className="d-grid">
                      <button
                        type="button"
                        className="btn btn-light ytext"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Callback;
