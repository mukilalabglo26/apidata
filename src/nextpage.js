import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Nextpage() {
  const { id } = useParams()
  const [apiData, setApiData] = useState({})

  const loadData = () => {
    axios.get(`https://reqres.in/api/users/${id}`)
      .then((response) => setApiData(response.data))
      .catch((error) => console.log(error))
  }
  console.log("data")

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <p>{apiData.data?.id}</p>
      <p>{apiData.data?.first_name}</p>
      <p>{apiData.data?.last_name}</p>
      <p>{apiData.data?.email}</p>
      <img src={apiData.data?.avatar} />
    </div>
  )
}
export default Nextpage;