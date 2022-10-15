import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Apiget() {
  const navigate = useNavigate()
  const [apiData, setApiData] = useState({})

  const loadData = () => {
    axios.get("https://reqres.in/api/users?page=1")
      .then((response) => setApiData(response.data))
      .catch((error) => console.log(error))
  }

  const handlingnextData = () => {
    axios.get("https://reqres.in/api/users?page=2")
      .then((response) => setApiData(response.data))
      .catch((error) => console.log(error))
  }

  const handlingpreviousData = () => {
    axios.get("https://reqres.in/api/users?page=1")
      .then((response) => setApiData(response.data))
      .catch((error) => console.log(error))
  }

  const navigation = (id) => {
    navigate(`/${id}`)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <button onClick={handlingnextData}>next</button>
      <button onClick={handlingpreviousData}>previous</button>
      {apiData.data?.map((details) => {
        return (
          <ul>
            <li>Id:{details.id}</li>
            <li>Email:{details.email}</li>
            <li>First_Name:{details.first_name}</li>
            <li>Last_Name:{details.last_name}</li>
            <p onClick={() => navigation(details.id)}><img src={details.avatar} /></p>
            <li><Link to={`/${details.id}`}>{details.first_name} {details.last_name}</Link></li>
          </ul>
        )
      })

      }

    </div>
  )
}
export default Apiget;