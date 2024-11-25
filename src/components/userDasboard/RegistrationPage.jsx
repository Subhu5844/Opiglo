import React, { useState } from "react";
import background from "../../assets/RegisterPage/background1.png";
import pollution from "../../assets/RegisterPage/pollution.png";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [contactWorkNo, setContactWorkNo] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [vatNo, setVatNo] = useState("");
  const [physicalAddress, setPhysicalAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isContactVerified, setIsContactVerified] = useState(false);

  const handleVerifyEmail = () => {
    // Placeholder email verification logic
    setIsEmailVerified(true);
  };

  const handleVerifyContact = () => {
    // Placeholder contact verification logic
    setIsContactVerified(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    const registrationData = {
      name,
      position,
      companyName,
      email,
      contactWorkNo,
      registrationNo,
      vatNo,
      physicalAddress,
      paymentMethod,
      password,
    };
  
    try {
      const response = await fetch("http://127.0.0.1:8000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert("Registration successful!");
        console.log("Response from server:", data);
  
        // Clear form fields
        setName("");
        setPosition("");
        setCompanyName("");
        setEmail("");
        setContactWorkNo("");
        setRegistrationNo("");
        setVatNo("");
        setPhysicalAddress("");
        setPaymentMethod("");
        setPassword("");
        setConfirmPassword("");
        setIsEmailVerified(false);
        setIsContactVerified(false);
      } else {
        // Extract and display only the error status and reason
        console.error(`Error ${response.status}: ${response.statusText}`);
        alert("Registration failed. Please check your details and try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
      alert("Failed to connect to the server. Please try again later.");
    }
  };
  
  

  return (
    <div className="min-h-screen mb-8">
      <div
        className="relative bg-cover bg-center h-[60vh]"
        style={{
          backgroundImage: `url(${pollution})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-4xl font-bold text-orange-500">
            OPIGLO
          </h1>
          <h2 className="text-6xl font-semibold mt-4">GET STARTED</h2>
          <p className="text-4xl mt-2 font-bold">Start your journey today!</p>
        </div>
      </div>

      <div className="bg-[#008080] w-full h-[9vh] flex items-center justify-center text-white text-center px-4">
        <p>
          To sign up, please provide the following information. If you have any
          questions, please visit our{" "}
          <a href="/contact" className="underline">
            Contact Us
          </a>{" "}
          page.
        </p>
      </div>

      <div
        className="w-full h-auto"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="max-w-3xl mx-auto mt-8 p-8 bg-teal-600 bg-opacity-10 rounded shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <label className="block text-teal-700 font-semibold">Name</label>
            <div className="flex items-center">
              <div className="w-[4px] h-full bg-teal-500"></div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-[80vw] max-w-[700px] ml-2 p-3 border-l-4 border-teal-700 bg-white rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Position Field */}
            <label className="block text-teal-700 font-semibold">
              Position
            </label>
            <div className="flex items-center">
              <div className="w-[4px] h-full bg-teal-500"></div>
              <select
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="w-[80vw] max-w-[700px] ml-2 p-3 border-l-4 border-teal-700 bg-white rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              >
                <option value="">Select your position</option>
                <option>Owner</option>
                <option>Director</option>
                <option>Accounts</option>
                <option>Admin Clerk</option>
                <option>Admin</option>
                <option>Supervisor</option>
                <option>Contact Manager</option>
                <option>Controller</option>
                <option>Finance Manager</option>
                <option>Fleet Manager</option>
                <option>General Manager</option>
                <option>Manager</option>
                <option>Operations</option>
                <option>Order Capturer</option>
              </select>
            </div>

            {/* Company Name Field */}
            <label className="block text-teal-700 font-semibold">Company Name</label>
            <div className="flex items-center">
              <div className="w-[4px] h-full bg-teal-500"></div>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Company name"
                className="w-[80vw] max-w-[700px] ml-2 p-3 border-l-4 border-teal-700 bg-white rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Email Field with Verification */}
            <label className="block text-teal-700 font-semibold">Email</label>
            <div className="flex items-center">
              <div className="w-[4px] h-full bg-teal-500"></div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-[80vw] max-w-[700px] ml-2 p-3 border-l-4 border-teal-700 bg-white rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
              <button
                type="button"
                onClick={handleVerifyEmail}
                className={`ml-2 p-2 text-white font-semibold rounded ${isEmailVerified ? "bg-green-500" : "bg-red-500"}`}
              >
                {isEmailVerified ? "Verified" : "Verify"}
              </button>
            </div>

            {/* Contact Work Number Field with Verification */}
            <label className="block text-teal-700 font-semibold">Contact Work No.</label>
            <div className="flex items-center">
              <div className="w-[4px] h-full bg-teal-500"></div>
              <input
                type="text"
                value={contactWorkNo}
                onChange={(e) => setContactWorkNo(e.target.value)}
                placeholder="Contact work no."
                className="w-[80vw] max-w-[700px] ml-2 p-3 border-l-4 border-teal-700 bg-white rounded shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
              <button
                type="button"
                onClick={handleVerifyContact}
                className={`ml-2 p-2 text-white font-semibold rounded ${isContactVerified ? "bg-green-500" : "bg-red-500"}`}
              >
                {isContactVerified ? "Verified" : "Verify"}
              </button>
            </div>

            {/* Registration Number Field */}
            <label className="block text-teal-700 font-semibold">Registration No.</label>
            <div className="flex items-center">
              <div className="w-[4px] h-full bg-teal-500"></div>
              <input
                type="text"
                value={registrationNo}
                onChange={(e) => setRegistrationNo(e.target.value)}
                placeholder="Registration no."
                className="w-[80vw] max-w-[700px] ml-2 p-3 border-l-4 border-teal-700 bg-white rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* VAT Number Field */}
            <label className="block text-teal-700 font-semibold">VAT No.</label>
            <div className="flex items-center">
              <div className="w-[4px] h-full bg-teal-500"></div>
              <input
                type="text"
                value={vatNo}
                onChange={(e) => setVatNo(e.target.value)}
                placeholder="VAT no."
                className="w-[80vw] max-w-[700px] ml-2 p-3 border-l-4 border-teal-700 bg-white rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Physical Address Field */}
            <label className="block text-teal-700 font-semibold">Physical Address</label>
            <div className="flex items-center">
              <div className="w-[4px] h-full bg-teal-500"></div>
              <input
                type="text"
                value={physicalAddress}
                onChange={(e) => setPhysicalAddress(e.target.value)}
                placeholder="Physical address"
                className="w-[80vw] max-w-[700px] ml-2 p-3 border-l-4 border-teal-700 bg-white rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Payment Method Field */}
            <label className="block text-teal-700 font-semibold">Payment Method</label>
            <div className="flex items-center">
              <div className="w-[4px] h-full bg-teal-500"></div>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-[80vw] max-w-[700px] ml-2 p-3 border-l-4 border-teal-700 bg-white rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              >
                <option value="">Select Payment Method</option>
                <option>Prepaid(EFT)</option>
              </select>
            </div>

            {/* Password Field */}
            <label className="block text-teal-700 font-semibold">Set Password</label>
            <div className="flex items-center">
              <div className="w-[4px] h-full bg-teal-500"></div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                title="Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character."
                className="w-[80vw] max-w-[700px] ml-2 p-3 border-l-4 border-teal-700 bg-white rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div className="flex items-center mt-4">
              <div className="w-[4px] h-full bg-teal-500"></div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                pattern={password}
                title="Please make sure passwords match."
                className="w-[80vw] max-w-[700px] ml-2 p-3 border-l-4 border-teal-700 bg-white rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="mt-6 w-[150px] max-w-[700px] p-3 text-lg font-semibold bg-green-500 text-white rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
