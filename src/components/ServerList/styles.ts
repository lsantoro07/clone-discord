import styled from "styled-components";

export const Container = styled.div`

  /** Define em qual área do grid irá aparecer */
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);
  padding: 11px 0;

  max-height: 100vh;

  /** Define o que irá acontecer quando algum conteúdo chegar no eixo Y. No caso abaixo irá criar um scroll */
  overflow-y: scroll;

  /** Define a forma do scrollbar. No caso não irá aparecer */
  ::-webkit-scrollbar {
    display: none;
  }

`;

export const Separator = styled.div`

  width: 32px;
  border-bottom: 2px solid var(--quaternary);

  margin-bottom: 8px;
`;
