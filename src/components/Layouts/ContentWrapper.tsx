import { Container } from "./ContentWrapper.styles";

interface Props {
  children?: any;
}
export const ContentWrapper = ({children}: Props) => {
  return (
      <Container>
        {children}
      </Container>
  )
}