import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset.js";
import { StyledTimeline } from "../src/components/Timeline.js"
import { HeaderStyle } from "../src/components/Header.js"
import Menu from "../src/components/Menu.js";

function home() {
    return (
        <>
            <CSSReset />
            <div>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
            </div>
        </>

    );
}
export default home;

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
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
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

