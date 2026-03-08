import React, { useState } from 'react'
import Container from './common/Container'

const FeaturedCategories = () => {
    const [featuredCategories, setFeaturedCategories] = useState([
        {name: "Fashion", bgColor: "#ffffff", image: "https://api.spicezgold.com/download/file_1734525204708_fash.png"},
        {name: "Electronics", bgColor: "#feefea", image: "https://api.spicezgold.com/download/file_1734525218436_ele.png"},
        {name: "Bags", bgColor: "#fdf0ff", image: "https://api.spicezgold.com/download/file_1734525231018_bag.png"},
        {name: "FootWear", bgColor: "#def3ff", image: "https://api.spicezgold.com/download/file_1734525239704_foot.png"},
        {name: "Groceries", bgColor: "#ffe8f8", image: "https://api.spicezgold.com/download/file_1734525248057_gro.png"},
        {name: "Beauty", bgColor: "#e3fffa", image: "https://api.spicezgold.com/download/file_1734525255799_beauty.png"},
        {name: "Wellness", bgColor: "#fff3ff", image: "https://api.spicezgold.com/download/file_1734525275367_well.png"},
        {name: "Jewellery", bgColor: "#deffd9", image: "https://api.spicezgold.com/download/file_1734525286186_jw.png"},
        {name: "Clothing", bgColor: "#ffffff", image: "https://api.spicezgold.com/download/file_1770891929053_7417781.png"},
    ])
  return (
    <>
        <Container>
            <h3 className='mt-5 mb-3 font-semibold'>FEATURED CATEGORIES</h3>
            <div className='flex justify-around gap-2 items-center'>
                {featuredCategories.map( (c) => (
                    <div key={c.name} className='flex flex-col items-center gap-2'>
                        <div className={`bg-[${c.bgColor}] border-2 px-5 py-5 border-gray-200 rounded-full`}>
                            <img alt={c.name} src={c.image} className='w-17.75 h-17.75 max-w-17.75 max-h-17.75'/>
                        </div>
                        <h6>{c.name}</h6>
                    </div>
                ))}
            </div>
        </Container>

    </>
  )
}

export default FeaturedCategories