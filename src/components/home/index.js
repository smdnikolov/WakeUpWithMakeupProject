import React from 'react'




const Home = () => {

    const before = 'https://picsum.photos/id/237/536/354'
    const after = 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'


    return (
        <div>
            <div class="ba-slider">
                <img src="http://egegorgulu.com/assets/img/beforeafter/after.jpg" alt="" />
                <div class="resize">
                    <img src="http://egegorgulu.com/assets/img/beforeafter/before.jpg" alt="" />
                </div>
                <span class="handle"></span>
            </div>
        </div>
    )
}

export default Home