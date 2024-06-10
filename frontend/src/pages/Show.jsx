import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Show = () => {
  const [response, setResponse] = useState([]);
  useEffect(()=> {
     const fetchData = async() => {
      try {
        const result = await axios.get("http://localhost:8000/api/lists/show");
        setResponse(result.data)
      } catch (error) {
        console.log(error)
      }
     }
     fetchData();
  }, [])

  const deleteItem = async(id) => {
    try {
      await axios.delete(`http://localhost:8000/api/lists/value/${id}`)
      setResponse(prevState => prevState.filter(item => item.id !== id));
      window.location.href = "/show";
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex items-center justify-center m-5">
      <ul className="w-1/2 border border-gray-400 space-y-1">
        {response.map((items) => {
          return(
            <li className="flex items-center justify-between bg-green-300 p-3" key={items._id}>{items.text}
              <div className="space-x-3">
                <Link className="bg-yellow-400 px-2 py-1" to={`/edit/${items._id}`}>Edit</Link>
                <button className="bg-red-400 px-2 py-1" onClick={() => deleteItem(items._id)}>Delete</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Show