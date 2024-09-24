import { Button as BaseButton } from "@mui/base";
import { styled } from "@pigment-css/react";

const StyledButton = styled(BaseButton)(({ theme }) => ({
  backgroundColor: theme.colors.primary,
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "100vmax",
  cursor: "pointer",
  "&:disabled": {
    backgroundColor: "gray",
    cursor: "not-allowed",
  },
}));

export const Button = ({ children, disabled, onClick }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export type ButtonProps = {
  children: string;
  onClick: () => void;
  disabled?: boolean;
};
