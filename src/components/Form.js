import React from 'react'

function Form() {
  return (
    <form>
      <span>Register Employee</span>
      <label htmlFor='emp_name'>
        Employee Name: 
        <input type='text' id='emp_name' className='emp_name' placeholder='Enter Employee Name' />
      </label>
      <label htmlFor='emp_age'>
        Employee Age: 
        <input type='text' id='emp_age' className='emp_age' placeholder='Enter Employee Age' />
      </label>
      <label htmlFor='emp_salary'>
        Employee Salary: 
        <input type='text' id='emp_salary' className='emp_salary' placeholder='Enter Employee Salary' />
      </label>
    </form>
  )
}

export default Form;
