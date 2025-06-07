import bird from './Images For Pics/bird.svg'
import cat from './Images For Pics/cat.svg'
import cow from './Images For Pics/cow.svg'
import dog from './Images For Pics/dog.svg'
import gator from './Images For Pics/gator.svg'
import horse from './Images For Pics/horse.svg'
import heart from './Images For Pics/heart.svg'
import { useState } from 'react'


const obj = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse,
}

const AnimalList = ({ animal }) => {

    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 5)
    }

    return (
        <div className='border' onClick={handleClick}>
            <div>
                <img src={obj[animal]} alt='Random Pics' />
                <img src={heart} alt='Nothing' style={{ width: 10 + count + 'px' }} className='heart' />
            </div>
        </div>
    )
}

export default AnimalList;