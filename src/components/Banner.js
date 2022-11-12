import styled from "styled-components";
import config from "../../config.json"

export const StyledBanner = styled.header`
.banner{
    width: 100%;
    height: 45vh;
    display: flex;
    justify-content: end;
    align-items: flex-end;
}
.svg{
    display: flex;
    align-items: center;
    padding: 1%;
    margin-bottom: 1%;
    width: 20%;
    height: 15%;
    position: relative;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
}
svg{
    width: 15%;
    margin: 5px;
}
@media (max-width: 600px){
    .banner{
        width: 100%;
        height: 20vh;
    }
}
`;