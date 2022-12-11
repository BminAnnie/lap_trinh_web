import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
const Test = () => {
    const [url, setUrl] = useState('');
    useEffect(() => {
        setUrl('https://www.youtube.com/watch?v=qB-33_qPXg0&feature=youtu.be');
    }, []);
    return (
        <div className="w-[50%] rounded-md">
            {url ? <ReactPlayer url={url} controls={true} className="rounded-lg"/> : <></>}
        </div>
    );
};

export default Test;
