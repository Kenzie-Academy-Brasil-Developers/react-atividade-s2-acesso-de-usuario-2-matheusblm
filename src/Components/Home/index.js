import { members } from "../Members";
import { Link } from "react-router-dom";

function Home() {
  console.log(members);
  return (
    <>
      {members.map((member) =>
        member.type === "pj" ? (
          <Link to={`/company/${member.id}`}>{member.name}</Link>
        ) : (
          <Link to={`/customer/${member.id}`}>{member.name}</Link>
        )
      )}
    </>
  );
}

export default Home;
