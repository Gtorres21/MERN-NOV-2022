import React, { useState } from 'react'

const Tabs = (props) => {

    const [selectTab, setSelectTab] = useState(0);

    const select = (val) => {
        setSelectTab(val)
    }

    return (
        <div>
            {
            props.tabs.map((tab, idx) =>{
                return <button key={idx} onClick={() => select(idx)}> {tab.title}</button>
            }
            
            )}
            <p>{props.tabs[selectTab].content}</p>
        </div>
    )
}

export default Tabs