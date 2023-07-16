import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { DynamicInput } from '../components/DynamicForm';
import data from '../constants/Form.json';
import { useUserContext } from '../context/userContext';
const INITIAL_STATE = {
  email: '',
  password: '',
};

// Login page
const Login = () => {
  // Inits
  const { loginFields } = data;
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const { setUserDataHandler } = useUserContext();
  // calls when user do some change in input field
  const handleUserDataChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevState) => {
      return {
        ...prevState,
        [name]: value.toString(),
      };
    });
    setErrors((prevState) => {
      return {
        ...prevState,
        [name]: '',
      };
    });
  };

  // For validate the form

  //Handling the form submission
  const formSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch('http://localhost:5000/user/login', {
        credentials: 'include',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      setUserDataHandler(data.user);
      if (response.status === 200) {
        toast.success('Login done successfully');
        navigate('/');
      } else {
        toast.error('Please enter valid email and password');
      }
    } catch (err) {
      toast.error('Something went wrong');
      console.log(err);
    }
  };

  // JSX
  return (
    <div className="relative p-6 flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="max-w-[550px] w-full p-6  m-auto bg-white rounded-md shadow-xl shadow-rose-600/40  ring-2 ring-purple-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
          Sign in
        </h1>

        <form className="mt-6" onSubmit={formSubmitHandler}>
          {loginFields.map((singleFieldData, index) => {
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
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700 ">
          Don't have an account?
          <Link
            to="/register"
            className="font-medium text-purple-600 hover:underline ml-1"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
