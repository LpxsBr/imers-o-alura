import styled from "styled-components";

export const HeaderStyle = styled.header`
    background-color: ${({theme})=> theme.backgroundLevel1};

    *{
        font-family: Helvetica;
        margin-top: 3%;
    }
    img{
        margin-left: 3%; 
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 80%;
        padding: 10px 70px;
        gap: 16px;
    }
    .user-info > div > h2{
        margin-bottom: -10px;
    }
    
    @media (max-width: 450px) {
        *{
            margin-top: 8%;
        }
        img{
            width: 60px;
            height: 60px;
        }
        .user-info > div{
            width: 100%;
            padding: 2%;
            font-size: x-small;
            margin-left: 2%;
        }
    }
    .menuVideos{
        width: 80%;
        display: flex;
        margin-left: 10%;
        margin-right: 10%;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        ul > a{
            color: ${({theme})=> theme.textColorBase};
        }
    }

    .channelMenuScroll::-webkit-scrollbar{
        display: none;
    }
    ul{
        color: ${({theme}) => theme.textColorBase};
        margin: 2%;
        font-weight: bold;
        font-size: 1em;
    }

    ul:hover{
        color: #a9a9a9;
    }

    a:link{
        color: black;
      }
      a:visited{
        color: black;
      }

      svg{
    width: 15%;
    margin: 5px;
    fill: ${({theme}) => theme.textColorBase};
}

    @media (max-width: 600px) {
        width: 150%;
        *{
            margin-top: 5%;
        }
        img{
            width: 60px;
            height: 60px;
        }
        .user-info > div{
            width: 100%;
            padding: 2%;
            font-size: small;
            margin-left: 3%;
        }
        .menuVideos{
            width: 80%;
            margin-left: 10%;
            margin-right: 10%;
        }
    }
    

    @media (min-width: 1100px) {
        *{
            margin-top: 2%;
        }
        img{
            width: 100px;
            height: 100px;
        }
        .user-info > div{
            width: 100%;
            padding: 2%;
            font-size: medium;
            margin-left: -1%;
        }
    }
    @media (max-width: 400px) {
        width: 250%;
        }
`;