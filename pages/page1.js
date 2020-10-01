import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Page1() {
  return <Title>Pagina 1 de teste</Title>;
}
