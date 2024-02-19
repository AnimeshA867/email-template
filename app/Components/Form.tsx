import React, { useRef } from "react";
import { SingleImageDropzoneUsage } from "./InputImageSingle";
import { MultiFileDropzoneUsage } from "./InputImageMultiple";
import { agentArr } from "../page";
interface YourFormProps {
  handleNameChange: (value: any) => void;
  handleDesignationChange: (value: any) => void;
  handleIndustryChange: (value: any) => void;
  handleProfileChange: (value: any) => void;
  handleAward: (value: string) => void;
  toggleUpdate: () => void;
  handleFacebookLink: (value: any) => void;
  handleInstagramLink: (value: any) => void;
  handleLinkedinLink: (value: any) => void;
  handleTwitterLink: (value: any) => void;
  handleYoutubeLink: (value: any) => void;
  address: string;
  website: string;
  phone1: string;
  handlePhone2Change: (value: any) => void;
  email: string;
  nameArr: agentArr;
}
const Form = ({
  handleNameChange,
  handleDesignationChange,
  handleIndustryChange,
  address,
  website,
  phone1,
  handlePhone2Change,
  email,
  handleProfileChange,
  handleAward,
  handleFacebookLink,
  handleInstagramLink,
  handleLinkedinLink,
  handleTwitterLink,
  handleYoutubeLink,
  nameArr,
  toggleUpdate,
}: YourFormProps) => {
  return (
    <div className="lg:h-full w-full  p-10 text-white dark:text-gray-200 background-[#f26922]">
      <div className="w-full h-fit flex items-center justify-center relative">
        <h1 className="font-bold text-center lg:text-4xl text-xl mb-6">
          Enter your data here
        </h1>
      </div>
      <p className="mb-4 lg:text-[20px] text-lg font-semibold h-fit ">
        Enter the following information:
      </p>
      <div className="grid grid-cols-1  gap-4 w-4/5 mx-auto">
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-1">
            Name
          </label>

          <select
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"
            name="Name"
            id="name"
            onChange={(e) => handleNameChange(e)}
          >
            <option value="name" selected>
              Name
            </option>
            {nameArr?.map((val, id) => {
              return (
                <option value={val.name} key={id}>
                  {val.name}
                </option>
              );
            })}
          </select>
        </div>
        {/* <div className="flex flex-col mb-4">
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
        </div> */}
        <div className="flex flex-col mb-4">
          <label htmlFor="industry" className="mb-1">
            Industry
          </label>
          <select
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"
            name="industry"
            id="industry"
            onChange={(e) => handleIndustryChange(e)}
          >
            <option value="Ingleburn">Ingleburn</option>
            <option value="Auburn">Auburn</option>
            <option value="Rouse Hill">Rouse Hill</option>
            <option value="Southport">Southport</option>
            <option value="Fitzgibbon">Fitzgibbon</option>
            <option value="Adelaide">Adelaide</option>
          </select>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="phoneNumber2" className="mb-1">
            Facebook Link
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"
            type="text"
            id="facebook"
            placeholder="facebook.com/....."
            onChange={(e) => handleFacebookLink(e)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="phoneNumber2" className="mb-1">
            Youtube Link
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"
            type="text"
            id="youtube"
            placeholder="youtube.com/....."
            onChange={(e) => handleYoutubeLink(e)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="phoneNumber2" className="mb-1">
            Linkedin Link
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"
            type="text"
            id="linkedin"
            placeholder="linkedin.com/....."
            onChange={(e) => handleLinkedinLink(e)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="phoneNumber2" className="mb-1">
            Instagram Link
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"
            type="text"
            id="instagram"
            placeholder="instagram.com/..."
            onChange={(e) => handleInstagramLink(e)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="phoneNumber2" className="mb-1">
            Twitter Link
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"
            type="text"
            id="twitter"
            placeholder="twitter.com/..."
            onChange={(e) => handleTwitterLink(e)}
          />
        </div>

        {/* <div className="flex flex-col mb-4">
          <label htmlFor="phoneNumber1" className="mb-1">
            Office Phone Number
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black invalid:border-red-500"
            type="tel"
            id="phoneNumber1"
            placeholder="+1 111-111-1111"
            disabled={true}
            value={phone1}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="phoneNumber2" className="mb-1">
            Personal Phone Number
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"
            type="tel"
            id="phoneNumber2"
            placeholder="+1 111-111-1111"
            onChange={(e) => handlePhone2Change(e)}
          />
        </div> */}
        {/* <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-1">
            Email
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"
            type="email"
            id="email"
            placeholder="example@example.com"
            disabled={true}
            value={email}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="address" className="mb-1">
            Address
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"
            name="address"
            id="address"
            placeholder="Address"
            disabled={true}
            value={address}
          />
        </div> */}
        {/* <div className="flex flex-col mb-4">
          <label htmlFor="website" className="mb-1">
            Website
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black invalid:border-red-500"
            type="url"
            id="website"
            placeholder="Website"
            disabled={true}
            value={website}
          />
        </div> */}
      </div>
      {/* <div className="flex justify-evenly items-center w-full flex-wrap">
        <SingleImageDropzoneUsage handleProfileChange={handleProfileChange} />

        <SingleImageDropzoneUsage handleProfileChange={handleAward} />
      </div> */}
    </div>
  );
};

export default Form;
