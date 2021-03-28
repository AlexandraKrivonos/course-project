import React, { useState, useContext, useCallback, useEffect } from "react";
import { useHttp } from "../../hooks/http.hook";
import Loader from "../../components/Loader";
import FanficCard from "../../components/FanficCard";

import styles from "./styles.module.css";

const ProfilePage = () => {

  
  const [fanfics, setFanfics] = useState([]);
  const { loading, request } = useHttp();

  const fetchFanfics = useCallback(async () => {
    try {
      const fetched = await request("api/fanfic/all", "GET", null)
      setFanfics(fetched)
    } catch (e) {}
  }, [request]);

  useEffect(() => {
    fetchFanfics();
  }, [fetchFanfics]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="wrapper">
      {<FanficCard fanfics={fanfics} />}
    </div>
  );
};

export default ProfilePage;
