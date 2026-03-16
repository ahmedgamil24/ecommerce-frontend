import Container from './common/Container'
import { CiMail } from 'react-icons/ci'

const NewsLetter = () => {
  return (
    <div className='bg-primary flex justify-between items-center py-2 mt-4 mb-4'>
        <Container>
        <div className='flex flex-col gap-3 px-7'>
            <p className='text-gray-100 font-semibold text-l'>$20 discount for your first order</p>
            <h3 className='text-gray-50 font-bold text-4xl'>Join our newsletter and get...</h3>
            <p className='text-gray-300 text-sm'>Join our email subscription now to get updates on <br />
            promotions and coupons.</p>
            <form action="" className='mt-2 bg-gray-100 rounded-md px-2 py-2 max-w-122 max-h-15 flex justify-between gap-1 items-center'>
                <CiMail className='text-3xl '/>
                <input type="text" className='w-full px-1.5 outline-0 py-1.5 ' placeholder='Your Email Address'/>
                <button className='btn rounded bg-primary text-gray-100'>Subscribe</button>
            </form>
        </div>
        </Container>

        <div>
            <img className='max-w-125' src="https://fullstack-ecommerce.netlify.app/static/media/newsletter.5931358dd220a40019fc.png" alt="" />
        </div>
    </div>
  )
}

export default NewsLetter