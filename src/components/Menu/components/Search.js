import styled from "styled-components";

const SearchStyle = styled.div`
display: flex;
max-width: 435px;
width: 100%;
flex-direction: row;
overflow: hidden;
    
input{
        width: 80%;
        border: 2px solid #ddd;;
        outline: none;
        padding: 5px 15px;
        background-color: transparent;
        border-radius: 50px 0px 0px 50px;
    }
button{
        width: 20%;
        border: none;
        outline: none;
        background-color: #ddd;
        border-radius:  0px 50px 50px  0px ;
        @media (min-width: 600px){
            height: 40px;
        }
}
`;

export function Search(){
    return(
        <SearchStyle>
            <input type="text" placeholder="Buscar"/>
            <button>
                Search
            </button>
        </SearchStyle>
    )
}