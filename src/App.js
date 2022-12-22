import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import RegisterUser from "./pages/RegisterUser";
import FormPage from "./pages/FormPage";
import UserListing from "./pages/UserListing";
import axios from "axios";
import apiUrls from "./apiUrls";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [empData, setEmpData] = useState({
    emp_name: "",
    emp_age: "",
    emp_salary: "",
  });

  // Get Employee Data
  useEffect(() => {
    axios
      .get(apiUrls.READ_USER_DATA)
      .then((res) => setEmployees(res.data.data));
  }, [setEmployees]);

  console.log(employees);

  // Form submit handler on Post
  const submitHandlerPost = (e) => {
    e.preventDefault();

    // Post Employee Data
    axios
      .post(apiUrls.CREATE_USER_DATA, empData)
      .then((res) => console.log("Data Posted!:", res.data.data));
    setEmpData({
      emp_name: "",
      emp_age: "",
      emp_salary: "",
    });
    console.log("clicked", empData);
  };

  // Form submit handler on Update
  const submitHandlerUpdate = (e) => {
    e.preventDefault();
    // Update Employee Data
    axios
      .put(`${apiUrls.UPDATE_USER_DATA}/1`, empData)
      .then((res) => console.log("Data Updated!:", res.data.data));
    setEmpData({
      emp_name: "",
      emp_age: "",
      emp_salary: "",
    });
    console.log("Updated", empData);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/register"
            element={
              <RegisterUser
                empData={empData}
                setEmpData={setEmpData}
                submitHandlerPost={submitHandlerPost}
              />
            }
          />
          <Route
            path="/form/:userId"
            element={
              <FormPage
                empData={empData}
                setEmpData={setEmpData}
                submitHandlerUpdate={submitHandlerUpdate}
              />
            }
          />
          <Route
            path="/user-listing"
            element={<UserListing employees={employees} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
