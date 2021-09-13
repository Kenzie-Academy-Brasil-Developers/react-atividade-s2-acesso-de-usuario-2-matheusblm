import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { members } from "../Members";
function Customer() {
  const params = useParams();
  const company = members.find((company) => company.id === params.id);
  return (
    <>
      <div>
        <h1>Detalhes da Empresa</h1>

        <p>Nome da empresa: {company && company.name}</p>

        <Link to="/">Voltar</Link>
      </div>
    </>
  );
}

export default Customer;
