import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './scroll.css'

const ScrollIndicator = ({ url }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0)

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();


            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false)
            }

        } catch (error) {
            console.log(error)
            setErrorMessage(error.message)
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url])

    function hadleScrollPercentage() {


        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100)

    }

    useEffect(() => {
        window.addEventListener('scroll', hadleScrollPercentage)

        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, [])

    console.log(scrollPercentage)

    if(errorMessage) {
        return <div>An erros has occurred</div>
    }

    if(loading) {
        return <div>loading data! please wait</div>
    }

    return (
        <div>
            <div className='top-container'>
                <h1>Custom Scroll Indicator</h1>
                <div className='scroll-progress-tracking-container'>
                    <div className='current-progres-bar' style={{ width: `${scrollPercentage}%` }}></div>
                </div>
            </div>

            <div className='data-container'>
                {
                    data && data.length > 0 ?
                        data.map(item => <p key={item.id}>{item.title}</p>)
                        : null
                }
            </div>
        </div>
    )
}

export default ScrollIndicator