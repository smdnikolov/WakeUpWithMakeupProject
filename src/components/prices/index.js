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
                {priceList.map((obj, index) =>

                    <>
                        {index % 2 === 0
                            ? <li className='table-row' id={obj.id} key={obj.id}>
                                <div className="col" data-label="Услуга">{obj.service}</div>
                                <div className="col-4" data-label="Цена">{obj.price}</div>
                            </li>
                            : <li className='odd-row table-row' id={obj.id} key={obj.id}>
                                <div className="col" data-label="Услуга">{obj.service}</div>
                                <div className="col-4" data-label="Цена">{obj.price}</div>
                            </li>}
                    </>
                )}


            </ul>
        </div>
    );
    return (
        <div>
            <h1 className="page-header">Цени</h1>

            <Table priceList={list} />

        </div>
    )
}

export default Prices