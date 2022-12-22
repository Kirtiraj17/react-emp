function Form({ empData, setEmpData, submitHandlerPost, submitHandlerUpdate }) {
  const route = window.location.href;
  let submitHandler;
  if(route === 'http://localhost:3000/register') {
    submitHandler = submitHandlerPost;
    console.log('first')
  } else {
    submitHandler = submitHandlerUpdate;
  }

  return (
    <form onSubmit={submitHandler}>
      <h2>Register Employee</h2>
      <label htmlFor="emp_name">
        Employee Name:
        <input
          type="text"
          id="emp_name"
          className="emp_name"
          placeholder="Enter Employee Name"
          value={empData?.emp_name}
          onChange={(e) => setEmpData({ ...empData, emp_name: e.target.value })}
        />
      </label>
      <label htmlFor="emp_age">
        Employee Age:
        <input
          type="text"
          id="emp_age"
          className="emp_age"
          placeholder="Enter Employee Age"
          value={empData?.emp_age}
          onChange={(e) => setEmpData({ ...empData, emp_age: e.target.value })}
        />
      </label>
      <label htmlFor="emp_salary">
        Employee Salary:
        <input
          type="text"
          id="emp_salary"
          className="emp_salary"
          placeholder="Enter Employee Salary"
          value={empData?.emp_salary}
          onChange={(e) =>
            setEmpData({ ...empData, emp_salary: e.target.value })
          }
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default Form;
