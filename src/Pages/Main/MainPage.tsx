import React, { useEffect, useRef, useState } from 'react'
import './MainPage.css'

import helm from './assets/helm2.png'

const MainPage = () => {

    const repsRef = useRef<HTMLDivElement>(null)
    const repsEachRef = useRef<HTMLDivElement>([])

    const weightsRef = useRef<HTMLDivElement>(null)
    const weightsEachRef = useRef<HTMLDivElement>([])

    const helmRef = useRef<HTMLImageElement>(null)

    const [ repsPos, setRepsPos ] = useState(0)
    const [ weightsPos, setWeightsPos ] = useState(0)

    const [ currentReps, setCurrentReps ] = useState(15)
    const [ currentWeights, setCurrentWeights ] = useState(25.25)

    useEffect(
        () => {
            setTimeout(
                () => {
                    repsEachRef.current[currentReps-1].scrollIntoView()
                }, 1000
            )
            setTimeout(
                () => {
                    weightsEachRef.current[currentWeights*4-1].scrollIntoView()
                }, 2000
            )
        }, []
    )

    const [ centerReps, setCenterReps ] = useState(0)
    const [ centerWeights, setCenterWeights ] = useState(0)

    useEffect(
        () => {
            setCenterReps( Math.ceil(repsPos / (repsRef.current?.scrollHeight / 32)) + 1 )
            helmRef.current.style.transform = `rotate(${repsPos}deg)`  
        }, [repsPos]
    )

    useEffect(
        () => {
            setCenterWeights( Math.ceil(weightsPos / (weightsRef.current?.scrollHeight / 202)) + 1 )
            helmRef.current.style.transform = `rotate(${weightsPos * -1}deg)`
        }, [weightsPos]
    )

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
                className = 'main__page__center__buttons__container'
                >
                    <div
                    className = 'main__page__center__buttons'
                    >
                        <div
                        className = 'main__page__center__button__reset to__center'
                        >
                            Reset
                        </div>
                        <div
                        className = 'main__page__center__button__submit to__center'
                        >
                            Submit
                        </div>
                    </div>
                </div>
                <div
                className = 'main__page__center__scroll__container to__center'
                >
                    <div
                    className = 'main__page__center__scroll__inner__container'
                    >
                        <div
                        className = 'main__page__center__scroll__inner__container__top'
                        >
                            <div
                            className = 'main__page__center__scroll__inner__container__top__left to__center'
                            >
                                reps
                            </div>
                            <div
                            className = 'main__page__center__scroll__inner__container__top__center'
                            >
                                
                            </div>
                            <div
                            className = 'main__page__center__scroll__inner__container__top__right to__center'
                            >
                                weights
                            </div>
                        </div>
                        <div
                        className = 'main__page__center__scroll__inner__container__bottom'
                        >
                            <div
                            className = 'main__page__center__scroll__inner__container__bottom__left'
                            ref = {repsRef}
                            onScroll = {() => setRepsPos(Math.floor(repsRef.current.scrollTop))}
                            >
                                {
                                    Array.from({length: 32}, (item, index) => index ).map(
                                        (item, index) => {
                                            return (
                                                <div
                                                key={index}
                                                ref = {(el) => repsEachRef.current[index] = el}
                                                className = 'main__page__center__scroll__inner__container__bottom__left__each to__center'
                                                style = {{
                                                    visibility: index === 0 || index === 31 ? "hidden" : "visible",
                                                }}
                                                >
                                                    <div
                                                    className = 'main__page__center__scroll__inner__container__bottom__left__each__inner to__center'
                                                    style={{
                                                        width: index === centerReps ? `calc(100% - 20px)` : `calc(100% - 50px)`,
                                                        backgroundColor: index === centerReps ? "#000000" : "#e6e6e6",
                                                        color: index === centerReps ? "#ffffff" : "#000000",
                                                    }}
                                                    >
                                                        {item}
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </div>
                            <div
                            className = 'main__page__center__scroll__inner__container__bottom__center to__center'
                            >
                                <img
                                ref = {helmRef}
                                src = {helm}
                                />
                            </div>
                            <div
                            className = 'main__page__center__scroll__inner__container__bottom__right'
                            ref = {weightsRef}
                            onScroll = {() => setWeightsPos(Math.floor(weightsRef.current.scrollTop))}
                            >
                                {
                                    Array.from({length: 202}, (item, index) => index  * 0.25 ).map(
                                        (item, index) => {
                                            return (
                                                <div
                                                key={index}
                                                ref = {(el) => weightsEachRef.current[index] = el}
                                                className = 'main__page__center__scroll__inner__container__bottom__right__each to__center'
                                                style = {{
                                                    visibility: index === 0 || index === 201 ? "hidden" : "visible"
                                                }}
                                                >
                                                    <div
                                                    className = 'main__page__center__scroll__inner__container__bottom__right__each__inner to__center'
                                                    style = {{
                                                        width: index === centerWeights ? `calc(100% - 20px)` : `calc(100% - 50px)`,
                                                        backgroundColor: index === centerWeights ? "#000000" : "#e6e6e6",
                                                        color: index === centerWeights ? "#ffffff" : "#000000",
                                                    }}
                                                    >
                                                        {item}
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )
                                }
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

export default MainPage
