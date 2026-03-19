import React from 'react'

const BannerAds = () => {
    const images = [
        {src: "https://api.spicezgold.com/download/file_1734525879105_banner-7.jpg"},
        {src: "https://api.spicezgold.com/download/file_1734525868575_banner-9.jpg"},
        {src: "https://api.spicezgold.com/download/file_1734525855497_banner-5.jpg"},
    ]
  return (
    <div>
        {images.map((img) => (
            <div key={img.src}>
                <img src={img.src} alt="banner image" />
            </div>
        ))}
    </div>
  )
}

export default BannerAds