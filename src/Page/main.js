import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ChatIds from "../Components/ChatBox";
import InfoForm from "../Components/InfoForm";

const Home = () => {
  return (
    <section className="bg-black mt-4 ">
      <h1 className="text-white text-align center ">Chainconsults ChatBox</h1>

      <div className="row g-1 d-flex">
        <div className="col-6">
          <ChatIds />
        </div>

        <div className="col-6">
          <InfoForm />
        </div>
      </div>
    </section>
  );
};

export default Home;
