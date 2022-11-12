import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset.js";
import { StyledTimeline } from "../src/components/Timeline.js";
import { HeaderStyle } from "../src/components/Header.js";
import { StyledBanner } from "../src/components/Banner.js";
import Menu from "../src/components/Menu.js";

function home() {
    return (
        <>
            <CSSReset />
            <div>
                <Menu />
                <Banner />
                <Header />
                <Timeline playlists={config.playlists} />
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
                            <a src={"www.github.com/" + config.github}>
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
            <div className="menuVideos scrolls">
                <ul><a href="#">INÍCIO</a></ul>
                <ul><a href="#">VÍDEOS</a></ul>
                <ul><a href="#">SHORTS</a></ul>
                <ul><a href="#">AO VIVO</a></ul>
                <ul><a href="#">PLAYLISTS</a></ul>
                <ul><a href="#">COMUNIDADE</a></ul>
                <ul><a href="#">CANAIS</a></ul>
                <ul><a href="#">SOBRE</a></ul>
                <ul><a href="#">LUPA</a></ul>
            </div>
            {/* user info */}
        </HeaderStyle>
    );
}

function Timeline(props) {
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
                        <div className="scrolls">
                            {/* video */}
                            {videos.map((video) => {
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