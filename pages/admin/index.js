import { useState } from "react";
import Map from "../../components";
import Image from "next/image";
import profilePic from "../../public/img1.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { createUser } from "@/firebase/useFirebase";
function Index() {
  const [isClicked, setIsClicked] = useState(false);
  const handleDrawer = () => {
    setIsClicked(!isClicked);
  };
  const closeDrawer = () => {
    setIsClicked(false);
  };
  return (
    <div className="flex flex-row">
      {/* Sidebar starts */}
      <div
        className="w-1/5 bg-[#0C1219]
  h-screen flex-col z-20"
      >
        <div className="px-8 h-full flex w-full flex-col justify-between">
          <div>
            <div className="h-32 w-full flex items-center justify-center text-white">
              Бүтээгдэхүүний нэр
            </div>
            {/* nav */}
            <ul className="mt-24">
              <li
                className="flex w-full justify-between text-gray-200 hover:text-gray-500 cursor-pointer items-center mb-6"
                onClick={closeDrawer}
              >
                <div className="flex items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 23.0312L7.90625 20.3437L2.3125 22.5625C1.95833 22.75 1.60937 22.7396 1.26562 22.5312C0.921875 22.3229 0.75 22.0104 0.75 21.5937V4.15625C0.75 3.88542 0.828125 3.64583 0.984375 3.4375C1.14062 3.22917 1.34375 3.07292 1.59375 2.96875L7.28125 0.96875C7.48958 0.90625 7.69792 0.875 7.90625 0.875C8.11458 0.875 8.32292 0.90625 8.53125 0.96875L16.125 3.625L21.6875 1.40625C22.0417 1.23958 22.3906 1.25521 22.7344 1.45313C23.0781 1.65104 23.25 1.95833 23.25 2.375V20.0312C23.25 20.2604 23.1719 20.4583 23.0156 20.625C22.8594 20.7917 22.6667 20.9167 22.4375 21L16.75 23.0312C16.5417 23.0938 16.3333 23.125 16.125 23.125C15.9167 23.125 15.7083 23.0938 15.5 23.0312ZM15.0625 20.9062V5.125L8.9375 3.0625V18.8438L15.0625 20.9062ZM16.9375 20.9062L21.375 19.4375V3.4375L16.9375 5.125V20.9062ZM2.625 20.5312L7.0625 18.8438V3.0625L2.625 4.53125V20.5312ZM16.9375 5.125V20.9062V5.125ZM7.0625 3.0625V18.8438V3.0625Z"
                      fill="#B5B5B5"
                    />
                  </svg>

                  <span className="text-sm  ml-2">Явц харах</span>
                </div>
              </li>
              <li
                className="flex w-full justify-between text-gray-400 hover:text-gray-500 cursor-pointer items-center mb-6"
                onClick={handleDrawer}
              >
                <div className="flex items-center">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.375 25.5C1.875 25.5 1.4375 25.3125 1.0625 24.9375C0.6875 24.5625 0.5 24.125 0.5 23.625V8.625C0.5 8.125 0.6875 7.6875 1.0625 7.3125C1.4375 6.9375 1.875 6.75 2.375 6.75H9.78125V2.375C9.78125 1.875 9.96875 1.4375 10.3438 1.0625C10.7188 0.6875 11.1562 0.5 11.6562 0.5H14.375C14.875 0.5 15.3125 0.6875 15.6875 1.0625C16.0625 1.4375 16.25 1.875 16.25 2.375V6.75H23.625C24.125 6.75 24.5625 6.9375 24.9375 7.3125C25.3125 7.6875 25.5 8.125 25.5 8.625V23.625C25.5 24.125 25.3125 24.5625 24.9375 24.9375C24.5625 25.3125 24.125 25.5 23.625 25.5H2.375ZM2.375 23.625H23.625V8.625H16.25C16.25 9.20833 16.0573 9.66667 15.6719 10C15.2865 10.3333 14.8021 10.5 14.2188 10.5H11.7812C11.2188 10.5 10.7448 10.3333 10.3594 10C9.97396 9.66667 9.78125 9.20833 9.78125 8.625H2.375V23.625ZM5.25 20.2812H12.7188V19.8438C12.7188 19.4688 12.625 19.1354 12.4375 18.8438C12.25 18.5521 12.0104 18.3542 11.7188 18.25C11.0521 18.0208 10.5313 17.8698 10.1562 17.7969C9.78125 17.724 9.41667 17.6875 9.0625 17.6875C8.66667 17.6875 8.24479 17.7344 7.79688 17.8281C7.34896 17.9219 6.84375 18.0625 6.28125 18.25C5.96875 18.3542 5.71875 18.5521 5.53125 18.8438C5.34375 19.1354 5.25 19.4688 5.25 19.8438V20.2812ZM15.75 18.1875H21.0625V16.625H15.75V18.1875ZM9.0625 16.625C9.54167 16.625 9.94271 16.4583 10.2656 16.125C10.5885 15.7917 10.75 15.3958 10.75 14.9375C10.75 14.4583 10.5885 14.0573 10.2656 13.7344C9.94271 13.4115 9.54167 13.25 9.0625 13.25C8.60417 13.25 8.20833 13.4115 7.875 13.7344C7.54167 14.0573 7.375 14.4583 7.375 14.9375C7.375 15.3958 7.54167 15.7917 7.875 16.125C8.20833 16.4583 8.60417 16.625 9.0625 16.625ZM15.75 14.6562H21.0625V13.0938H15.75V14.6562ZM11.6562 8.625H14.375V2.375H11.6562V8.625Z"
                      fill="#D7D7D7"
                    />
                  </svg>

                  <span className="text-sm  ml-2">Ажилчид</span>
                </div>
              </li>
            </ul>
          </div>

          {/* search */}
          <div className="flex justify-center mb-12 w-full">
            <div className="flex w-full  text-gray-400 hover:text-gray-500 cursor-pointer items-center mb-6">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4062 16.0312C16.2188 15.8438 16.125 15.6146 16.125 15.3438C16.125 15.0729 16.2188 14.8542 16.4062 14.6875L18.9062 12.1875H8.90625C8.63542 12.1875 8.41146 12.099 8.23438 11.9219C8.05729 11.7448 7.96875 11.5208 7.96875 11.25C7.96875 10.9792 8.05729 10.7552 8.23438 10.5781C8.41146 10.401 8.63542 10.3125 8.90625 10.3125H18.8438L16.3125 7.78125C16.1458 7.61458 16.0625 7.40104 16.0625 7.14062C16.0625 6.88021 16.1562 6.65625 16.3438 6.46875C16.5313 6.28125 16.7552 6.1875 17.0156 6.1875C17.276 6.1875 17.5 6.28125 17.6875 6.46875L21.8438 10.625C21.9479 10.7292 22.0208 10.8333 22.0625 10.9375C22.1042 11.0417 22.125 11.1562 22.125 11.2812C22.125 11.4062 22.1042 11.5208 22.0625 11.625C22.0208 11.7292 21.9479 11.8333 21.8438 11.9375L17.7188 16.0625C17.5521 16.2292 17.3385 16.3125 17.0781 16.3125C16.8177 16.3125 16.5938 16.2188 16.4062 16.0312ZM1.875 22.5C1.375 22.5 0.9375 22.3125 0.5625 21.9375C0.1875 21.5625 0 21.125 0 20.625V1.875C0 1.375 0.1875 0.9375 0.5625 0.5625C0.9375 0.1875 1.375 0 1.875 0H10.0312C10.3021 0 10.526 0.0885418 10.7031 0.265625C10.8802 0.442708 10.9688 0.666667 10.9688 0.9375C10.9688 1.20833 10.8802 1.43229 10.7031 1.60937C10.526 1.78646 10.3021 1.875 10.0312 1.875H1.875V20.625H10.0312C10.3021 20.625 10.526 20.7135 10.7031 20.8906C10.8802 21.0677 10.9688 21.2917 10.9688 21.5625C10.9688 21.8333 10.8802 22.0573 10.7031 22.2344C10.526 22.4115 10.3021 22.5 10.0312 22.5H1.875Z"
                  fill="#B5B5B5"
                />
              </svg>
              <span className="text-sm  ml-2">Гарах</span>
            </div>
          </div>
        </div>
        {/* icons */}
      </div>
      {/* Sidebar ends */}
      <Map />
      <div
        className="w-1/3 absolute bg-[#EEF1F4] h-screen z-10 flex flex-col items-center"
        style={{
          left: isClicked ? "20%" : "-34%",
          transition: "all ease .3s",
        }}
      >
        <div className="h-16 bg-white w-4/5 flex items-center rounded-lg justify-between p-5 mt-10">
          <span>Жолооч бүртгэх</span>
          <button
            className="h-8 w-8 bg-[#EEF1F4] rounded-md text-2xl flex justify-center items-center"
            onClick={createUser}
          >
            +
          </button>
        </div>
        {/* employees */}
        <div className="w-4/5 justify-center mt-10">
          <div className="w-full">
            <div className="w-full text-[#62C762]">
              <FiberManualRecordIcon /> Active
            </div>
            <div className="w-full ">
              <div className="w-full bg-white flex h-32 rounded-lg">
                <div className="h-full flex items-center">
                  <Image
                    src={profilePic}
                    width={100}
                    height={100}
                    className="rounded-lg ml-2"
                    style={{ height: "100px", width: "100px" }}
                    alt="profile"
                  />
                </div>
                <div>
                  <h1>ganbold ganbold</h1>
                  <div>
                    <div>
                      <EmailIcon />
                      <span>gandbold@gmail.com</span>
                    </div>
                    <div>
                      <PhoneIcon />
                      <span>77000000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full text-[#5C5C5C]">
              <FiberManualRecordIcon />
              Non-active
            </div>
            <div className="w-full ">
              <div className="w-full bg-white flex h-32 rounded-lg">
                <div className="h-full flex items-center">
                  <Image
                    src={profilePic}
                    width={100}
                    height={100}
                    className="rounded-lg ml-2"
                    style={{ height: "100px", width: "100px" }}
                    alt="profile"
                  />
                </div>
                <div>
                  <h1>ganbold ganbold</h1>
                  <div>
                    <div>
                      <EmailIcon />
                      <span>gandbold@gmail.com</span>
                    </div>
                    <div>
                      <PhoneIcon />
                      <span>77000000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
