import styled from "styled-components";

export const HeaderStyle = styled.header`
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
        width: 90%;
        display: flex;
        margin-left: 5%;
        margin-right: 5%;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
    }

    .channelMenuScroll::-webkit-scrollbar{
        display: none;
    }
    ul{
        margin: 3%;
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
}

    @media (max-width: 600px) {
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
`;