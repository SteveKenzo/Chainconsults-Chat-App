import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const box = () => {
  let chatList = new Array(6).fill("Blessing", 2);
  return (
    <section className="">
      <nav
        style={{
          borderRight: "solid 3px",
          borderTop: "solid 3px",
          padding: "2rem",
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

export default box;
