import React from "react";
interface YourFormProps {
  handleNameChange: (value: any) => void;
  handleDesignationChange: (value: any) => void;
  handleIndustryChange: (value: any) => void;
  handlePhone1Change: (value: any) => void;
  handlePhone2Change: (value: any) => void;
  handleEmailChange: (value: any) => void;
  handleAddressChange: (value: any) => void;
  handleWebsiteChange: (value: any) => void;
  handleImage: (value: any) => void;
}
const Form = ({
  handleNameChange,
  handleDesignationChange,
  handleIndustryChange,
  handlePhone1Change,
  handlePhone2Change,
  handleEmailChange,
  handleAddressChange,
  handleWebsiteChange,
  handleImage,
}: YourFormProps) => {
  return (
    <div className="lg:h-screen w-1/2 bg-gradient-to-r from-blue-400 to-green-500 p-10 ">
      <h1 className="font-bold text-center text-4xl text-white mb-6">
        Preview
      </h1>
      <p className="text-white mb-4">Enter the following information:</p>
      <div className="flex flex-col gap-4">
        {/* You can customize the input styles further basedhandle your design preferences */}
        <input
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter your name"
          onChange={(e: any) => handleNameChange(e)}
        />
        <input
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter your designation"
          onChange={(e) => handleDesignationChange(e)}
        />
        <input
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter your industry"
          onChange={(e) => handleIndustryChange(e)}
        />
        <input
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          type="tel"
          name="phoneNumber"
          id="telephone1"
          placeholder="+1 111-111-1111"
          onChange={(e) => handlePhone1Change(e)}
        />
        <input
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          type="tel"
          name="phoneNumber"
          id="telephone2"
          placeholder="+1 111-111-1111"
          onChange={(e) => handlePhone2Change(e)}
        />
        <input
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          type="email"
          placeholder="example@example.com"
          onChange={(e) => handleEmailChange(e)}
        />
        <input
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Address"
          onChange={(e) => handleAddressChange(e)}
        />
        <input
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          type="url"
          placeholder="Website"
          onChange={(e) => handleWebsiteChange(e)}
        />
        <input
          className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          type="file"
          placeholder="image"
          onSubmit={(e) => handleImage(e)}
          //   onChange={(e) => handleWebsiteChange(e)}
        />
      </div>
    </div>
  );
};

export default Form;
