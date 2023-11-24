import React from "react";
import { SingleImageDropzoneUsage } from "./InputImageSingle";
import { MultiFileDropzoneUsage } from "./InputImageMultiple";
interface YourFormProps {
  handleNameChange: (value: any) => void;
  handleDesignationChange: (value: any) => void;
  handleIndustryChange: (value: any) => void;
  handlePhone1Change: (value: any) => void;
  handlePhone2Change: (value: any) => void;
  handleEmailChange: (value: any) => void;
  handleAddressChange: (value: any) => void;
  handleWebsiteChange: (value: any) => void;
  handleProfileChange: (value: any) => void;
  handleAward: (value: string) => void;
  toggleUpdate: () => void;
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
  handleProfileChange,
  handleAward,
  toggleUpdate,
}: YourFormProps) => {
  return (
    <div className="lg:h-full w-full  p-10 text-white dark:text-gray-200">
      <div className="w-full h-fit flex items-center justify-center relative">
        <h1 className="font-bold text-center lg:text-4xl text-xl mb-6">
          Enter your data here
        </h1>
      </div>
      <p className="mb-4 lg:text-[20px] text-lg font-semibold h-fit ">
        Enter the following information:
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-4/5 mx-auto">
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-1">
            Name
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={(e) => handleNameChange(e)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="designation" className="mb-1">
            Designation
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"
            type="text"
            id="designation"
            placeholder="Enter your designation"
            onChange={(e) => handleDesignationChange(e)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="industry" className="mb-1">
            Industry
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"
            type="text"
            id="industry"
            placeholder="Enter your industry"
            onChange={(e) => handleIndustryChange(e)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="phoneNumber1" className="mb-1">
            Phone Number 1
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black invalid:border-red-500"
            type="tel"
            id="phoneNumber1"
            placeholder="+1 111-111-1111"
            onChange={(e) => handlePhone1Change(e)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="phoneNumber2" className="mb-1">
            Phone Number 2
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"
            type="tel"
            id="phoneNumber2"
            placeholder="+1 111-111-1111"
            onChange={(e) => handlePhone2Change(e)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-1">
            Email
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"
            type="email"
            id="email"
            placeholder="example@example.com"
            onChange={(e) => handleEmailChange(e)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="address" className="mb-1">
            Address
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"
            type="text"
            id="address"
            placeholder="Address"
            onChange={(e) => handleAddressChange(e)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="website" className="mb-1">
            Website
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black invalid:border-red-500"
            type="url"
            id="website"
            placeholder="Website"
            onChange={(e) => handleWebsiteChange(e)}
          />
        </div>
      </div>
      <div className="flex justify-evenly items-center w-full flex-wrap">
        <SingleImageDropzoneUsage handleProfileChange={handleProfileChange} />
        <SingleImageDropzoneUsage handleProfileChange={handleAward} />
      </div>
    </div>
  );
};

export default Form;
