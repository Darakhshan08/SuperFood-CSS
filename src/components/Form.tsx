import React from 'react';
import '../styles/Form.css';

function Form() {
  return (
    <>
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Fast Support Team</h2>
          <p className="section-text">
            Etiam convallis, felis quis dapibus dictum, libero mauris luctus
            nunc, non fringilla purus ligula non justo. Non fringilla purus.
          </p>
        </div>

        <div className="grid">
          {/* Locations Section */}
          <div className="space-y-12">
            <div>
              <h3 className="card-title">Barcelona</h3>
              <div className="card-text">
                <div className="card-contact">
                  <div>
                    <p>198 West 21th Street, Suite 721</p>
                    <p>Barselona 20020</p>
                  </div>
                </div>
                <div className="card-contact">
                  <p>superfood@example.com</p>
                </div>
                <div className="card-contact">
                  <p>+88(0) 101 0000 000</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="card-title">New York</h3>
              <div className="card-text">
                <div className="card-contact">
                  <div>
                    <p>198 West 21th Street, Suite 721</p>
                    <p>Barselona 20020</p>
                  </div>
                </div>
                <div className="card-contact">
                  <p>superfood@example.com</p>
                </div>
                <div className="card-contact">
                  <p>+88(0) 101 0000 000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="form">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
                required
              />
            </div>
            <div>
              <textarea
                name="comment"
                placeholder="Comment"
                rows={5}
                className="textarea"
                required
              ></textarea>
            </div>
            <button type="submit" className="button">
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Form;
