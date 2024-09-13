import './TFD_ExDetails.css'

const TFD_ExDetails = () => {
    return (
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
                                            <div>{index === 0 ? "W" : index}</div>
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
    )
}

export default TFD_ExDetails
