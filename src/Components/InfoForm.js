import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const Box = () => {
  let chatList = new Array(6).fill("Damola", 1);
  return (
    <section className=" ">
      <nav
        style={{
          borderTop: "solid 3px",
          padding: "0rem",
        }}
      >
        {chatList.map((singleChat, index) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/chatList/${index}`}
            key={index}
          >
            {singleChat}
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default Box;
