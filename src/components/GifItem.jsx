export const GifItem = ({ title, url, width, height }) => {
    return (
        <>
            <div className="card">
                <img src={url} height={height}
                    width={width}></img>
                <h2>{title}</h2>
            </div>
        </>
    );
}