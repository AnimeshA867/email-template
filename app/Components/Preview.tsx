import React, { forwardRef } from "react";
import Image from "next/image";
import AwardSection from "./AwardSection";

interface ChildProps {
  name: string;
  designation: string;
  industry: string;
  phone1: string;
  phone2: string;
  email: string;
  address: string;
  website: string;
  profile: string;
  award: [string] | undefined;
  update: boolean;
}

const Preview = forwardRef<HTMLDivElement, ChildProps>(
  (
    {
      name,
      designation,
      industry,
      phone1,
      phone2,
      email,
      address,
      website,
      profile = "https://img.freepik.com/free-photo/portrait-hesitant-man-purses-lips-looks-bewilderment-feels-doubt_273609-16785.jpg",
      award,
    },
    ref
  ) => {
    return (
      <div className=" flex flex-col lg:items-center lg:justify-evenly  w-full h-full justify-center items-center">
        <h1 className="lg:text-[40px] text-[30px] font-bold ">Preview</h1>
        <div
          ref={ref}
          className="border-black/40 border-[2px overflow-hidden lg:w-[820px] w-[350px]"
        >
          {" "}
          <h4
            // style={{ color: "#004c98", fontSize: "16px", fontWeight: "600" }}
            className="font-semibold lg:text-[16px] text-[10px]  text-[#004c98]"
          >
            If you need any further information, please do not hesitate to
            contact me. <br /> <br /> Kind Regards,
          </h4>
          <div className="signature lg:w-[820px] w-[360px] h-fit">
            <table className="logo lg:w-[820px] lg:h-[151px] w-[360px] h-[50px] ">
              <tbody>
                <tr>
                  <td className="relative">
                    <div className=" w-[350px] h-[75px] lg:w-[820px] lg:h-[150px] bg-no-repeat bg-center bg-contain bg-[url(https://i.ibb.co/LvZybc9/finalmd.png)]">
                      <div className="bg-white h-[52px] w-[52px] top-[11px] left-[5px]  lg:h-[125px] lg:w-[125px] rounded-full relative lg:top-[13px] lg:left-[10px] object-contain bg-no-repeat flex justify-center items-center ">
                        {profile !== "" && (
                          <img
                            src={profile}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="social-icons w-full">
              <tbody>
                <tr style={{ padding: "0%" }}>
                  <td className="lg:w-[70%] w-[50%]">
                    <h2 className="w-full p-[3px] lg:p-[5px] text-[#004c98] lg:text-[20px] font-semibold text-[13px]">
                      {name}
                    </h2>

                    <p className="w-full p-[3px] lg:p-[5px] text-[13px] lg:text-[18px] text-[#004c98]">
                      <i>{designation}</i>
                    </p>
                    <h2 className="w-full p-[3px] lg:p-[5px] text-[#004c98] lg:text-[20px] font-semibold text-[13px]">
                      {industry}
                    </h2>
                    <br />
                    <br />
                  </td>

                  <td className="p-2 text-center no-underline flex justify-evenly w-fit gap-1 lg:gap-2 lg:p-0">
                    <a href="https://www.facebook.com/MDSOUTHPORT">
                      <div className="lg:h-[30px] lg:w-[30px] h-[20px] w-[20px] bg-[url(https://dasraa.com/MultiDynamicEmail/facebook.png)] bg-contain"></div>
                    </a>
                    <a href="https://www.instagram.com/mdsouthport/">
                      <div className="lg:h-[30px] lg:w-[30px] h-[20px] w-[20px] bg-[url(https://dasraa.com/MultiDynamicEmail/insta.png)] bg-contain"></div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/multi-dynamic-61bb8b287/

              "
                    >
                      <div className="lg:h-[30px] lg:w-[30px] h-[20px] w-[20px] bg-[url(https://dasraa.com/MultiDynamicEmail/linkedin.png)] bg-contain"></div>
                    </a>
                    <a href="https://twitter.com/_multidynamic">
                      <div className="lg:h-[30px] lg:w-[30px] h-[20px] w-[20px] bg-[url(https://dasraa.com/MultiDynamicEmail/twitter.png)] bg-contain"></div>
                    </a>
                    <a
                      href="https://www.youtube.com/@MultiDynamicSouthport
             "
                    >
                      <div className="lg:h-[30px] lg:w-[30px] h-[20px] w-[20px] bg-[url(https://dasraa.com/MultiDynamicEmail/youtube.png)] bg-contain"></div>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full relative h-fit">
              <tbody>
                <tr className="">
                  <td className="lg:w-2/4 w-2/4">
                    <table className="address">
                      <tbody>
                        <tr>
                          <td>
                            <div className="lg:h-[25px] lg:w-[25px] h-[15px] w-[15px] bg-contain bg-[url(https://dasraa.com/MultiDynamicEmail/phone.png)]"></div>
                          </td>
                          <td>
                            <p className={`lg:text-[15px] text-[11px]`}>
                              <a href={`tel:+${phone1} `}>{phone1}</a>
                              &nbsp;&nbsp;•&nbsp;&nbsp;
                              <a href={`tel:+${phone2} `}>{phone2}</a>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="lg:h-[25px] lg:w-[25px] h-[15px] w-[15px] bg-contain bg-[url(https://dasraa.com/MultiDynamicEmail/email.png)]"></div>
                          </td>
                          <td>
                            <p className={`lg:text-[15px] text-[11px]`}>
                              <a href={`mailto: ${email}`}>{email}</a>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="lg:h-[25px] lg:w-[25px] h-[15px] w-[15px] bg-contain bg-[url(https://dasraa.com/MultiDynamicEmail/location.png)]"></div>
                          </td>
                          <td>
                            <p className={`lg:text-[15px] text-[11px]`}>
                              <a href={`#`} className="pointer-event-none">
                                {address}
                              </a>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="lg:h-[25px] lg:w-[25px] h-[15px] w-[15px] bg-contain bg-[url(https://dasraa.com/MultiDynamicEmail/website.png)]"></div>
                          </td>
                          <td>
                            <p className={`lg:text-[15px] text-[11px]`}>
                              <a href={`${website}`}>{website}</a>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="flex gap-[4px] w-fit h-auto  mr-[10px] flex-row-reverse ">
                    {/* <AwardSection
                      award={award}
                      key={JSON.stringify(new Date().getMilliseconds)}
                    /> */}
                    {award?.map(
                      (val, index) =>
                        val !== "" && (
                          <img
                            key={`${val}_${index}`}
                            src={val}
                            alt=""
                            className={`lg:w-[130px] lg:h-[130px] object-contain object-center w-[70px] h-[70px]`}
                          />
                          // <li key={`${val}_${index}`}>{val}</li>
                        )
                    )}
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="footer lg:w-[820px] w-[350px] h-1/5">
              <tbody>
                <tr>
                  <td className="lg:w-[820px] w-[350px] h-[20px]">
                    <div className="lg:w-full lg:h-[60px] h-full bg-contain bg-[url(https://dasraa.com/MultiDynamicEmail/Footer.png)]"></div>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="desclaimer h-1/5 lg:w-full w-[350px]">
              <tbody>
                <tr>
                  <td>
                    <p className="text-[#666666] lg:text-[11px] text-[9px] leading-tight">
                      <b>Disclaimer:</b> This email is for its intended
                      recipient only. If this email has been sent to you by
                      error or contains private or confidential information,
                      including the contact details of other persons, then you
                      must not copy and distribute this information. Any views
                      expressed in this email are those of the individual sender
                      and may not necessarily reflect the views of
                      &nbsp;Multi&nbsp;Dynamic&nbsp;Pty Ltd. The sender believes
                      this communication is free from any virus, worm, Trojan
                      horse and/ or malicious code when sent. By reading this
                      message and opening any attachments, the recipient accepts
                      full responsibility for taking protective and remedial
                      action as required.
                      <br />
                      <strong>Privacy Policy:</strong>[
                      <a href="https://multidynamic.com.au/images/Privacy_policies.pdf">
                        Click Here
                      </a>
                      ]
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
);
Preview.displayName = "Preview";
export default Preview;
