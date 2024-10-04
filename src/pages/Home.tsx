import axios from "axios";
import { useEffect } from "react";
import { useOutletContext } from 'react-router-dom';
import { Nvabar } from "../components/nvabar";

const Home = () => {

	const context = useOutletContext()
     const userInfo=JSON.parse(localStorage.getItem("userInfo")as string)
   
	// useEffect(()=>{
	// 	axios.post('http://localhost:3000/api/auth/register', {
	// 		username: "testuser", password: "password123" 
	// 	  });
	// },[])
	return (
		<>
			<Nvabar/>
			<div className="home card">
			<div className="mb-10">Welcome to Studytonight Shop</div>
			{!userInfo?.token && <div><button onClick={context.loginUser} className="btn pink">Login</button></div>}
		</div>
		</>
	
	);
};

export default Home;