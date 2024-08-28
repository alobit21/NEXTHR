// src/app/AppBgImg.js

import Image from "next/image";

const blurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."; // Replace with your actual Data URL

export default function AppBgImg() {
    return (
        <div className="top-10">
        <Image
            src={'/assets/phone.PNG'}
            placeholder="blur"
            blurDataURL={blurDataURL}
            fill
            sizes=""
            style={{
                objectFit: 'cover',
                zIndex: -1,
                position: 'absolute',
                top: 0,
                left: 0,
            }}
        />
        </div>
    );
}
