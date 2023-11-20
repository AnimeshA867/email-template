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
                  <td className=" w-[350px] h-[75px] lg:w-[820px] lg:h-[150px] bg-no-repeat  relative">
                    <img
                      src="https://i.ibb.co/LvZybc9/finalmd.png"
                      alt=""
                      className="absolute top-0 left-0 h-full w-full object-contain"
                    />

                    {profile !== "" && (
                      <img
                        src={profile}
                        alt=""
                        className="object-cover bg-white h-[52px] w-[52px] top-[11px] left-[5px]  lg:h-[125px] lg:w-[125px] rounded-full relative lg:top-[0px] lg:left-[12px] object-contain bg-no-repeat flex justify-center items-center overflow-hidden object-center"
                      />
                    )}
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
                    <table>
                      <tbody>
                        <tr>
                          <td className="px-2">
                            <a href="https://www.facebook.com/MDSOUTHPORT">
                              <img
                                className="lg:h-[30px] lg:w-[30px] h-[20px] w-[20px] object-contain"
                                src="https://dasraa.com/MultiDynamicEmail/facebook.png"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="px-2">
                            <a href="https://www.instagram.com/mdsouthport/">
                              <img
                                className="lg:h-[30px] lg:w-[30px] h-[20px] w-[20px] object-contain"
                                src="https://dasraa.com/MultiDynamicEmail/insta.png"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="px-2">
                            <a
                              href="https://www.linkedin.com/in/multi-dynamic-61bb8b287/

              "
                            >
                              <img
                                className="lg:h-[30px] lg:w-[30px] h-[20px] w-[20px] object-contain"
                                src="https://dasraa.com/MultiDynamicEmail/linkedin.png"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="px-2">
                            <a href="https://twitter.com/_multidynamic">
                              <img
                                className="lg:h-[30px] lg:w-[30px] h-[20px] w-[20px] object-contain"
                                src="https://dasraa.com/MultiDynamicEmail/twitter.png"
                                alt=""
                              />
                            </a>
                          </td>
                          <td className="px-2">
                            <a
                              href="https://www.youtube.com/@MultiDynamicSouthport
             "
                            >
                              <img
                                className="lg:h-[30px] lg:w-[30px] h-[20px] w-[20px] object-contain"
                                src="https://dasraa.com/MultiDynamicEmail/youtube.png"
                                alt=""
                              />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
                            <img
                              src="https://dasraa.com/MultiDynamicEmail/phone.png"
                              alt=""
                              className="lg:h-[25px] lg:w-[25px] h-[15px] w-[15px] object-contain "
                            />
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
                            <img
                              src="https://dasraa.com/MultiDynamicEmail/email.png"
                              alt=""
                              className="lg:h-[25px] lg:w-[25px] h-[15px] w-[15px] object-contain "
                            />
                          </td>
                          <td>
                            <p className={`lg:text-[15px] text-[11px]`}>
                              <a href={`mailto: ${email}`}>{email}</a>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="https://dasraa.com/MultiDynamicEmail/location.png"
                              alt=""
                              className="lg:h-[25px] lg:w-[25px] h-[15px] w-[15px] object-contain "
                            />
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
                            <img
                              src="https://dasraa.com/MultiDynamicEmail/website.png"
                              alt=""
                              className="lg:h-[25px] lg:w-[25px] h-[15px] w-[15px] object-contain "
                            />
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
                    <img
                      src="https://dasraa.com/MultiDynamicEmail/Footer.png"
                      alt=""
                      className="lg:w-full lg:h-[60px] h-full object-contain "
                    />
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
