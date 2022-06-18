import { Div } from "./styled";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Luna from "../../imgs/icons8-luna-lovegood-256(-xxxhdpi).png";

const User = () => {
  const history = useHistory();
  const { name } = useParams();

  const handleLogout = () => {
    history.push("/");
  };

  return (
    <Div>
      <img
        src={Luna}
        alt="Desenho do busto da Luna Lovegood dando boas vindas!"
      ></img>
      <h1>Bem-vindo(a) {name} </h1>
      <button onClick={handleLogout}>Voltar</button>
    </Div>
  );
};

export default User;
