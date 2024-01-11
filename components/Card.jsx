import pencil_icon from "../public/images/pencil_icon.png"
import trash_icon from "../public/images/trash_icon.png"
import heart_icon from "../public/images/heart_icon.png"
import comment_icon from "../public/images/comment_icon.png"

const Card = (props) => {
    return (
        <div className="ss-card">
            <div className="ss-row-song-details">
                <h2 className="ss-song-title">{props.song_title}</h2>
                <div className="ss-edit-trash-icons">
                    <img src={pencil_icon} />
                    <img src={trash_icon} />
                </div>
            </div>
            {/* <div className="ss-row-album-title">
                <p>{props.album_title}</p>
            </div>
            <div className="ss-row-blank">
            </div>
            <div className="ss-row-like-comment-text">
                <p>{props.number_of_likes}</p>
                <p>{props.number_of_comments}</p>
            </div>
            <div className="ss-row-like-comment-icons">
                <img src={heart_icon} />
                <img src={comment_icon} />
            </div> */}
        </div>
    )
}

export default Card; 