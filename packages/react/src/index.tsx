import styled from "@emotion/styled";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}
export const StyledButton = styled.button<ButtonProps>`
    
`;

export function App() {
  return <h1 className="text-ignite700">teste</h1>;
}
