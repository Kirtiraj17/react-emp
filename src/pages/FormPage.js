import { useParams } from "react-router-dom";
import Form from "../components/Form";

function FormPage({empData, setEmpData, submitHandler, submitHandlerUpdate}) {
  const { userId } = useParams();
  // console.log(userId)

  return (
    <div>
      <p>Form ID: {userId}</p>
      <Form
        empData={empData}
        setEmpData={setEmpData}
        submitHandler={submitHandler}
        submitHandlerUpdate={submitHandlerUpdate}
        // userId={userId}
      />
    </div>
  );
}

export default FormPage;
