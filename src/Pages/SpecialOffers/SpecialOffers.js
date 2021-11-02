import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Link } from 'react-router-dom';
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
            <h3 className="time fw-bold  ">{time}</h3>
            <h3 className="fw-bold ">{dimension}</h3>
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
        <div className="p-5 specialOffering " >
            <div className="row justify-content-evenly">
                <div className="col-lg-7 ">
                    <div className="row justify-content-center align-items-center p-2 mx-auto text-color">

                        <h1 className="customFont mt-5">Special Offers</h1>
                        <p className="">Find Your Perfect Hotels Get the best prices on 20,000+ properties the best prices on</p>
                        <div className="col-lg-3 col-md-3 col-sm-6 my-4 justify-content-center d-flex">
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
                        <div className="col-lg-3 col-md-3 col-sm-6 my-4 justify-content-center d-flex">
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
                        <div className="col-lg-3 col-md-3 col-sm-6 my-4 justify-content-center d-flex">
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
                        <div className="col-lg-3 col-md-3 col-sm-6 my-4 justify-content-center d-flex">
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
                </div>
                <div to="/tours" className="col-lg-4 p-2">
                    <div className="row p-4 specialOffering-right">
                        <div className="specialOffering-right-img">
                            <h1 className="p-5 customFont"> </h1>
                            <p className="p-5 my-4"></p>
                            <p><Link to="/tours" className="btn btn-success w-10 mx-auto text-white fw-bold">View</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;