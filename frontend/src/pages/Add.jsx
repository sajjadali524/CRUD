import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [form, setForm] = useState({text: ""})

  const handleForm = (event) => {
    setForm({...form, [event.target.name] : event.target.value})
  }
  const navigate = useNavigate();

  const formSubmitted = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/lists/add", form)
      navigate("/show")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-center m-5">
      <form className="flex w-1/2 space-x-3" onSubmit={formSubmitted}>
        <input type="text" className="w-full border border-gray-400 rounded-lg outline-none px-5 py-1" placeholder="Enter Something" name="text" onChange={handleForm} />
        <button className="bg-green-400 px-5 py-1 rounded-lg" type="submit">Add</button>
      </form>
    </div>
  )
}

export default Add;