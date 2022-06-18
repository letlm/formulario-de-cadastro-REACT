import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { FormLogin, DivLabel } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório!")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/,
        "O nome deve conter apenas letras!"
      )
      .min(2, "Seu nome deve ter no mínimo 2 caracteres"),
    email: yup
      .string()
      .required("E-mail obrigatório!")
      .email("E-mail inválido!"),
    password: yup
      .string()
      .required("Senha obrigatória!")
      .min(5, "Sua senha deve ter no mínimo 8 caracteres!")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Sua senha precisa ter pelo menos um número, uma letra maiúscula e um caractere especial!"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "A senha está diferente!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitForm = (data) => {
    history.push(`/user/${data.name}`);
  };

  return (
    <>
      <FormLogin onSubmit={handleSubmit(onSubmitForm)}>
        <h3>Dados de Cadastro</h3>
        <DivLabel>
          <input type="text" placeholder=" " {...register("name")} />
          <label>Nome</label>
          {errors.name && <span>{errors.name.message}</span>}
        </DivLabel>
        <DivLabel>
          <input type="text" placeholder=" " {...register("email")} />
          <label>E-mail</label>
          {errors.email && <span>{errors.email.message}</span>}
        </DivLabel>
        <DivLabel>
          <input type="password" placeholder=" " {...register("password")} />
          <label>Senha</label>
          {errors.password && <span>{errors.password.message}</span>}
        </DivLabel>
        <DivLabel>
          <input
            type="password"
            placeholder=" "
            {...register("confirmPassword")}
          />
          <label>Confirmar senha</label>
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </DivLabel>
        <button type="submit">Cadastrar</button>
      </FormLogin>
    </>
  );
};

export default Register;
