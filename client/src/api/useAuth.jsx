import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function UseAuth() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("私は猫が大好き");

  useEffect(() => {
    if (!auth) {
      navigate("/login");
      swal({
        title: "Please Login First",
        icon: "warning",
      });
    }
  }, [auth]);
}

export default UseAuth;
