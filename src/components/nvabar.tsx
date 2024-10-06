import { Link, useNavigate } from 'react-router-dom'

export function Nvabar() {
    
    const navigate=useNavigate()
    function handleLogout(){
      localStorage.removeItem("userInfo")
      navigate("/login")
    }

    return (
       <nav>
          <Link to={"/"}>Home</Link>
          <Link to="/products">Products</Link>
          <button onClick={handleLogout}>logout</button>
       </nav>
    )
}
