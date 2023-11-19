"use client";
import { useEffect, useState, useRef } from "react";

import Preview from "./Components/Preview";
import Form from "./Components/Form";
import { emit } from "process";
import { text } from "stream/consumers";

export default function Home() {
  const [name, setName] = useState("Full Name");
  const [designation, setDesignation] = useState("Designation");
  const [industry, setIndustry] = useState("Industry");
  const [phone1, setPhone1] = useState("+61 111-111-1111");
  const [phone2, setPhone2] = useState("+61 111-111-1111");
  const [email, setEmail] = useState("example@example.com");
  const [address, setAddress] = useState("Address, Address");
  const [website, setWebsite] = useState("Something.com");
  const [profile, setProfile] = useState("");
  const [award, setAward] = useState<[string]>();
  const [images, setImages] = useState<[string] | undefined>();
  const [update, setUpdate] = useState(false);
  const [copyStatus, setCopyStatus] = useState(false);
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleAward = (arr: [string]) => {
    setAward(arr);
  };
  const handleDesignationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDesignation(event.target.value);
  };
  const handleProfileChange = (url: string) => {
    setProfile(url);
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
  const toggleUpdate = () => {
    setUpdate(true);
    setImages(award);
    console.log(award);
    console.log("Toggle function is working");
  };

  const previewRef = useRef<HTMLDivElement>(null);
  /* 
  const copyToClipboard = (text: string) => {
    console.log(copyStatus);
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    let array = [];
    array.push(text);
    const blob = new Blob();
    setTimeout(() => {
      setCopyStatus(false);
    }, 2000);
  };
 */
  const downloadFile = (htmlContent: any) => {
    const blob = new Blob([htmlContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "signature.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      setCopyStatus(false);
    }, 2000);
  };
  const copy = () => {
    if (previewRef.current) {
      const previewHtml = previewRef.current.innerHTML;
      console.log(previewHtml);
      const html = `<!DOCTYPE html>

<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gmail Signature for ${name}</title>

    <style>
      * {
        font-family: Tahoma;
        padding: 0;
        margin: 0;
        border-spacing: 0;
      }

      table,
      table * {
        padding: 0;
        margin: 0;
        color: #004c98;
        border-spacing: 0;
      }

      table tr,
      table td {
        height: 30px;
        font-size: 14px;
        line-height: 15px;
        vertical-align: center;
        font-family: Tahoma;
      }

      table.address tr td:first-child {
        padding-right: 10px;
      }

      a {
        color: #004c98;
        font-family: Tahoma;
        text-decoration: none;
      }

      .social-icons img {
        margin-left: 4px;
      }
    </style>
  </head>

  <body>
  ${previewHtml}
   </body>
</html>
  `;

      setCopyStatus(true);
      console.log(html);
      // copyToClipboard(previewHtml);
      downloadFile(html);
    }
  };

  // function copy() {
  //   // Get the HTML content of the signature section
  //   // var signatureContent = previewRef.current?.outerText;

  //   var htmlLayout: any = previewRef.current?.outerHTML;
  //   let textLayout: any = previewRef.current?.innerText;
  //   var combinedContent: any = htmlLayout + "\n\n" + textLayout;
  //   navigator.clipboard
  //     .writeText(combinedContent)
  //     .then(() => {
  //       alert("HTML layout copied to clipboard!");
  //     })
  //     .catch((err) => {
  //       console.error("Unable to copy HTML layout to clipboard", err);
  //     });
  // }

  // console.log(previewRef.current);
  return (
    <main className="flex min-h-screen lg:flex-row flex-col  gap-4 w-full h-full ">
      <div className="lg:w-1/2 lg:h-auto w-full  group  bg-gray-700">
        <Form
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handleDesignationChange={handleDesignationChange}
          handlePhone1Change={handlePhone1Change}
          handlePhone2Change={handlePhone2Change}
          handleWebsiteChange={handleWebsiteChange}
          handleAddressChange={handleAddressChange}
          handleIndustryChange={handleIndustryChange}
          handleProfileChange={handleProfileChange}
          handleAward={handleAward}
          toggleUpdate={toggleUpdate}
        />
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto  group relative">
        <Preview
          name={name}
          designation={designation}
          industry={industry}
          phone1={phone1}
          phone2={phone2}
          email={email}
          address={address}
          website={website}
          profile={profile}
          award={images}
          update={update}
          ref={previewRef}
        />
        <div className="h-full w-full group-hover:opacity-100 opacity-0 backdrop-blur-md z-10 absolute right-0 top-0 p-4 transition-all duration-400 ease-linear rounded-md">
          <button
            className="bg-green-500 text-white py-4 px-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-green-600 rounded-full font-bold text-[20px] z-20 "
            onClick={() => copy()}
          >
            {" "}
            Download HTML
          </button>
        </div>
      </div>
      {copyStatus && (
        <div
          className="bg-green-100 border border-blue-400 text-green-700 px-12 py-6 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-[25px]"
          role="alert"
        >
          <span className="block sm:inline">
            Please Wait. The file is being downloaded.
          </span>
        </div>
      )}
    </main>
  );
}
