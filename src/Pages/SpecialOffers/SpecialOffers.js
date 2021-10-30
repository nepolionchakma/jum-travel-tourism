import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import "./SpecialOffers.css"



const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
    isPlaying: true,
    size: 150,
    strokeWidth: 6
};

const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
            <h3 className="time fw-bold fs-2 ">{time}</h3>
            <h3 className="fw-bold fs-2">{dimension}</h3>
        </div>
    );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const SpecialOffers = () => {


    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = stratTime + 243248; // use UNIX timestamp in seconds

    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;

    return (
        <div className="p-5 specialOffering">
            <div>
                <h2>Special Offering</h2>
            </div>
            <div className="row justify-content-center align-items-center p-5 mx-auto">
                <div className="col-lg-2 col-md-3 col-sm-6 my-4 justify-content-center d-flex">
                    <CountdownCircleTimer
                        {...timerProps}
                        colors={[["#7E2E84"]]}
                        duration={daysDuration}
                        initialRemainingTime={remainingTime}
                    >
                        {({ elapsedTime }) =>
                            renderTime("days", getTimeDays(daysDuration - elapsedTime))
                        }
                    </CountdownCircleTimer>

                </div>
                <div className="col-lg-2 col-md-3 col-sm-6 my-4 justify-content-center d-flex">
                    <CountdownCircleTimer
                        {...timerProps}
                        colors={[["#D14081"]]}
                        duration={daySeconds}
                        initialRemainingTime={remainingTime % daySeconds}
                        onComplete={(totalElapsedTime) => [
                            remainingTime - totalElapsedTime > hourSeconds
                        ]}
                    >
                        {({ elapsedTime }) =>
                            renderTime("hours", getTimeHours(daySeconds - elapsedTime))
                        }
                    </CountdownCircleTimer>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6 my-4 justify-content-center d-flex">
                    <CountdownCircleTimer
                        {...timerProps}
                        colors={[["#EF798A"]]}
                        duration={hourSeconds}
                        initialRemainingTime={remainingTime % hourSeconds}
                        onComplete={(totalElapsedTime) => [
                            remainingTime - totalElapsedTime > minuteSeconds
                        ]}
                    >
                        {({ elapsedTime }) =>
                            renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
                        }
                    </CountdownCircleTimer>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6 my-4 justify-content-center d-flex">
                    <CountdownCircleTimer
                        {...timerProps}
                        colors={[["#218380"]]}
                        duration={minuteSeconds}
                        initialRemainingTime={remainingTime % minuteSeconds}
                        onComplete={(totalElapsedTime) => [
                            remainingTime - totalElapsedTime > 0
                        ]}
                    >
                        {({ elapsedTime }) =>
                            renderTime("seconds", getTimeSeconds(elapsedTime))
                        }
                    </CountdownCircleTimer>
                </div>



            </div>
            <div>
                <button className="btn btn-success">View All Offers</button>
            </div>
        </div>
    );
};

export default SpecialOffers;