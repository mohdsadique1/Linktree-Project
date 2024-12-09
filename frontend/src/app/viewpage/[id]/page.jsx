'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const View = () => {

  const { id } = useParams();
  const [profileData, setProfileData] = useState(null);

  const fetchProfileData = async () => {
    const res = await axios.get('http://localhost:5000/page/getbyid/' + id);
    console.log(res.data);
    setProfileData(res.data);
  }

  useEffect(() => {
    fetchProfileData();
  }, [])

  if (profileData === null) {
    return <h1>Loading ... </h1>
  }

  return (
    <div>
      <h1>{profileData.title}</h1>
    </div>
  )
}

export default View;