import React from 'react'
import before from '../../utils/before.jpg'
import after from '../../utils/after.jpg'
import { defineCustomElements, applyPolyfills, } from 'img-comparison-slider/loader';

applyPolyfills().then(() => defineCustomElements(window));

const Home = () => {

    return (
        <div >
            <img-comparison-slider>
                <img className='img' slot="before" src={before} alt='' />
                <img className='img' slot="after" src={after} alt='' />
            </img-comparison-slider>
        </div>
    )
}

export default Home