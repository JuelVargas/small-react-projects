import React from 'react'
import Tabs from './tabs'
import './tabs.css'

const RandomComponent = () => {
    return <h1>Some random content</h1>
}

const TabTest = () => {

    const tabs = [ 
        {
            label: 'Tab 1',
            content: <div>Thi is content for Tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div>Thi is content for Tab 2</div>
        },
        {
            label: 'Tab 3',
            content: <RandomComponent />
        }
    ]


    function handleChange (currentTabIndex) {
        console.log(currentTabIndex)
    }

  return <Tabs tabsContent={tabs} onChange={handleChange}/>
}

export default TabTest