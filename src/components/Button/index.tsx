import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, type, disable}: IButtonProps) => {
  return <ButtonContainer onClick={onClick} type={type} disabled={disable}>{title}</ButtonContainer>;
};

export default Button;
