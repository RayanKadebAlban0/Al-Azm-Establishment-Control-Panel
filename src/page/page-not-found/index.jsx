import React from "react";
import notfound from "../../assets/images/notfound.jpg";
import { Styles } from "./styles";

const PageNotFound = () => {
  return (
    <Styles>
      <div className="Div">
        <h1>الصفحة غير موجودة!!</h1>
        <div> <img src={notfound} alt="notfound" />  </div>
      </div>
      </Styles>
  );
};

export default PageNotFound;
