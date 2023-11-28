"use client";
import { useEffect, useState, useRef } from "react";

import Preview from "./Components/Preview";
import Form from "./Components/Form";

export default function Home() {
  const [name, setName] = useState("Full Name");
  const [designation, setDesignation] = useState("Designation");
  const [industry, setIndustry] = useState("Industry");
  const [phone1, setPhone1] = useState("+61 111-111-1111");
  const [phone2, setPhone2] = useState("");
  const [email, setEmail] = useState("example@example.com");
  const [address, setAddress] = useState("Address, Address");
  const [website, setWebsite] = useState("Something.com");
  const [profile, setProfile] = useState(
    "https://dasraa.com/MultiDynamicEmail/finalmd.png"
  );
  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [award, setAward] = useState("");
  const [addressUrl, setAddressUrl] = useState("");
  const [update, setUpdate] = useState(false);
  const [copyStatus, setCopyStatus] = useState(false);
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleAward = (arr: string) => {
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
  const handlePhone2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone2(event.target.value);
  };
  const handleFacebookLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFacebook(event.target.value);
  };
  const handleLinkedinLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkedin(event.target.value);
  };
  const handleInstagramLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInstagram(event.target.value);
  };
  const handleYoutubeLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYoutube(event.target.value);
  };
  const handleTwitterLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTwitter(event.target.value);
  };

  const toggleUpdate = () => {
    setUpdate(true);
    setAward("");
    setProfile("");
    console.log(award);
  };
  useEffect(() => {
    switch (industry) {
      case "Ingleburn":
        setWebsite("https://ingleburn.multidynamic.com.au");
        setAddress("Shop 2, 16 Ingleburn Rd, Ingleburn NSW 2565");
        setAddressUrl("https://maps.app.goo.gl/5XqyK7DLoChMGpwh8");
        setEmail("ingleburn@multidynamic.com.au");
        setPhone1("0296186209");

        break;
      case "Auburn":
        setWebsite("https://auburn.multidynamic.com.au/");
        setAddress("Shop 26/22, 20 Northumberland Rd, Auburn NSW 2144");
        setAddressUrl("https://maps.app.goo.gl/JpcWw6sRw53onH2s9");
        setEmail("auburn@multidynamic.com.au");
        setPhone1("1300201330");

        break;
      case "Rouse Hill":
        setWebsite("https://rousehill.multidynamic.com.au/");
        setAddress("Shop 1, 70 The Parkway, Beaumont Hills NSW 2155");
        setAddressUrl("https://maps.app.goo.gl/VaLk5VRumpXFS8Cd8");
        setEmail("rousehill@multidynamic.com.au");
        setPhone1("02 8678 7123");

        break;
      case "Southport":
        setWebsite("https://southport.multidynamic.com.au");
        setAddress("	1/55 Nerang Street, Southport 4215 QLD");
        setAddressUrl("https://maps.app.goo.gl/Z6SA5NWR3PPr2qPJ6");
        setEmail("southport@multidynamic.com.au");
        setPhone1("07 5608 9845");

        break;
      case "Fitzigibbon":
        setWebsite("https://fitzgibbon.multidynamic.com.au/");
        setAddress("Shop 6, 545 Roghan Road, Fitzgibbon QLD 4018");
        setAddressUrl("https://maps.app.goo.gl/ZAkUc6NyxfhDRmJR9");
        setEmail("fitzgibbon@multidynamic.com.au");
        setPhone1("	61 402 929 823");

        break;
      case "Adelaide":
        setWebsite("https://sa.multidynamic.com.au/");
        setAddress("Unit 2, 325 Hampstead Road, Northfield SA- 5085");
        setAddressUrl("https://maps.app.goo.gl/5XqyK7DLoChMGpwh8");
        setEmail("sa@multidynamic.com.au");
        setPhone1("	08 8164 5136");

        break;
    }
  }, [industry]);

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

  line-height: 14px;
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
  height: 30px;
  width: 30px;
  object-fit: contain;
  object-position: center;
}
.icon {
  height: 25px;
  width: 25px;
  object-fit: contain;
  object-position: center;
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
    <main className="flex min-h-screen lg:flex-row flex-col  gap-4 ">
      <div className="lg:w-1/3 lg:h-auto w-full  group  bg-gray-700">
        <Form
          handleNameChange={handleNameChange}
          handleDesignationChange={handleDesignationChange}
          handleIndustryChange={handleIndustryChange}
          handleProfileChange={handleProfileChange}
          handleAward={handleAward}
          toggleUpdate={toggleUpdate}
          website={website}
          phone1={phone1}
          handlePhone2Change={handlePhone2Change}
          address={address}
          email={email}
          handleFacebookLink={handleFacebookLink}
          handleTwitterLink={handleTwitterLink}
          handleLinkedinLink={handleLinkedinLink}
          handleInstagramLink={handleInstagramLink}
          handleYoutubeLink={handleYoutubeLink}
        />
      </div>
      <div className="lg:w-2/3 w-full  group relative lg:h-auto h-auto">
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
          award={award}
          update={update}
          mapLink={addressUrl}
          ref={previewRef}
          facebook={facebook}
          instagram={instagram}
          twitter={twitter}
          linkedin={linkedin}
          youtube={youtube}
        />
        <div className="h-screen w-full group-hover:opacity-100 opacity-0 backdrop-blur-md z-10 absolute right-0 top-0 p-4 transition-all duration-400 ease-linear rounded-md">
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
