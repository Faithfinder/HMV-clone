import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import ChangeCartStep from "src/components/checkout/ChangeCartStep";
import EnterCustomerDataStep from "../checkout/EnterCustomerDataStep";
import StepButtons from "src/components/checkout/StepButtons";

export default () => {
    const [activeStep, setActiveStep] = useState(0);
    const { state: locationState = { redirectedProps: {} } } = useLocation();
    const { currentStep = 0 } = locationState.redirectedProps;

    useEffect(() => {
        setActiveStep(currentStep);
    }, [currentStep]);

    const incrementStep = () => {
        setActiveStep(activeStep + 1);
    };

    const decrementStep = () => {
        setActiveStep(activeStep - 1);
    };

    const renderActiveStep = () => {
        switch (activeStep) {
            case 0:
                return <ChangeCartStep incrementStep={incrementStep} />;
            case 1:
                return (
                    <EnterCustomerDataStep
                        currentStep={activeStep}
                        incrementStep={incrementStep}
                        decrementStep={decrementStep}
                    />
                );
            case 2:
                return (
                    <StepButtons
                        previousHandler={decrementStep}
                        proceedHandler={incrementStep}
                    />
                );
            default:
                break;
        }
    };

    return (
        <Container>
            <Stepper activeStep={activeStep}>
                <Step>
                    <StepLabel>Checkout</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Customer data</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Review</StepLabel>
                </Step>
            </Stepper>

            {renderActiveStep()}
        </Container>
    );
};
