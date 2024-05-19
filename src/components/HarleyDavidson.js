import React, { useState, useEffect } from 'react';

//CSS File
import './harleyDavidson.css';

const HarleyDavidson = () => {

    const [isLockOpen, setIsLockOpen] = useState(false);

    const [isIgnitionOn, setIsIgnitionOn] = useState(false);

    const [isSelfStart, setIsSelfStart] = useState(false);

    const [isFireKick, setIsFireKick] = useState(false);

    const [isBikeComeBackToGarage, setIsBikeComeBackToGarage] = useState(false);

    const [isBreakPress, setIsBreakPress] = useState(false);

    const [isClutchPress, setIsClutchPress] = useState(false);

    const [isFrontLightOn, setIsFrontLightOn] = useState(false);

    const [isForwardGearEnable, setIsForwardGearEnable] = useState(false);

    const [isReverseGearEnabled, setIsReverseGearEnabled] = useState(false);

    const handleLockOpen = () => setIsLockOpen(prevState => !prevState);

    const handleBikeComeBackToGarage = () => {
        if (isIgnitionOn && isClutchPress && isForwardGearEnable || isIgnitionOn && isSelfStart && isClutchPress && isForwardGearEnable) {
            setTimeout(() => {
                setIsBikeComeBackToGarage(true);
                setIsIgnitionOn(false);
                setIsSelfStart(false);
                setIsFrontLightOn(false);
                setIsClutchPress(false);
                setIsForwardGearEnable(false);
            }, 5500);
        }
    };

    useEffect(() => {
        handleBikeComeBackToGarage();
    }, [isIgnitionOn, isClutchPress, isForwardGearEnable]);

    const handleIgnition = () => {
        setIsIgnitionOn(prevState => !prevState);
        setIsFireKick(false);
        setIsSelfStart(false);
        setIsFrontLightOn(false);
        setIsClutchPress(false);
        setIsForwardGearEnable(false);
        setIsBikeComeBackToGarage(false);
    }

    const handleSelfStart = () => {
        if (isIgnitionOn && !isSelfStart) {
            setIsSelfStart(true);
        } else {
            setIsSelfStart(false);
        }
        setIsBikeComeBackToGarage(false);
    };

    const handleFireKick = () => {
        setIsFireKick(prevState => {
            if (isIgnitionOn && !prevState) {
                return !prevState;
            } else {
                return false;
            }
        });
    };

    const handleFrontLight = () => {
        if (isIgnitionOn && !isFrontLightOn) {
            setIsFrontLightOn(true);
        } else {
            setIsFrontLightOn(false);
        }
    };

    const handleBreakPress = () => {
        setIsBreakPress(prevState => !prevState);
    };

    const handleClutchPress = () => {
        setIsClutchPress(true);
        if (!isIgnitionOn && isClutchPress && isForwardGearEnable) {
            setIsClutchPress(false);
        }
    };

    const handleForwardGear = () => {
        setIsForwardGearEnable(true);
        if (!isIgnitionOn && isClutchPress) {
            setIsClutchPress(false);
            setIsSelfStart(true);
        }
        if (!isIgnitionOn) {
            setIsForwardGearEnable(false);
        }
        setIsReverseGearEnabled(false);
    };

    const handleReverseGear = () => {
        if (isForwardGearEnable) {
            setIsReverseGearEnabled(true);
            setIsForwardGearEnable(false);
            setIsSelfStart(true);
        } else {
            setIsReverseGearEnabled(false);
        }
    };

    return (

        <div className='my-garage-container'>


            <h1>HARLEY DAVIDSON</h1>

            <div
                className={`
                my-garage
                ${isLockOpen ? 'open-the-garage' : 'close-the-garage'}
            `}
            >

                <div
                    className={`
                my-garage-open-system
                ${isLockOpen ? 'light-on moving-system-to-top' : 'light-off'}
            `}
                />

                <div
                    className={`
                    my-garage-open-system-lock
                    ${isLockOpen ? 'unlock' : 'lock'}
                `}
                    onClick={handleLockOpen}
                />

                <div className='my-garage-close-systems'>

                    <div onClick={handleBikeComeBackToGarage} className="my-garage-close-system">
                        <div className="my-garage-close-system-lights">
                            <div className="my-garage-close-system-light" />
                            <div className="my-garage-close-system-light" />
                            <div className="my-garage-close-system-light" />
                            <div className="my-garage-close-system-light" />
                            <div className="my-garage-close-system-light" />
                            <div className="my-garage-close-system-light" />
                            <div className="my-garage-close-system-light" />
                            <div className="my-garage-close-system-light" />
                            <div className="my-garage-close-system-light" />
                        </div>
                    </div>

                    <div onClick={handleLockOpen} className="my-garage-close-system">
                        <div className="my-garage-close-system-lights">
                            <div className="my-garage-close-system-light" />
                            <div className="my-garage-close-system-light" />
                            <div className="my-garage-close-system-light" />
                            <div className="my-garage-close-system-light" />
                            <div className="my-garage-close-system-light" />
                            <div className="my-garage-close-system-light" />
                            <div className="my-garage-close-system-light" />
                            <div className="my-garage-close-system-light" />
                            <div className="my-garage-close-system-light" />
                        </div>
                    </div>

                </div>

                <div className="my-bike-container">

                    <div
                        className={`
                            my-bike 
                            ${isIgnitionOn && isClutchPress && isForwardGearEnable ||
                                isIgnitionOn && isSelfStart && isClutchPress && isForwardGearEnable ? 'going-for-a-drive' : ''}
                             ${isBikeComeBackToGarage ? 'coming-back-to-garage' : ''}
                        `}>

                        <div className="my-bike-layer"></div>

                        <div className="my-bike-petrol-cap"></div>

                        <div className="my-bike-front-light">
                            <div className={`
                                my-bike-front-light-power 
                                ${isIgnitionOn && isFrontLightOn || isIgnitionOn &&
                                    !isFrontLightOn && isSelfStart ? 'power-on' : 'power-off'}
                            `}
                            />
                        </div>

                        <div className="my-bike-front-light-shadows">
                            {Array.from({ length: 12 }, (_, index) => (

                                <div
                                    key={index}
                                    className={`
                                        my-bike-front-light-shadow
                                        ${isIgnitionOn && isFrontLightOn || isIgnitionOn &&
                                            !isFrontLightOn && isSelfStart ? 'glowing-shadow' : 'no-shadow'}
                                    `}
                                />

                            ))}
                        </div>

                        <div className="my-bike-handle">

                            <div
                                className={`
                                    my-bike-hand-break
                                        ${isBreakPress ? 'break-pressed' : 'break-released'}
                                `}

                                onClick={handleBreakPress}></div>

                            <div
                                className={`
                                    my-bike-clutch
                                        ${!isForwardGearEnable && isClutchPress ? 'clutch-pressed' : 'clutch-released'}
                                `}

                                onClick={handleClutchPress}></div>

                            <div onClick={handleFireKick}
                                className="my-bike-stunt-button"></div>

                            <div onClick={handleSelfStart}
                                className="my-bike-self-start-button"></div>

                            <div onClick={handleFrontLight}
                                className="my-bike-front-light-button"></div>

                            <div className='my-bike-key-container'>

                                <div onClick={handleIgnition}
                                    className={`
                                        my-bike-key
                                            ${isIgnitionOn ? 'ignition-on' : 'ignition-off'}
                                    `}></div>

                                <div className={`
                                    my-bike-key-chain
                                        ${isIgnitionOn ? 'move-key-chain' : 'dont-move-key-chain'}
                                `}>

                                    <span className='my-bike-made-by'>H.D.S</span>

                                </div>

                            </div>

                            <div className="my-bike-jumps-front"></div>
                            <div className="my-bike-jumps-back"></div>

                        </div>

                        <div className="my-bike-seat"></div>

                        <div className="my-bike-seat-layer-1"></div>
                        <div className="my-bike-seat-layer-2"></div>
                        <div className="my-bike-seat-layer-3"></div>

                        <div className="my-bike-gear-system">

                            <div className="my-bike-gear">

                                <div onClick={handleForwardGear}
                                    className={`
                                        my-bike-forward-gear
                                        ${isForwardGearEnable ? 'gear-forward-enabled' : 'gear-forward-disabled'}
                                    `}></div>

                                <div onClick={handleReverseGear}
                                    className={`
                                        my-bike-reverse-gear
                                        ${isReverseGearEnabled ? 'gear-reverse-enabled' : 'gear-reverse-disabled'}
                                    `}></div>

                            </div>

                            <div className="my-bike-foot-step"></div>

                        </div>

                        <div className="my-bike-tires">

                            <div
                                className={`
                                    my-bike-tire 
                                        ${isIgnitionOn && isClutchPress && isForwardGearEnable ||
                                        isIgnitionOn && isSelfStart && isClutchPress && isForwardGearEnable ?
                                        'start-riding' : ''}
                                        ${isBikeComeBackToGarage ? 'stop-riding' : ''}
                                    `}>

                                <div className="my-bike-inside-rims">
                                    <div className={`
                                        my-bike-inside-rim 
                                        ${isIgnitionOn && isClutchPress && isForwardGearEnable ||
                                            isIgnitionOn && isSelfStart && isClutchPress && isForwardGearEnable ?
                                            'rotate-the-rim' : ''}
                                        ${isBikeComeBackToGarage ? 'do-not-rotate-the-rim' : ''}
                                    `}></div>
                                </div>

                            </div>

                            <div
                                className={`my-bike-tire 
                                    ${isIgnitionOn && isClutchPress && isForwardGearEnable ||
                                        isIgnitionOn && isSelfStart && isClutchPress && isForwardGearEnable ?
                                        'start-riding' : ''}
                                    ${isBikeComeBackToGarage ? 'stop-riding' : ''}
                                `}>

                                <div className="my-bike-inside-rims">
                                    <div className={`
                                        my-bike-inside-rim 
                                            ${isIgnitionOn && isClutchPress && isForwardGearEnable ||
                                            isIgnitionOn && isSelfStart && isClutchPress && isForwardGearEnable ?
                                            'rotate-the-rim' : ''}
                                            ${isBikeComeBackToGarage ? 'do-not-rotate-the-rim' : ''}
                                    `}></div>
                                </div>

                            </div>

                            <div className="my-bike-tire-layer-1"></div>

                            <div className="my-bike-tire-layer-2"></div>

                            <div className="my-bike-tire-layer-3">

                                <div className={`
                                        my-bike-fire
                                            ${isIgnitionOn && isFireKick ? 'explode' : 'donot-explode'}
                                    `}
                                />

                                {Array.from({ length: 12 }, (_, index) => (
                                    <div
                                        key={index}
                                        className={`
                                            my-bike-fire-kick
                                                ${isIgnitionOn && isFireKick ? 'explode-smoke' : 'donot-explode-smoke'}
                                        `}
                                    />
                                ))}

                            </div>

                            <div className="my-bike-tire-layer-4"></div>

                        </div>

                        <div className={`
                                my-bike-back-light
                                    ${isIgnitionOn && isFrontLightOn || isIgnitionOn &&
                                !isFrontLightOn && isSelfStart ? 'back-light-on' : 'back-light-off'}
                            `}></div>

                        <div className={`
                                my-bike-number-plate
                                    ${isIgnitionOn && isFrontLightOn || isIgnitionOn &&
                                !isFrontLightOn && isSelfStart ? 'number-plate-active' : 'number-plate-not-active'}
                            `}></div>

                        <span className={`
                                my-bike-number-plate-text
                                ${isIgnitionOn && isFrontLightOn || isIgnitionOn &&
                                !isFrontLightOn && isSelfStart ? 'number-plate-text-active' : 'number-plate-text-not-active'}
                            `}>T.<br />A.<br /><small>21</small></span>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default HarleyDavidson;