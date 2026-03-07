import React from 'react'

const Container = ({children, className=""}) => {
  return (
    <div className={`w-full  mx-auto px-5 max-w-[1400px] sm:px-6 lg:px-[75px] ${className}`}>
        {children}
    </div>
  )
}

export default Container