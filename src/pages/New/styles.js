import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content"
  ;

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
 
`;

export const Form = styled.form`
  max-width: 1081px;
  margin: 38px auto;

  > header {
    display: flex;
    flex-direction: column;
    margin-bottom: 36px;
    gap: 24px;
  }

  a {
    display: flex;
    align-items: center;
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.ORANGE};

    > svg {
      margin-right: 8px;
      vertical-align: middle;
    }
  }

  > .inputs {
    display: flex;
    gap: 40px;
    margin-bottom: 35px;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  
  .tags {
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    padding: 16px;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    gap: 24px;
    border-radius: 8px;
  }

  .edit {
    display: flex;
    gap: 40px;
  }

  .delete {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    background: ${({ theme }) => theme.COLORS.BLACK};
  }

`;



