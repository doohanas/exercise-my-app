const Gif = ({url, title}) => {
    return (
        <div>
             <img src={url} alt={title}></img>
        </div>
    )
};

export default Gif;