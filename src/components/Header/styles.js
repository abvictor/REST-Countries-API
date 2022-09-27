import styled from "styled-components";

export const Container = styled.div`

.header {
display: flex;
justify-content: space-between;
align-items: center;
padding: 3rem;
 
  height: 6rem;
  font-size: 1.25rem;
  color: ${props =>props.theme.colors.text};
  background-color: ${props =>props.theme.colors.secundary};

  p{
    font-size: .75rem;
    margin-right: 2rem;
    margin-bottom: .5rem;
  }
}
@media screen and (max-width: 915px) {
  .header{
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  
    font-size: 1rem;
  
    padding: 0rem;
  }
 
}

`