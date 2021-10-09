import React from 'react';
import millify from 'millify';
import {Typography, Row, Col, Statistic} from 'antd';
import {Link} from 'react-router-dom'
import { useGetCoinsQuery, useGetGlobalStatsQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';

const {Title} = Typography;

const Homepage = () =>{
    const {data, isFetching} = useGetGlobalStatsQuery();
    if (isFetching) {
        return 'Please stand by...';
    }
    return(
        <>
        <Title level={2} className="heading">
            Global Crypto Stats
        </Title>
        <Row>
            <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(data?.cryptocurrencies_number)}/></Col>
            <Col span={12}><Statistic title="" value=" "/></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(data?.market_cap_ath_value)}/></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value={millify(data?.volume_24h_ath_value)}/></Col>
            <Col span={12}><Statistic title="Total Market Cap 24h Change" value={data?.market_cap_change_24h + '%'}/></Col>
            <Col span={12}><Statistic title="Total Volume 24h change" value={data?.volume_24h_change_24h  + '%'}/></Col>

            <div className = "home-heading-container">
                <Title level = {2} className = "home-title">Top 10 Ctyptocurrencies</Title>
                <Title level = {3} className = "show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
            </div>
            <Cryptocurrencies count={10}/>
            <div className = "home-heading-container">
                <Title level = {2} className = "home-title">Top CryptoNews</Title>
                <Title level = {3} className = "show-more"><Link to="/news">Show more</Link></Title>
            </div>
            <News simplified/>
        </Row>
        </>
    )
}

export default Homepage
