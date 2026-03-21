import React from 'react'
import Container from './common/Container'

const BannerAds = () => {
    const images = [
        {src: "https://api.spicezgold.com/download/file_1734525879105_banner-7.jpg"},
        {src: "https://api.spicezgold.com/download/file_1734525868575_banner-9.jpg"},
        {src: "https://api.spicezgold.com/download/file_1734525855497_banner-5.jpg"},
    ]
  return (
    <Container>
    <div className='flex justify-between items-center gap-3 '>
        {images.map((img) => (
            <div key={img.src}>
                <img className='max-h-45.75 rounded-2xl' src={img.src} alt="banner image" />
            </div>
        ))}
    </div>
    </Container>
  )
}

export default BannerAds