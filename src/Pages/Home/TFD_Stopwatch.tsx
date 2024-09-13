import './TFD_Stopwatch.css'

const TFD_Stopwatch = () => {
    return (
        <div
        // className = {`home__body__center__clock__base ${isRestTimerModalShow ? "bg__filter" : ""} `}
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
    )
}

export default TFD_Stopwatch
