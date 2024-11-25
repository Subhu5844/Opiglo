import React from "react";
import UserNavbar from "../../components/userDasboard/UserNavbar"

function Profile() {
  return (
    <div id="user-home">
     <UserNavbar></UserNavbar>
    <div className="flex flex-col gap-[1vw] ml-[18vw] mt-[4vw]" >
      <h3 className="font-bold text-[1.2vw]">
        Customer ID : <span className="font-normal underline">1234567</span>{" "}
      </h3>
      <h3 className="font-bold text-[1.2vw]">
        Name : <span className="font-normal">Michel Rough</span>{" "}
      </h3>
      <h3 className="font-bold text-[1.2vw]">
        Title : <span className="font-normal">Director/Finance</span>{" "}
      </h3>
      <h3 className="font-bold text-[1.2vw]">
        Email : <span className="font-normal">michelRough@abc.com</span>{" "}
      </h3>
      <h3 className="font-bold text-[1.2vw]">
        Work No. : <span className="font-normal">+9881234567</span>{" "}
      </h3>
      <h3 className="font-bold text-[1.2vw]">
        Mobile No. : <span className="font-normal">+2347878795</span>{" "}
      </h3>
      <h3 className="font-bold text-[1.2vw]">
        WhatsApp : <span className="font-normal">+1234569080</span>{" "}
      </h3>
      <h3 className="font-bold text-[1.2vw]">
        Registration No : <span className="font-normal">3994567</span>{" "}
      </h3>
      <h3 className="font-bold text-[1.2vw]">
        VAT No : <span className="font-normal">8734567</span>{" "}
      </h3>
      <h3 className="font-bold text-[1.2vw]">
        Company Name : <span className="font-normal"> ABC Logistic</span>{" "}
      </h3>
      <h3 className="font-bold text-[1.2vw]">
        Physical Address :{" "}
        <span className="font-normal">
          Lorem ipsum dolor sit amet consectetur{" "}
        </span>{" "}
      </h3>
    </div></div>
  );
}

export default Profile;
