import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-around bg-red-300 w-full py-3">
      <Link to="/">Logo</Link>
      <div className="flex items-center justify-center space-x-5">
        <Link to="/add">Add +</Link>
        <Link to="/show">Show</Link>
      </div>
    </div>
  )
}

export default Header