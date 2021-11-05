import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';


const WorkingExperiences = () => {

    return (
        <div className="p-5 workingExperiences bg-warning">
            <h1 className="customFont  text-white ws">Our Working Expriences</h1>
            <div className="row m-0 justify-content-evenly py-5">

                <div className="col-lg-2 col-md-2 col-sm-4 col-4 my-2 fs-1 fw-bold text-white">
                    <div>
                        <CountUp end={100} redraw={true} duration={2}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>+
                    </div>
                    <h5>Years of experience</h5>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-4 my-2 fs-1 fw-bold text-white ">
                    <div>
                        <CountUp end={1982} redraw={true} duration={2}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>+
                    </div>
                    <h5>Cups of coffee & tea</h5>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-4 my-2 fs-1 fw-bold text-white ">
                    <div>
                        <CountUp end={219} redraw={true} duration={2}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>K
                    </div>
                    <h5>Hours on projects</h5>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-4 my-2 fs-1 fw-bold text-white ">
                    <div>
                        <CountUp end={121} redraw={true} duration={2}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>+
                    </div>
                    <h5>National awards</h5>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-4 my-2 fs-1 fw-bold text-white ">
                    <div>
                        <CountUp end={556} redraw={true} duration={2}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>+
                    </div>
                    <h5>Professional services</h5>
                </div>

            </div>
        </div>
    );
};

export default WorkingExperiences;