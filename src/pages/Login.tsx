import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();
  const { mutate, data } = useMutation({
    mutationFn: (data: { username: string; password: string }) => {
      return axios
        .post("http://localhost:3000/api/auth/login", data)
        .then((response) => response.data);
    },
    onSuccess: (_) => {
      localStorage.setItem("userInfo", JSON.stringify(_));
      navigate("/");
    },
    onError: () => {},
  });

  function handleLogin() {
    mutate({ username: "testuser", password: "password123" });
  }


  	// useEffect(()=>{
	// 	axios.post('http://localhost:3000/api/auth/register', {
	// 		username: "testuser", password: "password123" 
	// 	  });
	// },[])
  return (

    <button onClick={handleLogin}>login</button>
    // <form onSubmit={handleLogin}>
    //   <input type="text" name="userName" />
    //   <input type="password" name="password" />
    //   <input type="submit" />
    // </form>
  );
}
