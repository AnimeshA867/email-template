"use client";

import { useEffect, useState, useRef } from "react";

import Preview from "./Components/Preview";
import Form from "./Components/Form";

interface agent {
  name: string;
  email: string;
  designation: string;
  photo: string;
  phone: string;
  franchise: string;
}

export type agentArr = agent[];
const agents: agentArr = [
  {
    name: "Bishnu Prabhat Sapkota",
    email: "bishnu.sapkota@multidynamic.com.au",
    designation: "Principal",
    photo:
      "https://multidynamic.com.au/itTeam/emailsignature/Bishnu.png?fbclid=IwAR3Fnk2Yvohm9c1plBqbXf1g_vLM7rpYCfb99zeCwxpjICB5I6tlzr92R-k",
    phone: "0416754466",
    franchise: "ingleburn",
  },
  {
    name: "Bjay Paul (Bijaya Upadhyaya)",
    email: "bjay.paul@multidynamic.com.au",
    designation: "Sales Director",
    photo:
      "https://multidynamic.com.au/itTeam/emailsignature/bjay.png?fbclid=IwAR3ZDRYCt4sFp-chiLp0nk5VBu5CSbR3tKk1tZEmLc6W8aMz-as1KJjYSzo",
    phone: "0431610803",
    franchise: "ingleburn",
  },
  {
    name: "Rama Paudel",
    email: "rama.poudel@multidynamic.com.au",
    designation: "Property Manager",
    photo: "",
    phone: "0449686209",
    franchise: "ingleburn",
  },
  {
    name: "Syed Amin",
    email: "syed.amin@multidynamic.com.au",
    designation: "Sales Executive",
    photo: "",
    phone: "0422368577",
    franchise: "ingleburn",
  },
  {
    name: "Prakash Paudel",
    email: "prakash.paudel@multidynamic.com.au",
    designation: "Sales Agent",
    photo: "",
    phone: "0450928535",
    franchise: "ingleburn",
  },
  {
    name: "Tirtha Acharya",
    email: "prakash.paudel@multidynamic.com.au",
    designation: "Project Sales Director",
    photo: "",
    phone: "0450928535",
    franchise: "ingleburn",
  },
  {
    name: "Ash Rajbaidya",
    email: "ashutosh.baidya@multidynamic.com.au",
    designation: "Sales Executive",
    photo:
      "https://dasraa.com/MultiDynamicEmail/aasssh.jpg?fbclid=IwAR3POLbijgcPSOqsIZLLgjLMvgOtABH_GF5ZGyr_1Vn_MA-8kAASca0tbKo",
    phone: "+61452424910",
    franchise: "ingleburn",
  },
  {
    name: "Jeetendra Shrestha",
    email: "jeeten.shrestha@multidynamic.com.au",
    designation: "Sales Executive",
    photo: "",
    phone: "0432380840",
    franchise: "auburn",
  },
  {
    name: "Bhes Raj Gyawali (Bharat)",
    email: "bharat.gyawali@multidynamic.com.au",
    designation: "Sales Executive",
    photo: "",
    phone: "0470620713",
    franchise: "auburn",
  },
  {
    name: "Dilli Dhakal",
    email: "dilli.dhakal@multidynamic.com.au",
    designation: "Principal",
    photo: "",
    phone: "0421411613",
    franchise: "auburn",
  },
  {
    name: "Bijay Gyawali",
    email: "bijay.gyawali@multidynamic.com.au",
    designation: "Sales Director",
    photo: "",
    phone: "0430966240",
    franchise: "auburn",
  },
  {
    name: "Prakash Prajapati",
    email: "prakash.prajapati@multidynamic.com.au",
    designation: "Sales Associate",
    photo: "",
    phone: "0433582505",
    franchise: "auburn",
  },
  {
    name: "Rohan Regmi (Ron)",
    email: "ron.regmi@multidynamic.com.au",
    designation: "Sales Executive",
    photo: "",
    phone: "0452106614",
    franchise: "auburn",
  },
  {
    name: "Binu Thapa ",
    email: "binu.thapa@multidynamic.com.au",
    designation: "Principal/ Senior Property Manager",
    photo: "",
    phone: "0411941388",
    franchise: "rouse hill",
  },
  {
    name: "Seema Joshi",
    email: "seema.joshi@multidynamic.com.au",
    designation: "Director/ Sales Manager",
    photo: "",
    phone: "0403757214",
    franchise: "rouse hill",
  },
  {
    name: "Deepak Joshi",
    email: "rousehill@multidynamic.com.au",
    designation: "Business Development Manager",
    photo: "",
    phone: "0421922843",
    franchise: "rouse hill",
  },
  {
    name: "Yogesh Shrestha",
    email: "yogesh.shrestha@multidynamic.com.au",
    designation: "Assistant Agent",
    photo: "",
    phone: "0426007312",
    franchise: "rouse hill",
  },
  {
    name: "Salina Sethi",
    email: "salina.sethi@multidynamic.com.au",
    designation: "Sales Assitance",
    photo: "",
    phone: "0426980972",
    franchise: "rouse hill",
  },
  {
    name: "Suman Shahi",
    email: "suman.shahi@multidynamic.com.au",
    designation: "Sales Agent",
    photo: "",
    phone: "0421079564",
    franchise: "rouse hill",
  },
  {
    name: "Rakesh Nanda",
    email: "rakesh.nanda@multidynamic.com.au",
    designation: "Assitant Agent",
    photo: "",
    phone: "0421218829",
    franchise: "rouse hill",
  },
  {
    name: "Dib Pradhan",
    email: "dib.pradhan@multidynamic.com.au",
    designation: "Assitant Agent",
    photo: "",
    phone: "0430541819",
    franchise: "rouse hill",
  },
  {
    name: "Shakti Lamichhane",
    email: "shakti.lamichhane@multidynamic.com.au",
    designation: "Principal",
    photo: "",
    phone: "0459902978",
    franchise: "southport",
  },
  {
    name: "Kishor Tiwari",
    email: "kishor.tiwari@multidynamic.com.au",
    designation: "Director",
    photo: "",
    phone: "0425216507",
    franchise: "southport",
  },
  {
    name: "Aashish Shahi",
    email: "Aashish.shahi@multidynamic.com.au",
    designation: "Sales Professional",
    photo: "",
    phone: "0424384835",
    franchise: "southport",
  },
  {
    name: "Mihir Shrestha",
    email: "mihir.shrestha@multidynamic.com.au",
    designation: "Business Development Manager",
    photo: "",
    phone: "0433261767",
    franchise: "southport",
  },
  {
    name: "Saroj Kandel",
    email: "saroj.kandel@multidynamic.com.au",
    designation: "Sales Professional",
    photo: "",
    phone: "0414988260",
    franchise: "southport",
  },
  {
    name: "Gnana Jay",
    email: "gnana.jay@multidynamic.com.au",
    designation: "Sales Associate",
    photo: "",
    phone: "0404123676",
    franchise: "southport",
  },
  {
    name: "Puneet Rai",
    email: "puneet.rai@multidynamic.com.au",
    designation: "Licensed Real Estate Agent",
    photo: "",
    phone: "0401255202",
    franchise: "southport",
  },
  {
    name: "Shikha Agrawal",
    email: "shikha.agrawal@multidynamic.com.au",
    designation: "Assistant Agent",
    photo: "",
    phone: "0404315697",
    franchise: "southport",
  },
  {
    name: "Grace GE",
    email: "rentals.southport@multidynamic.com.au",
    designation: "Property Manager",
    photo: "",
    phone: "0484575612",
    franchise: "southport",
  },
  {
    name: "Sanjaya Uprety",
    email: "shakti.team1@multidynamic.com.au",
    designation: "Sales Associate",
    photo: "",
    phone: "0423966817",
    franchise: "southport",
  },
  {
    name: "Ramesh Poudel",
    email: "ramesh.poudel@multidynamic.com.au",
    designation: "Principal",
    photo: "",
    phone: "+61402929823",
    franchise: "fitzgibbon",
  },
  {
    name: "Dorje Lama",
    email: "dorje.lama@multidynamic.com.au",
    designation: "Property Manager",
    photo: "",
    phone: "+61410936391",
    franchise: "fitzgibbon",
  },
  {
    name: "Ashim Koirala",
    email: "ashim.koirala@multidynamic.com.au",
    designation: "Project Sale Consultant",
    photo: "",
    phone: "+6124499700",
    franchise: "fitzgibbon",
  },
  {
    name: "Trilochan Pokhrel",
    email: "trilochan.pokhrel@multidynamic.com.au",
    designation: "Sales Executive",
    photo: "",
    phone: "+61434226377",
    franchise: "fitzgibbon",
  },
  {
    name: "Hari Basyal",
    email: "hari.basyal@multidynamic.com.au",
    designation: "Business Development Manager",
    photo: "",
    phone: "+61405403225",
    franchise: "fitzgibbon",
  },
  {
    name: "Sujan Adhikari (Simon AC)",
    email: "simon.ac@multidynamic.com.au",
    designation: "Principal",
    photo: "",
    phone: "0420770511",
    franchise: "adelaide",
  },
  {
    name: "Param Toor",
    email: "rental.sa@multidynamic.com.au",
    designation: "Admin/ Property Manager",
    photo: "",
    phone: "0420782143",
    franchise: "adelaide",
  },
  {
    name: "Narayan Gurung (Ryan Narayan)",
    email: "ryan.narayan@multidynamic.com.au",
    designation: "Property Manager",
    photo: "",
    phone: "0451372335",
    franchise: "adelaide",
  },
  {
    name: "Martin Ndung'u",
    email: "martin.ndungu@multidynamic.com.au",
    designation: "ICT Business Analyst",
    photo: "",
    phone: "0452628586",
    franchise: "adelaide",
  },
  {
    name: "Gordon Mcghie",
    email: "gordon.mcghie@multidynamic.com.au",
    designation: "Admin",
    photo: "",
    phone: "0438897121",
    franchise: "adelaide",
  },
  {
    name: "Bal Randhawa",
    email: "bal.randhawa@multidynamic.com.au",
    designation: "Sales Representative",
    photo: "",
    phone: "0414290029",
    franchise: "adelaide",
  },
];

export default function Home() {
  const [objArr, setObjArr] = useState();

  const [name, setName] = useState("Full Name");
  const [designation, setDesignation] = useState("Designation");
  const [industry, setIndustry] = useState("Ingleburn");
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
    const obj = agents.filter((data) =>
      data.franchise.toLowerCase().includes("ingleburn")
    );

    // @ts-expect-error
    setObjArr(obj);
  }, []);
  const fetchNames = (name: String) => {
    const obj = agents.filter((data) =>
      data.franchise
        .toLowerCase()
        .includes(name ? name.toLocaleLowerCase() : "ingleburn")
    );
    // @ts-expect-error
    setObjArr(obj);
  };
  useEffect(() => {
    const obj = agents.find(
      (data) => data.name.toLowerCase() === name.toLowerCase()
    );
    console.log(obj);
    if (!obj) {
      return;
    }
    setDesignation(obj?.designation);
    setPhone2(obj.phone);
    setEmail(obj.email);
    if (obj.photo !== "") {
      setProfile(obj.photo);
    }
  }, [name]);
  useEffect(() => {
    fetchNames(industry);
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
      <div className="lg:w-1/3 lg:h-auto w-full  group  bg-[#f26922]">
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
          nameArr={objArr}
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
