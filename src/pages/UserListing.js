import { Link } from "react-router-dom";

const UserListing = ({ employees }) => {
  return (
    <ul>
      {employees.map((employee) => {
        const { id, employee_name, employee_age, employee_salary } = employee;
        return (
          <li className="user-card" key={id}>
            <Link to={`/form/${id}`}>
              <span className="user-id">Employee ID: {id}</span>
              <span className="user-name">Employee Name: {employee_name}</span>
              <span className="user-age">Employee Age: {employee_age}</span>
              <span className="user-salary">Employee Salary: {employee_salary}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default UserListing;
