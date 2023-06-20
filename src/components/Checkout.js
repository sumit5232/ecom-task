import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/feature/CartSlice";

const CheckOut = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [userinfo, setUserinfo] = useState({
    name: "",
    email: "",
    phone_no: "",
    Address: "",
    Pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserinfo({ ...userinfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("name", JSON.stringify(userinfo));
    alert("Order Successfull")
    setUserinfo({
      name: "",
      email: "",
      password: "",
      phone_no: "",
      Address: "",
      Pincode: "",
    });
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="p-5  text-center">
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
          <div className="col">
            <div className="p-3"></div>
          </div>
          <div className="col" style={{ width: "80%", height: "70%" }}>
            <div className="p-3">
              <Card
                style={{ width: "80%", boxShadow: "10px 10px 5px lightblue" }}
              >
                <Card.Body>
                  <Card.Title>User Details</Card.Title>
                  <Form onSubmit={handleSubmit}>
                    <div className="mb-3 row">
                      <label
                        for="inputName"
                        className="col-sm-3 col-form-label"
                      >
                        Name :
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          id="inputName"
                          placeholder="Enter name"
                          name="name"
                          value={userinfo.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label
                        for="inputEmail"
                        className="col-sm-3 col-form-label"
                      >
                        Email :
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail"
                          placeholder="Enter email"
                          name="email"
                          value={userinfo.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label
                        for="inputPhone_no"
                        className="col-sm-3 col-form-label"
                      >
                        Phone_no :
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          id="inputPhone_no"
                          placeholder="Enter Phone Number"
                          name="phone_no"
                          value={userinfo.phone_no}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label
                        for="inputPhone_no"
                        className="col-sm-3 col-form-label"
                      >
                        Address :
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          id="inputPhone_no"
                          placeholder="Enter Address"
                          name="Address"
                          value={userinfo.Address}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label
                        for="inputPhone_no"
                        className="col-sm-3 col-form-label"
                      >
                        PinCode :
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          id="inputPhone_no"
                          placeholder="Enter Pin Code"
                          name="Pincode"
                          value={userinfo.Pincode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <Button
                      variant="outline-primary"
                      type="submit"
                      className="mt-3"
                    >
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col">
            <div className="p-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;