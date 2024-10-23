import React from 'react'
import cssmoodule from './loader.module.css'
import LoaderImg from '../assets/25.gif'
import ReactDOM from 'react-dom'

const Loader = () => {
    return ReactDOM.createPortal (
        <div className={cssmoodule.wrapper}>
            <div className={cssmoodule.loader}>
                <img src={LoaderImg} />
            </div>
        </div>,document.getElementById("loader")
    )
}

export default Loader