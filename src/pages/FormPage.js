import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";
import apiUrls from '../apiUrls'
import axios from 'axios';

function FormPage({
  empData,
  setEmpData,
  submitHandler,
  // submitHandlerUpdate,
  linkHandler,
}) {
  const { userId } = useParams();
  // console.log("EMp dta", empData);

  useEffect(() => {
    getEmp();
  }, [userId]);

  // Form submit handler on Update
  const submitHandlerUpdate = async(e) => {
    e.preventDefault();
    // Update Employee Data
    await axios
      .put(`${apiUrls.UPDATE_USER_DATA}/${userId}`, empData)
      .then((res) => console.log("Data Updated!:", res.data.data));
    setEmpData({
      emp_name: "",
      emp_age: "",
      emp_salary: "",
    });
    // console.log("Updated", empData);
  };
  
  const getEmp = async () => {
    if (userId) {
      const res = await fetch(
        `https://dummy.restapiexample.com/api/v1/employee/${userId}`
      );
      const response = await res.json();
      // console.log(response.data, "response");
      setEmpData({
        emp_name: response.data.employee_name,
        emp_age: response.data.employee_age,
        emp_salary: response.data.employee_salary,
      });
    }
  };
  
  return (
    <div>
      <p>Form ID: {userId}</p>
      <Form
        empData={empData}
        setEmpData={setEmpData}
        submitHandler={submitHandler}
        submitHandlerUpdate={submitHandlerUpdate}
        linkHandler={linkHandler}
        // userId={userId}
      />
    </div>
  );
}

export default FormPage;
