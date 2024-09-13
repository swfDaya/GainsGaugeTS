import './TFD_ExScroller.css'
import TFD_ScrollerReps from './TFD_ScrollerReps'
import TFD_ScrollerWeight from './TFD_ScrollerWeight'

const TFD_ExScroller = () => {
    return (
        <div
        className = 'home__body__center__ex__scroller__base'
        >
            <div
            className = 'home__body__center__ex__scroller__base__reps to__center'
            >
                reps
            </div>
            <div
            className = 'home__body__center__ex__scroller__base__weight to__center'
            >
                weight
            </div>
            <div
            className = 'home__body__center__ex__scroller__base__reps__control to__center'
            >
                <TFD_ScrollerReps />
            </div>
            <div
            className = 'home__body__center__ex__scroller__base__weight__control to__center'
            >
                <TFD_ScrollerWeight />
            </div>
            <div
            className = 'home__body__center__ex__scroller__base__submit to__center'
            >
                Submit ?
            </div>
        </div>
    )
}

export default TFD_ExScroller
