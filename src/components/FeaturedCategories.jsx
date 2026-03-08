import React, { useState } from 'react'
import Container from './common/Container'

const FeaturedCategories = () => {
    const [featuredCategories, setFeaturedCategories] = useState([
        {name: "Fashion", image: "https://api.spicezgold.com/download/file_1734525204708_fash.png"},
        {name: "Electronics", image: "https://api.spicezgold.com/download/file_1734525218436_ele.png"},
        {name: "Bags", image: "https://api.spicezgold.com/download/file_1734525231018_bag.png"},
        {name: "FootWear", image: "https://api.spicezgold.com/download/file_1734525239704_foot.png"},
        {name: "Groceries", image: "https://api.spicezgold.com/download/file_1734525248057_gro.png"},
        {name: "Beauty", image: "https://api.spicezgold.com/download/file_1734525255799_beauty.png"},
        {name: "Wellness", image: "https://api.spicezgold.com/download/file_1734525275367_well.png"},
        {name: "Jewellery", image: "https://api.spicezgold.com/download/file_1734525286186_jw.png"},
        {name: "Clothing", image: "https://api.spicezgold.com/download/file_1770891929053_7417781.png"},
    ])
  return (
    <>
        <Container>
            <div>Featured Categories</div>
            <div className='flex justify-around gap-2 items-center'>
                {featuredCategories.map( (c) => (
                    <div key={c.name} >
                        <div className=' border-2 px-5 py-5 border-gray-200 rounded-full'>
                            <img src={c.image} className='w-17.75 h-17.75 max-w-17.75 max-h-17.75'/>
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