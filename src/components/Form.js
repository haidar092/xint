import React, { useState } from "react";
import { toast } from "react-toastify";
import { Create } from "./Api";
import { useNavigate } from "react-router-dom";
const Form = () => {
    let navigate =useNavigate();
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    Create(name, cnic)
      .then((res) => {
        toast.success("user Created Succesfully");
        console.log(res.data)
        setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="order-accountant-section ">
      <div className="order-accountant-form-main">
        <div className="form-content-order-accountant py-4">
          <form action="">
            <div className="field-control">
              <div className="row">
                <div className="col-sm-6">
                  <input
                    className="col-12"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name"
                    onChange={(e) =>
                      setName(e.target.value.replace(/[^a-zA-Z]/gi, ""))
                    }
                  />
                </div>

                <div className="col-sm-6">
                  <input
                    whileFocus={{ scale: 1.1 }}
                    className="col-12"
                    type="text"
                    name="cnic"
                    value={cnic}
                    placeholder="Job"
                    onChange={(e) =>
                      setCnic(e.target.value.replace(/[^a-zA-Z]/gi, ""))
                    }
                  />
                </div>

                <div className=" col-12 mt-3  d-flex justify-content-end ">
                  <button type="submit" onClick={handleRegister}>
                    Create New
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
