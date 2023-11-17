"use client";
import { useState } from "react";
import Image from "next/image";
import Preview from "./Components/Preview";
import Form from "./Components/Form";
import { emit } from "process";

export default function Home() {
  const [name, setName] = useState("Full Name");
  const [designation, setDesignation] = useState("Designation");
  const [industry, setIndustry] = useState("Industry");
  const [phone1, setPhone1] = useState("+61 111-111-1111");
  const [phone2, setPhone2] = useState("+61 111-111-1111");
  const [email, setEmail] = useState("example@example.com");
  const [address, setAddress] = useState("Address, Address");
  const [website, setWebsite] = useState("Something.com");
  const [iamge, setImage] = useState("Something.com");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDesignationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDesignation(event.target.value);
  };

  const handleIndustryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIndustry(event.target.value);
  };

  const handlePhone1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone1(event.target.value);
  };

  const handlePhone2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone2(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleWebsiteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWebsite(event.target.value);
  };
  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
    console.log(event.target.value);
  };
  return (
    <main className="flex min-h-screen flex-row items-center gap-4">
      <Form
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handleDesignationChange={handleDesignationChange}
        handlePhone1Change={handlePhone1Change}
        handlePhone2Change={handlePhone2Change}
        handleWebsiteChange={handleWebsiteChange}
        handleAddressChange={handleAddressChange}
        handleIndustryChange={handleIndustryChange}
        handleImage={handleImage}
      />
      <Preview
        name={name}
        designation={designation}
        industry={industry}
        phone1={phone1}
        phone2={phone2}
        email={email}
        address={address}
        website={website}
      />
    </main>
  );
}
