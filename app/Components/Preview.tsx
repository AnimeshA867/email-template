import React from "react";
import Image from "next/image";
import AwardSection from "./AwardSection";
import Link from "next/link";
const Preview = ({
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
}: {
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
}) => {
  return (
    <div className="h-auto w-1/2">
      {" "}
      <h4 style={{ color: "#004c98", fontSize: "16px", fontWeight: "600" }}>
        If you need any further information, please do not hesitate to contact
        me. <br /> <br /> Kind Regards,
      </h4>
      <div className="signature" style={{ width: "820px" }}>
        {/* <div className="logo" style={{ width: "820px" }}>
          <Image
            height={600}
            width={600}
            src={profile}
            alt="MultiDynamic"
            style={{ width: "820px", height: "auto" }}
          />
        </div> */}
        <table className="logo" style={{ width: "820px", height: "151px" }}>
          <tbody>
            <tr>
              <td>
                <Image
                  src="https://dasraa.com/MultiDynamicEmail/finalmd.png"
                  alt="MultiDynamic"
                  style={{ width: "820px", height: "auto" }}
                  width={820}
                  height={400}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <table className="social-icons" style={{ width: "100%" }}>
          <tbody>
            <tr style={{ padding: "0%" }}>
              <td style={{ width: "70%", padding: "0%" }}>
                <h2
                  style={{
                    width: "100%",
                    padding: "5px",
                    color: "#004c98",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  {name}
                </h2>

                <p
                  style={{
                    width: "100%",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#004c98",
                  }}
                >
                  <i>{designation}</i>
                </p>
                <h2
                  style={{
                    width: "100%",
                    padding: "5px",
                    color: "#004c98",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  {industry}
                </h2>
                <br />
                <br />
              </td>

              <td
                style={{
                  //   width: "40%",
                  padding: "0%",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <a href="https://www.facebook.com/MDSOUTHPORT">
                  <Image
                    src="https://dasraa.com/MultiDynamicEmail/facebook.png"
                    alt=""
                    height={30}
                    width={30}
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
                <a href="https://www.instagram.com/mdsouthport/">
                  <Image
                    src="https://dasraa.com/MultiDynamicEmail/insta.png"
                    alt=""
                    height={30}
                    width={30}
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/multi-dynamic-61bb8b287/

              "
                >
                  <Image
                    height={30}
                    width={30}
                    src="https://dasraa.com/MultiDynamicEmail/linkedin.png"
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
                <a href="https://twitter.com/_multidynamic">
                  <Image
                    height={30}
                    width={30}
                    src="https://dasraa.com/MultiDynamicEmail/twitter.png"
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
                <a
                  href="https://www.youtube.com/@MultiDynamicSouthport
             "
                >
                  <Image
                    height={30}
                    width={30}
                    src="https://dasraa.com/MultiDynamicEmail/youtube.png"
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ width: "600px" }}>
                <table className="address">
                  <tbody>
                    <tr>
                      <td>
                        <Image
                          height={25}
                          width={25}
                          src="https://dasraa.com/MultiDynamicEmail/phone.png"
                          alt=""
                          style={{ width: "25px", height: " 25px" }}
                        />
                      </td>
                      <td>
                        <p>
                          <a href="tel:+61756089845 ">{phone1}</a>
                          &nbsp;&nbsp;•&nbsp;&nbsp;
                          <a
                            href="tel: +61484575612
                      "
                          >
                            {phone2}
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Image
                          height={25}
                          width={25}
                          src="https://dasraa.com/MultiDynamicEmail/email.png"
                          alt=""
                          style={{ width: "25px", height: " 25px" }}
                        />
                      </td>
                      <td>
                        <p>
                          <a href="mailto: rentals.southport@multidynamic.com.au">
                            {email}
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Image
                          height={25}
                          width={25}
                          src="https://dasraa.com/MultiDynamicEmail/location.png"
                          alt=""
                          style={{ width: "25px", height: " 25px" }}
                        />
                      </td>
                      <td>
                        <p>
                          <a href="https://goo.gl/maps/cABKBmhmYtkP4ZiS7">
                            {address}
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Image
                          height={25}
                          width={25}
                          src="https://dasraa.com/MultiDynamicEmail/website.png"
                          alt=""
                          style={{ width: "25px", height: " 25px" }}
                        />
                      </td>
                      <td>
                        <p>
                          <a href="https://southport.multidynamic.com.au/">
                            {website}
                          </a>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td style={{ display: "flex", gap: "4px" }}>
                <AwardSection award={award} />
                {/* <Image
                  height={130}
                  width={130}
                  src={profile}
                  alt=""
                  style={{ width: "130px", height: "130px" }}
                /> */}
              </td>
            </tr>
          </tbody>
        </table>

        <table className="footer" style={{ width: "820px", height: "10%" }}>
          <tbody>
            <tr>
              <td style={{ width: "820px" }}>
                <Image
                  src="https://dasraa.com/MultiDynamicEmail/Footer.png"
                  height={900}
                  width={900}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* <!-- <div className="footer" style="width: 820px ; height:10%;">
        <img src="https://dasraa.com/MultiDynamicEmail/Footer.png" />
      </div> --> */}

        <table className="desclaimer" style={{ height: "10%", width: "100%" }}>
          <tbody>
            <tr>
              <td>
                <p
                  style={{
                    color: "#666666",
                    fontSize: "11px",
                    lineHeight: "100%",
                  }}
                >
                  <b>Disclaimer:</b> This email is for its intended recipient
                  only. If this email has been sent to you by error or contains
                  private or confidential information, including the contact
                  details of other persons, then you must not copy and
                  distribute this information. Any views expressed in this email
                  are those of the individual sender and may not necessarily
                  reflect the views of &nbsp;Multi&nbsp;Dynamic&nbsp;Pty Ltd.
                  The sender believes this communication is free from any virus,
                  worm, Trojan horse and/ or malicious code when sent. By
                  reading this message and opening any attachments, the
                  recipient accepts full responsibility for taking protective
                  and remedial action as required.
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
  );
};

export default Preview;
