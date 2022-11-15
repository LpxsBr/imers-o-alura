import react from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import { StyledTimeline } from "../src/components/Timeline";
import { HeaderStyle } from "../src/components/Header";
import { StyledBanner } from "../src/components/Banner";
import { StyledFavorites } from "../src/components/Favorites"
import Menu from "../src/components/Menu";

function home() {

    const [valor, setValor] = react.useState("");
    return (
        <>
            <CSSReset />
            <div>
                <Menu valor={valor} setValor={setValor} />
                <Banner />
                <Header />
                <View />
                <Timeline search={valor} playlists={config.playlists} />
                <Favorites favorites={config.favorites} />
            </div>
        </>

    );
}
export default home;

function Banner() {
    return (
        <StyledBanner>
            <div className="banner"
                style={{
                    background: "url(" + config.banner + ")",
                    backgroundPositionX: "50%",
                    backgroundPositionY: "30%"
                }}>
                <div className="svg">
                    <div className="icons">
                        <a href={"https://www.github.com/" + config.github} target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">{/*<!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </StyledBanner>
    );
}

function Header() {
    return (
        <HeaderStyle>
            {/* user info */}
            <div className="user-info">
                <img src={config.avatar} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.course}
                    </p>
                </div>
            </div>
            <div className="menuVideos channelMenuScroll">
                <ul><a href="#">INÍCIO</a></ul>
                <ul><a href="#">VÍDEOS</a></ul>
                <ul><a href="#">SHORTS</a></ul>
                <ul><a href="#">AO VIVO</a></ul>
                <ul><a href="#">PLAYLISTS</a></ul>
                <ul><a href="#">COMUNIDADE</a></ul>
                <ul><a href="#">CANAIS</a></ul>
                <ul><a href="#">SOBRE</a></ul>
                <ul><a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/*! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.*/}<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" /></svg></a></ul>
            </div>
            {/* user info */}
        </HeaderStyle>
    );
}

function View() {
    return (
        <div className="viewVideo" style={{ display: "flex", width: "500px", height: "300px", margin: "10px", marginLeft: "100px" }}>
            <iframe width="500px" height="300px" src="https://www.youtube.com/embed/-TDgy8lhq-k?list=PLzehOqhpwpxjs8bfI72dR-wV-7ZGxfuTN" title="O que são testes automatizados ?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

function Timeline({ search, ...props }) {
    // console.log("dentro do componente: ", props.playlists)
    const playlistName = Object.keys(props.playlists)
    return (
        <StyledTimeline>
            {playlistName.map(function (playlistName) {
                const videos = props.playlists[playlistName];
                console.log(playlistName)
                console.log(videos)
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div className="timelineScroll">
                            {/* video */}
                            {videos.filter((video) => {

                                return (video.title.toLowerCase().includes(search.toLowerCase()))
                            }).map((video) => {
                                // testing the title length to format title
                                const video_title = (video.title).length > 35 ? (video.title).substring(0, 35) + "  ..." : video.title;
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            <h2 className="video-title">{video_title}</h2>
                                        </span>
                                        <p className="channel-name">
                                            {video.channel}
                                        </p>
                                        <p className="video-views">
                                            {video.views} mil visualizações * há {video.posted_at} meses
                                        </p>
                                    </a>
                                )
                            })}
                            {/* video */}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    );
}

function Favorites(props) {
    const favoritesName = Object.keys(props.favorites);
    return (
        <StyledFavorites>
            {favoritesName.map(function (favoritesName) {

                const favorites = props.favorites[favoritesName];
                console.log(favoritesName);
                console.log(favorites);
                return (

                    <section>
                        <h2>{favoritesName}</h2>
                        <div className="favoriteScroll">
                            {/* fav */}
                            {favorites.map((fav) => {
                                return (
                                    <a href={fav.url}>
                                        <img className="avatar-channel" src={fav.avatar_channel} />
                                        <span>
                                            <h2 className="channelName">{fav.channel}</h2>
                                        </span>
                                    </a>
                                )
                            })}
                            {/* fav */}
                        </div>
                    </section>)
            })}
        </StyledFavorites>);

}