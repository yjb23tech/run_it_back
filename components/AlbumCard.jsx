import album_icon from "../public/images/album_icon.png"
import artist_icon from "../public/images/artist_icon.png"
import genre_icon from "../public/images/genre_icon.png"

const AlbumCard = (props) => {
    return (
        <div className="album-card">
            <img src={`images/${props.album_cover_art}`} />
            <div className="album-card-contents">
                <h1>{props.song_title}</h1>
                <div className="info-group">
                    <img src={album_icon} />
                    <p>{props.album_title}</p>
                </div>
                <div className="info-group">
                    <img src={artist_icon} />
                    <p>{props.artist_title}</p>
                </div>
                <div className="info-group">
                    <img src={genre_icon} />
                    <p>{props.genre_title}</p>
                </div>
            </div>
        </div>
    )
}

export default AlbumCard; 