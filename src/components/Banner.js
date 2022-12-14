import styled from "styled-components";
import config from "../../config.json"

export const StyledBanner = styled.header`

.banner{
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: end;
    align-items: flex-end;
}
.svg{
    display: flex;
    align-items: center;
    padding: 1%;
    margin-bottom: 1%;
    margin-right: 0%;
    width: 15%;
    height: 15%;
    position: relative;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
}
svg{
    width: 30px;
    height: 30px;
    margin: 5px;
    fill: white;
    border-radius: 50%;
}
@media (max-width: 600px){
    width: 150%;
    .banner{
        width: 100%;
        height: 20vh;
    }
}
@media (max-width: 400px) {
    width: 250%;
  }
`;