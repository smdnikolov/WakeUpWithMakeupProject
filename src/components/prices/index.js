import React from 'react'
import priceList from '../../price-list'

const Prices = () => {
    const asd = [...priceList]
    const Test = ({ priceList }) => (
        <div>
            {priceList.map((obj, index) => (
                <div key={obj.service}>
                    <div>
                        {`${obj.service} - ${obj.price} with index ${index}`}
                    </div>
                </div>
            ))}
        </div>
    );
    return (
        <div>
            <h1>Prices</h1>
            <div className='container'>
                <Test priceList={asd} />
            </div>
        </div>
    )
}

export default Prices