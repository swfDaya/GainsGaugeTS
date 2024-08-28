import React, { useState } from 'react'
import './WorkoutTracker.css'

const WorkoutTracker = () => {

    const [ selectedSet, setSelectedSet ] = useState(2)

    return (
        <div
        className = 'main__page__base'
        >
            <div
            className = 'main__page__left'
            >
            
            </div>
            <div
            className = 'main__page__center'
            >
                <div
                className = 'main__page__center__header'
                >
                
                </div>
                <div
                className = 'main__page__center__container'
                >
                    <div
                    className = 'main__page__center__top'
                    >
                        <div>Minimize</div>
                        <div>Finish Routine</div>
                    </div>
                    <div
                    className = 'main__page__center__summary'
                    >
                        {/* <div className='main__page__center__summary__each to__center' style = {{ fontWeight: "bold", marginBottom: "5px", marginRight: "5px" }} >12 Aug 2024</div>
                        <div className='main__page__center__summary__each to__center' style = {{ marginBottom: "5px", marginLeft: "5px"  }} ><span style={{ fontWeight: "bold" }} >Workouts : </span> &nbsp;06</div>
                        <div className='main__page__center__summary__each to__center' style = {{ marginTop: "5px", marginRight: "5px"  }} ><span style={{ fontWeight: "bold" }} >Volume : </span> &nbsp;240 Kg</div>
                        <div className='main__page__center__summary__each to__center' style = {{ marginTop: "5px", marginLeft: "5px"  }} ><span style={{ fontWeight: "bold" }} >Sets : </span> &nbsp;24</div> */}
                        <div className='main__page__center__summary__each to__center' style = {{ fontWeight: "bold" }} >12 Aug 2024</div>
                        <div className='main__page__center__summary__each to__center'><span style={{ fontWeight: "bold" }} >Workouts : </span> &nbsp;06</div>
                        <div className='main__page__center__summary__each to__center'><span style={{ fontWeight: "bold" }} >Volume : </span> &nbsp;240 Kg</div>
                        <div className='main__page__center__summary__each to__center'><span style={{ fontWeight: "bold" }} >Sets : </span> &nbsp;24</div>
                    </div>
                    <div
                    className = 'main__page__center__timer'
                    >
                        <div
                        className = 'main__page__center__timer__each to__center'
                        >
                            01 <span>&nbsp;hr</span>
                        </div>
                        <div
                        className = 'main__page__center__timer__each to__center'
                        >
                            23 <span>&nbsp;min</span>
                        </div>
                        <div
                        className = 'main__page__center__timer__each to__center'
                        >
                            47 <span>&nbsp;sec</span>
                        </div>
                    </div>
                    <div
                    className = 'main__page__center__timer__buttons'
                    >
                        <div
                        className = 'main__page__center__timer__buttons__pause to__center'
                        >
                            Pause
                        </div>
                        <div
                        className = 'main__page__center__timer__buttons__rest to__center'
                        >
                            Start REST ?
                        </div>
                        <div
                        className = 'main__page__center__timer__buttons__reset to__center'
                        >
                            Stop
                        </div>
                    </div>
                    <div
                    className = 'main__page__center__ex__cards'
                    >

                    </div>
                    <div
                    className = 'main__page__center__ex__details'
                    >
                        <div
                        className = 'main__page__center__ex__details__top'
                        >
                            <div
                            className = 'main__page__center__ex__details__top__check to__center'
                            >
                                
                            </div>
                            <div
                            className = 'main__page__center__ex__details__top__set to__center'
                            >
                                Set
                            </div>
                            <div
                            className = 'main__page__center__ex__details__top__reps to__center'
                            >
                                Reps
                            </div>
                            <div
                            className = 'main__page__center__ex__details__top__weight to__center'
                            >
                                Weight
                            </div>
                        </div>
                        <div
                        className = 'main__page__center__ex__details__middle'
                        >
                            {
                                Array.from({length: 4}, (item, index) => index).map(
                                    (item, index) => {
                                        return(
                                            <div
                                            className = {`main__page__center__ex__details__middle__each__content${index === selectedSet ? "__select" : "__unselect"}`}
                                            onClick = {() => {setSelectedSet(index)}}
                                            >
                                                <div
                                                className = 'main__page__center__ex__details__top__check to__center'
                                                >
                                                    <div
                                                    className = 'main__page__center__ex__details__top__checkbox'
                                                    >

                                                    </div>
                                                </div>
                                                <div
                                                className = 'main__page__center__ex__details__top__set to__center'
                                                >
                                                    {index === 0 ? "W" : index}
                                                </div>
                                                <div
                                                className = 'main__page__center__ex__details__top__reps to__center'
                                                >
                                                    {Math.ceil(Math.random() * 10)}
                                                </div>
                                                <div
                                                className = 'main__page__center__ex__details__top__weight to__center'
                                                >
                                                    {Math.ceil(Math.random() * 20)}
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                        <div
                        className = 'main__page__center__ex__details__bottom to__center'
                        >
                            + Add Set
                        </div>
                    </div>
                    <div
                    className = 'main__page__center__submit__buttons'
                    >
                        <div
                        className = 'main__page__center__submit__buttons__each to__center'
                        >
                            Reset
                        </div>
                        <div
                        className = 'main__page__center__submit__buttons__each to__center'
                        >
                            Submit
                        </div>
                    </div>
                </div>
            </div>
            <div
            className = 'main__page__right'
            >
            
            </div>
        </div>
    )
}

export default WorkoutTracker
