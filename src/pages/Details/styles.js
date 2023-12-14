import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
   
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;
    margin: 0px 106px 156px 123px;

    .container {
      display: flex;
      flex-direction: column;
      margin-top: 24px;
     
    }

    .section-header {
      display: flex;
      gap: 20px;
      align-items: baseline;
      
    }

    .section-header h2 {
      font-size: 42px;
    }

    .section-header svg {
      font-size: 25px;
    }

    .user {
      margin: 24px 0 40px 0;
      display: flex;
      align-items: baseline;
    }
    .user img {
      width: 16px;
      height: 16px;
      border-radius: 35px ;
      border: 1px solid #3E3B47;
      margin-right: 4px;
    }

    .user svg {
      margin-left: 8px;
      margin-right: 4px;
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    .tags {
      margin-bottom: 40px;
    }
    
   
    
}
`;

