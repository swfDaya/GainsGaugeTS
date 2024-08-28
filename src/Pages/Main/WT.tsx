import React, { useEffect, useRef, useState } from 'react'
import './WT.css'

const WT = () => {

    const repsListRef = useRef([])
    const weightListRef = useRef([])

    const currentRep = 17
    const currentWeight = 22

    const [currentSet, setCurrentSet] = useState(1)

    useEffect(
        () => {
            repsListRef.current[currentRep].scrollIntoView()
            weightListRef.current[currentWeight].scrollIntoView()
        }, []
    )

    const onSetSelect = (index) => {
        setCurrentSet(index)
    }

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
                    className = 'main__page__center__ex__name to__center'
                    >
                        2. Barbell Bicep Curl
                    </div>
                    <div
                    className = 'main__page__center__ex__details'
                    >
                        <div
                        className = 'main__page__center__ex__details__each__unselect'
                        style={{ fontWeight: "bold" }}
                        >
                            <div className = 'to__center' >Set</div>
                            <div className = 'to__center' >Reps</div>
                            <div className = 'to__center' >Weight</div>
                        </div>
                        {
                            Array.from({length: 4}, (item, index) => index).map(
                                (item, index) => {
                                    return(
                                        <div
                                        className = {`main__page__center__ex__details__each${index === currentSet ? "__select" : "__unselect"}`}
                                        onClick = {() => onSetSelect(index)}
                                        >
                                            <div
                                            className = 'main__page__center__ex__details__each__set to__center'
                                            >
                                                {index === 0 ? "w" : index}
                                            </div>
                                            <div
                                            className = 'main__page__center__ex__details__each__rep to__center'
                                            >
                                                {Math.ceil(Math.random()*10)}
                                            </div>
                                            <div
                                            className = 'main__page__center__ex__details__each__weight to__center'
                                            >
                                                {Math.ceil(Math.random()*25)}
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                    <div
                    className = 'main__page__center__control to__center'
                    >
                        <div
                        className = 'main__page__center__control__container'
                        >
                            <div
                            className = 'main__page__center__control__reps to__center'
                            >
                                reps
                            </div>
                            <div
                            className = 'main__page__center__control__reps__scroll'
                            >
                                <div
                                className = 'main__page__center__control__reps__scroll__back'
                                >
                                    {
                                        Array.from({length: 52}, (item, index) => index).map(
                                            (item, index) => {
                                                return(
                                                    <div
                                                    ref = {(el) => repsListRef.current[index] = el}
                                                    className = 'main__page__center__control__reps__scroll__back__each to__center'
                                                    style={{
                                                        visibility: index === 0 || index === 51 ? "hidden" : "visible"
                                                    }}
                                                    >
                                                        {index}
                                                    </div>
                                                )
                                            }
                                        )
                                    }
                                </div>
                            </div>
                            <div
                            className = 'main__page__center__control__separator to__center'
                            >
                                :
                            </div>
                            <div
                            className = 'main__page__center__control__weights__scroll'
                            >
                                <div
                                className = 'main__page__center__control__weights__scroll__back'
                                >
                                    {
                                        Array.from({length: 202}, (item, index) => index).map(
                                            (item, index) => {
                                                return(
                                                    <div
                                                    ref = {(el) => weightListRef.current[index] = el}
                                                    className = 'main__page__center__control__weights__scroll__back__each to__center'
                                                    style={{
                                                        visibility: index === 0 || index === 201 ? "hidden" : "visible"
                                                    }}
                                                    >
                                                        {index * 0.25}
                                                    </div>
                                                )
                                            }
                                        )
                                    }
                                </div>
                            </div>
                            <div
                            className = 'main__page__center__control__weights to__center'
                            >
                                kgs
                            </div>
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

export default WT
