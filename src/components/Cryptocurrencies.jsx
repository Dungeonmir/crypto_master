import React, {useState} from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import {Card, Row, Col, Input} from 'antd';

import {useGetCoinsQuery} from '../services/cryptoApi'
import { isGenericTypeAnnotation } from '@babel/types';
import { current } from '@reduxjs/toolkit';


const Cryptocurrencies = (countValue) =>{
    
    const {data: cryptoList, isFetching} = useGetCoinsQuery();
    const count = countValue.count;
    if (!isFetching) {
        let cryptos = Array.from(cryptoList);
        if (countValue!=undefined) {
            cryptos = cryptos.slice(0, count);
        }
       return(
           <>
           <Row gutter={[32,32]} className="crypto-card-container">
               {
                  cryptos.map((currency)=>(
                      <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                          <Link to={`/crypto/${currency.id}`}/>
                          <Card
                          title={`${currency.rank}. ${currency.name}`} hoverable>
                              <p>{currency.symbol}</p>
                          </Card>
                      </Col>
                  ))
               }

           </Row>
           </>
       )}
    return(
        <div>
            Cryptocurrencies
        </div>
        
    )
    
}

export default Cryptocurrencies
