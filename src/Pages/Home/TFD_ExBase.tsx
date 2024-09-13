import left from './assets/chevrons-left.svg'
import right from './assets/chevrons-right.svg'
import './TFD_ExBase.css'

const TFD_ExBase = () => {
    return (
        <div
        // className = {`home__body__center__ex__base ${isRestTimerModalShow ? "bg__filter" : ""} `}
        className = 'home__body__center__ex__base'
        >
            <div
            className = 'home__body__center__ex__prev to__center'
            >
                <div
                className = 'home__body__center__ex__prev__button to__center'
                >
                    <img
                    src = {left}
                    />
                </div>
            </div>
            <div
            className = 'home__body__center__ex__name to__center'
            >
                3. Barbell Dumbell Bicep Curl
            </div>
            <div
            className = 'home__body__center__ex__next to__center'
            >
                <div
                className = 'home__body__center__ex__next__button to__center'
                >
                    <img
                    src = {right}
                    />
                </div>
            </div>
        </div>
    )
}

export default TFD_ExBase
