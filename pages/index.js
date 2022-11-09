import config from "../config.json";
import styled from "styled-components";

function home() {
    const styleMenu = { backgroundColor: "blue", color: "white" }

    return (
        <div style={styleMenu}>
            <Menu />
            <Header />
            <Timeline playlists={config.playlists} />
        </div>
    );
}

export default home;

// make the division of pieces from project

function Menu() {
    return (
        <div>
            Menu
        </div>
    );
}

const HeaderStyle = styled.div`
    *{
        font-family: Helvetica;
        margin: 0%;
    }
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header() {
    
    return (
        <HeaderStyle>
            <div className="user-info">
                <img src={config.avatar} />
                <div>
                    <h2>
                        {config.name} - {config.age} Anos
                    </h2>
                    <p>
                        {config.course}
                    </p>
                </div>
            </div>
        </HeaderStyle>
    );
}

function Timeline(props) {
    // console.log("dentro do componente: ", props.playlists)
    const playlistName = Object.keys(props.playlists)
    return (
        <div>
            {playlistName.map(function (playlistName) {
                const videos = props.playlists[playlistName];
                console.log(playlistName)
                console.log(videos)
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
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
                        </div>
                    </section>
                )
            })}
        </div>
    );
}

