import React, { useState, useContext, useCallback, useEffect } from "react";
import { useHttp } from "../../hooks/http.hook";

import Loader from "../../components/Loader";
import FanficCard from "../../components/FanficCard";
import styles from "./styles.module.css";

const ProfilePage = () => {
  const token = JSON.parse(localStorage.getItem("userData")).token;
  const [fanfics, setFanfics] = useState([]);
  const { loading, request } = useHttp();

  const fetchFanfics = useCallback(async () => {
    try {
      const fetched = await request("api/fanfic", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setFanfics(fetched);
    } catch (e) {}
  }, [token, request]);

  useEffect(() => {
    fetchFanfics();
  }, [fetchFanfics]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="wrapper">
      {<FanficCard fanfics={fanfics} />}
      <form className="form"> </form>
    </div>
  );
};

export default ProfilePage;
