import React from 'react'

const Container = ({children, className=""}) => {
  return (
    <div className={`w-full  mx-auto px-5 max-w-350 sm:px-6 lg:px-18.75 ${className}`}>
        {children}
    </div>
  )
}

export default Container