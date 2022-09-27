import styled from "styled-components";

export const Container = styled.div`

.main_container {
  display: grid;  
  margin-top: 2rem;
  padding: 0 4rem;
 
}

.countries_container{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  grid-gap: 3rem;
}

.card_styles{
margin-top: 4.5rem;
width: 100%;
height: 24rem;

background-color: ${props =>props.theme.colors.secundary};
border-radius: 10px;
 
}
.card_styles img{
  width: 100%;
  height: 14rem;
  object-fit: cover;
  border-radius: 5px;
}

.country_info{
display: flex;
flex-direction: column;
gap: 1rem;
margin-left: 0.8rem;

 margin-top: .5rem;
 color: ${props =>props.theme.colors.text};
}

.items > h3{
  margin-left: 1rem;
  color: ${props =>props.theme.colors.text};
}
.items > p{
  display: flex;
  
  margin-top: .8rem;
  margin-left: 1rem;
}


.loading {
  display: flex;
  justify-content: center;
  align-items: center;
 
 
  color: ${props =>props.theme.colors.text} !important;
}


.filters{
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
 
}

.input_search{
  height: 3rem;
  width: 20rem;
  font-weight: 800;
  text-indent: .8rem;
}

.select_filter{
  height: 3rem;
  width: 10rem;
  font-weight: 800;
  text-indent: .5rem;
  background-color: ${props =>props.theme.colors.secundary};
  color: ${props =>props.theme.colors.text};
}
.options{
  color: ${props =>props.theme.colors.text};
  font-size: 1rem;
  font-weight: bold;
}


@media screen and (max-width: 925px) {
  .main_container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
   
    padding: 0 1rem;
  }

  .countries_container{
    display: flex;
    flex-wrap: wrap;
    padding: 0 4rem;
    justify-content: center;
  
    
  }
  .filters{
    width: 90%;
    font-size: 0.8rem
  }
  .select_filter{
    font-size: .75rem;
    text-indent: 0;
  }
}

`