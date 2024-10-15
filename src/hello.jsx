export default function Button({ onClick, children }) {
    return (
        <button onClick={onClick} className="btn">
            {children}
        </button>
    );
}

import React, { useState } from 'react';
import Header from "./components/Header";
import Stepone from "./components/Stepone";
import Steptwo from "./components/Steptwo";
import Stepthree from "./components/Stepthree";
import Stepfour from "./components/Stepfour";
import Stepfive from "./components/Stepfive";
import Button from "./components/Button";

export default function App() {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, 5));
    };

    const handleBack = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Stepone />;
            case 2:
                return <Steptwo />;
            case 3:
                return <Stepthree />;
            case 4:
                return <Stepfour />;
            case 5:
                return <Stepfive />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col md:flex md:flex-row ">
            <Header />
            <div>
                {renderStep()}
                <div >
                    {currentStep > 1 && <Button onClick={handleBack}>Go Back</Button>}
                    {currentStep < 5 && <Button onClick={handleNext}>Next</Button>}
                </div>
            </div>
        </div>
    );
}
