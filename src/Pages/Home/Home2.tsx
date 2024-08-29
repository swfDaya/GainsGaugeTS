import RestTimerModal from './RestTimerModal'

import left from './assets/chevrons-left.svg'
import right from './assets/chevrons-right.svg'
import './Home2.css'

const Home2 = () => {
  
    return (
        <div
        className = 'home__base'
        >
            <div
            className = 'home__body__left'
            >
            </div>
            <div
            className = 'home__body__center'
            >
                <div
                className = 'home__body__center__clock__base'
                >
                    <div
                    className = 'home__body__center__clock'
                    >
                        <div
                        className = 'home__body__center__clock__hour to__center'
                        >
                            01
                        </div>
                        <div
                        className = 'home__body__center__clock__separator to__center'
                        >
                            :
                        </div>
                        <div
                        className = 'home__body__center__clock__min to__center'
                        >
                            23
                        </div>
                        <div
                        className = 'home__body__center__clock__separator to__center'
                        >
                            :
                        </div>
                        <div
                        className = 'home__body__center__clock__sec to__center'
                        >
                            45
                        </div>
                    </div>
                    <div
                    className = 'home__body__center__clock__buttons'
                    >
                        <div
                        className = 'home__body__center__clock__buttons__pause to__center'
                        >
                            Pause
                        </div>
                        <div
                        className = 'home__body__center__clock__buttons__reset to__center'
                        >
                            Reset
                        </div>
                    </div>
                </div>
                <div
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
                        3. Barbell Bicep Curl Dumbell
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
                <div
                className = 'home__body__center__ex__details'
                >
                    <div
                    className = 'home__body__center__ex__details__top'
                    >
                        <div
                        className = 'home__body__center__ex__details__top__left'
                        >
                            <div>set</div>
                            <div>weight</div>
                            <div>reps</div>
                        </div>
                        <div
                        className = 'home__body__center__ex__details__top__right'
                        >
                            <div
                            className = 'home__body__center__ex__details__top__right__details'
                            >
                                {
                                    Array.from({length: 4}, (_, index) => index).map(
                                        (_, index) => {
                                            return(
                                                <div
                                                key = {index}
                                                className = 'home__body__center__ex__details__top__right__details__each'
                                                >
                                                    <div>{index === 0 ? "w" : index}</div>
                                                    <div>{Math.floor(Math.random() * 7 + 7)}</div>
                                                    <div>{Math.floor(Math.random() * 20 + 12)}</div>
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div
                    className = 'home__body__center__ex__details__bottom to__center'
                    >
                        + Add Set
                    </div>
                </div>
                <div
                className = 'home__body__center__rest__base to__center'
                >
                    Start Rest ?
                </div>
                <div
                className = 'home__body__center__finish__base to__center'
                >
                    Finish Workout !
                </div>
                <RestTimerModal 
                isRestTimerModalShow = {false}
                />
            </div>
            <div
            className = 'home__body__right'
            >
            </div>
        </div>
    )
}

export default Home2
