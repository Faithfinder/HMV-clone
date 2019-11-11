import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";

import ChangeCartStep from "src/components/checkout/ChangeCartStep";
import EnterCustomerDataStep from "../checkout/EnterCustomerDataStep";

export default () => {
    const [activeStep, setActiveStep] = useState(0);
    const { state: locationState = { redirectedProps: {} } } = useLocation();
    const { currentStep = 0 } = locationState.redirectedProps;

    useEffect(() => {
        setActiveStep(currentStep);
    }, [currentStep]);

    const renderActiveStep = () => {
        switch (activeStep) {
            case 0:
                return <ChangeCartStep />;
            case 1:
                return <EnterCustomerDataStep />;
            case 2:
                return "Finished!";
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
                    <StepLabel>Client data</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Review</StepLabel>
                </Step>
            </Stepper>
            <Button
                onClick={() => setActiveStep(activeStep - 1)}
                disabled={activeStep === 0}>
                Previous
            </Button>
            <Button
                onClick={() => setActiveStep(activeStep + 1)}
                disabled={activeStep === 2}>
                Next
            </Button>
            {renderActiveStep()}
        </Container>
    );
};
