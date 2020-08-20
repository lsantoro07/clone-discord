import styled from "styled-components";

export const Grid = styled.div`

  /** Lista das divisões do Grid:

    SL - Server List
    SN - Server Name
    CI - Channel Info
    CL - Channel List
    CD - Channel Data
    UL - User List
    UI - User Info
   */


  display: grid;

  /** Define o template da GRID, referenciando nomes a cada elemento do grid (célula).
      Repetindo o nome, irá mesclar as células, fazendo o grid ocupar 2 ou mais espaços.
      Um ponto significa uma célula vazia.
  */
  grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';

  /** Os comandos abaixo definem os tamanhos de cada célula no grid */
  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;

  /** Define que a grid irá ocupar 100% do view height */
  height: 100vh;

`;