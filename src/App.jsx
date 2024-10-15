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
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });

  const handleNext = () => {
    if (currentStep === 1) {
      const newErrors = {};
      // Input validation
      if (!formData.name) newErrors.name = "Please fill in your name.";
      if (!formData.email) newErrors.email = "Please fill in your email.";
      if (!formData.phone) newErrors.phone = "Please fill in your phone number.";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
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
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex md:flex-row">
      <Header />
      <div>
        {renderStep()}
        <div className="flex justify-between mt-4">
          {currentStep > 1 && <Button onClick={handleBack}>Go Back</Button>}
          {currentStep < 5 && <Button onClick={handleNext}>Next</Button>}
        </div>
      </div>
    </div>
  );
}
