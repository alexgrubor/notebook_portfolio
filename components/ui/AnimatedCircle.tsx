import Image from 'next/image'
import Circle from '../../public/circle.svg'
const AnimatedCircle = () => {
  return (
    <div className="fixed bottom-3 left-3 hidden lg:block">
    <Image src={Circle} alt='circle' className='w-[10rem] animate-spin ' style={{animationDuration: '5s'}}/>
    </div>
  )
}
export default AnimatedCircle