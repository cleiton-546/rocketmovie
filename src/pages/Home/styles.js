import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

`;


export const Content = styled.div`
  grid-area: content;
  padding: 64px 64px 0;
  overflow-y: auto;

  .addMovie {
    margin-top: -80px;
    margin-bottom: 37px;
    display: flex;
    justify-content: space-between;
    gap: 850px;
    white-space: nowrap;
    align-items: center;
    ;
  }
  
`;

export const NewNote = styled.button`
  

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border-radius: 8px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 207px;
  height: 48px;
  

  svg {
    margin-right: 8px;
  }
`;






