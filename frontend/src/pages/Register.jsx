import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import data from '../constants/Form.json';
import { DynamicInput } from '../components/DynamicForm';
import toast from 'react-hot-toast';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const Register = () => {
  // Inits
  const regex = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  };
  const { registerFields } = data;
  const navigate = useNavigate();
  const [registrationFormData, setRegistrationFormData] =
    useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});

  // calls when user do some change in input field
  const handleUserDataChange = (event) => {
    const { name, value } = event.target;
    setRegistrationFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    setErrors((prevState) => {
      return {
        ...prevState,
        [name]: '',
      };
    });
  };

  //Handling the form submission
  const formSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      console.log(registrationFormData);
      const response = await fetch('http://localhost:5000/user/register', {
        credentials: 'include',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationFormData),
      });
      if (response.status === 200) {
        toast.success('Register done successfully');
        navigate('/login');
      } else {
        toast.error('Please enter valid Details');
      }
    } catch (err) {
      toast.error('Something went wrong');
      console.log(err);
    }
  };

  return (
    <div className="relative p-6 flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="max-w-[550px] w-full p-6  m-auto bg-white rounded-md shadow-xl shadow-rose-600/40  ring-2 ring-purple-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
          Register
        </h1>
        <form className="mt-6" onSubmit={formSubmitHandler}>
          {registerFields.map((singleFieldData, index) => {
            return (
              <DynamicInput
                key={index}
                singleFieldData={singleFieldData}
                handleUserDataChange={handleUserDataChange}
                errors={errors}
              />
            );
          })}
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Register
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700 ">
          Have an account?
          <Link
            to="/login"
            className="font-medium text-purple-600 hover:underline ml-1"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
