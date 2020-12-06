import React from 'react'
import priceList from '../../price-list'
import './styles.scss'

const Prices = () => {
    const list = [...priceList]
    const Table = ({ priceList }) => (
        <div className="container">
            <ul className="responsive-table">
                <li className="table-header">
                    <div className="col col-1">Услуга</div>
                    <div className="col col-4">Цена</div>
                </li>
                {priceList.map(obj => (
                    <li className='table-row' id={obj.id} key={obj.id}>
                        <div className="col col-1 col-2 col-3" data-label="Услуга">{obj.service}</div>
                        <div className="col col-4" data-label="Цена">{obj.price}</div>
                    </li>
                ))}


            </ul>
        </div>
    );
    return (
        <div>
            <h1>Prices</h1>
            <div className='container'>
                <Table priceList={list} />
            </div>
        </div>
    )
}

export default Prices