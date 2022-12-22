import Form from "../components/Form";

function RegisterUser({empData, setEmpData, submitHandlerPost}) {
  return (
    <div>
      <Form empData={empData} setEmpData={setEmpData} submitHandlerPost={submitHandlerPost} />
    </div>
  );
}

export default RegisterUser;
