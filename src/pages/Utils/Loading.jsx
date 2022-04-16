import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Loading = () => {
    return <div className='p-10 flex justify-center flex-wrap'>
        {[1, 2, 3, 4 , 5, 6 , 7 ,8, 9 ,10 ,11 , 12 ,13 ,14, 15,1, 2, 3, 4 , 5, 6 , 7 ,8, 9 ,10 ,11 , 12 ,13 ,14, 15]
        .map(item=> <div className='basis-1/4'><Skeleton count={5}/></div>)}
    </div>
 }

export default Loading 