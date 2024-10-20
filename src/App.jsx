import { useState } from "react";
import Header from "./components/Header";
import Stepone from "./components/Stepone";
import Steptwo from "./components/Steptwo";
import Stepthree from "./components/Stepthree";
import Stepfour from "./components/Stepfour";
import Stepfive from "./components/Stepfive";
import Button from "./components/Button";

export default function App() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", plan: "" });
    const [errors, setErrors] = useState({ name: "", email: "", phone: "", plan: "" });

    const handleNext = () => {
        if (currentStep === 1) {
            const newErrors = {};
            if (!formData.name) newErrors.name = "Please fill in your name.";
            if (!formData.email) newErrors.email = "Please fill in your email.";
            if (!formData.phone) newErrors.phone = "Please fill in your phone number.";

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }
        }

        if (currentStep === 2) {
            if (!formData.plan) {
                setErrors((prev) => ({ ...prev, plan: "Please select a plan." }));
                return;
            }
        }

        setErrors({});
        setCurrentStep((prevStep) => Math.min(prevStep + 1, 5));
    };

    const handleBack = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Stepone formData={formData} setFormData={setFormData} errors={errors} />;
            case 2:
                return <Steptwo formData={formData} setFormData={setFormData} errors={errors} />;
            case 3:
                return <Stepthree  formData={formData} setFormData={setFormData} errors={errors} />;
            case 4:
                return <Stepfour />;
            case 5:
                return <Stepfive />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col md:flex md:flex-row">
            <Header />
            <div>
                {renderStep()}
                <div className="flex justify-around mt-4">
                    {currentStep > 1 && <Button onClick={handleBack}
                    className="bg-blue-500 text-white">
                    Go Back</Button>}
                    {currentStep < 5 && <Button onClick={handleNext}
                    className="bg-blue-500 text-white"
                    >Next</Button>}
                </div>
            </div>
        </div>
    );
}
