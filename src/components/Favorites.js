import styled from "styled-components";

export const StyledFavorites = styled.div`
    flex: 1;
    width: 100%;
    padding: 16px;
    overflow: hidden;

    h2 {
        font-size: medium;
        margin-bottom: 16px;
        text-transform: capitalize;
    } 

    .video-title{
        font-weight: bold;
    }

    img {
        aspect-ratio: 16/9;
        font-weight: 500;
        object-fit: cover;
        width: 100%;
        max-width: 210px;
        height: auto;
    }

    .avatar-channel{
        margin-right: 5%;
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

     section {
        width: 100%;
        padding: 0;
        overflow: hidden;
        padding: 16px;
        div {
        width: calc(100vw - 16px * 4);
        display: grid;
        grid-gap: 16px;
        grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
        grid-auto-flow: column;
        grid-auto-columns: minmax(200px,1fr);
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
            a {
                scroll-snap-align: start;
                span {
                text-decoration: none;
                align-items: center;
                width: 110%;
                padding-top: 8px;
                display: flex;
                padding-right: 24px;
                margin-bottom: -3%;
                color: ${({ theme }) => theme.textColorBase || "#222222"};
                }
            }
            a:link{
                color: black;
            }
            a:visited{
                color: black;
            }
        }
    .favoriteScroll{
        height: 200px;
        width: 110vw;
        margin-left: 6%;
        margin-right: 6%;
    }
    .favoriteScroll::-webkit-scrollbar {
        display: none;
    }
  
  }
`;