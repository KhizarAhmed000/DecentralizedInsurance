import React from "react";
import styles from "../../../src/App.css";
import { useParams } from "react-router-dom";
import images from "../../services/utilities/images";
import { selectWalletAddress } from "../../store/WalletAddress";
import { useSelector } from "react-redux";
export default function UserHome() {
  const walletAddress = useSelector(selectWalletAddress)
  console.log('dasda',walletAddress);
  const CoverData = [
    {
      title: "Active Cover Amount",
      amount: "12.3123 ETH",
      bgImg: "leaderboard1",
    },
    {
      title: "Total Cover Amount",
      amount: "12.3123 ETH",
      bgImg: "leaderboard2",
    },
    {
      title: "Protocols Covered",
      amount: "12.3218 ETH",
      bgImg: "leaderboard3",
    },
    // Add more objects as needed
  ];

  const data = [
    {
      title: "Extra Finance",
      value: "12.2361",
      unit: "ETH",
      address: "0x231j2b41hj",
      date: "07/10/2023 - 07/3/2024",
      status: "Expired",
      actions: ["clipboard", "trashcan"],
    },
    {
      title: "Extra Finance",
      value: "12.2361",
      unit: "ETH",
      address: "0x231j2b41hj",
      date: "07/10/2023 - 07/3/2024",
      status: "Active",
      actions: ["clipboard", "trashcan"],
    },{
      title: "Extra Finance",
      value: "12.2361",
      unit: "ETH",
      address: "0x231j2b41hj",
      date: "07/10/2023 - 07/3/2024",
      status: "Active",
      actions: ["clipboard", "trashcan"],
    },{
      title: "Extra Finance",
      value: "12.2361",
      unit: "ETH",
      address: "0x231j2b41hj",
      date: "07/10/2023 - 07/3/2024",
      status: "Active",
      actions: ["clipboard", "trashcan"],
    },{
      title: "Extra Finance",
      value: "12.2361",
      unit: "ETH",
      address: "0x231j2b41hj",
      date: "07/10/2023 - 07/3/2024",
      status: "Active",
      actions: ["clipboard", "trashcan"],
    },{
      title: "Extra Finance",
      value: "12.2361",
      unit: "ETH",
      address: "0x231j2b41hj",
      date: "07/10/2023 - 07/3/2024",
      status: "Active",
      actions: ["clipboard", "trashcan"],
    },{
      title: "Extra Finance",
      value: "12.2361",
      unit: "ETH",
      address: "0x231j2b41hj",
      date: "07/10/2023 - 07/3/2024",
      status: "Active",
      actions: ["clipboard", "trashcan"],
    },{
      title: "Extra Finance",
      value: "12.2361",
      unit: "ETH",
      address: "0x231j2b41hj",
      date: "07/10/2023 - 07/3/2024",
      status: "Active",
      actions: ["clipboard", "trashcan"],
    },
    // Add more objects as needed
  ];
  return (
    <>
      <div className="w-full bg-[#242324]  shadow flex-col justify-start items-center gap-[150px] inline-flex background">
        <div className="w-full py-[15px] bg-black bg-opacity-60 justify-center items-center gap-[350px] inline-flex">
          <div className="w-[200px] h-[46px] pt-[0.50px] pb-[0.83px] justify-center items-center flex">
            <div className="w-[200px] h-[44.67px] relative flex-col justify-start items-start flex">
              <div className="w-[200.06px] h-[44.73px] relative"></div>
            </div>
          </div>
          <div className="justify-start items-center gap-14 flex">
            <div className="justify-start items-start gap-[60px] flex">
              <div className="w-[45px] h-7 justify-center items-center flex">
                <div className="w-[45px] text-center text-white text-[17px] font-normal font-Satoshi leading-7">
                  Home
                </div>
              </div>
              <div className="justify-center items-center flex">
                <div className="self-stretch justify-start items-center inline-flex">
                  <div className="text-center text-white text-[17px] font-normal font-Satoshi leading-7">
                    Covers
                  </div>
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute"></div>
                  </div>
                </div>
              </div>
              <div className="justify-center items-center flex">
                <div className="text-center text-white text-lg font-normal font-Satoshi leading-7">
                  About
                </div>
              </div>
              <div className="justify-center items-center flex">
                <div className="text-center text-white text-[17px] font-normal font-Satoshi leading-7">
                  Community Claims
                </div>
              </div>
              <div className="justify-center items-center flex">
                <div className="text-center text-white text-[17px] font-normal font-Satoshi leading-7">
                  Data
                </div>
              </div>
            </div>
            <div className="px-[25px] py-3 bg-white rounded-[36px] justify-start items-center gap-2.5 flex">
              <div className="w-[14.75px] h-6 relative"></div>
              <div className="text-center text-black text-[15px] font-medium font-Satoshi capitalize leading-tight relative right-2">
                {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-2)}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-[75px] flex">
          <div className="flex-col justify-start items-center gap-[35px] flex">
            <div className="h-[232px] flex-col justify-start items-start gap-[35px] flex">
              <div className="text-center text-white text-5xl font-bold font-Satoshi">
                Your Covers
              </div>

              <div className="self-stretch h-[132px] justify-start items-start gap-5 inline-flex">
                {CoverData?.map((item, index) => (
                  <div
                    key={index}
                    className={`grow shrink basis-0 self-stretch px-8 py-4 rounded-[30px] flex-col justify-end items-start gap-0.5 inline-flex ${item.bgImg}`}
                  >
                    <div className="w-[350px] flex-col justify-between items-start flex">
                      <div className="text-white text-base font-medium font-Satoshi leading-relaxed">
                        {item.title}
                      </div>
                      <div className="flex-col justify-end items-start gap-0.5 flex">
                        <div className="text-white text-2xl font-bold font-Satoshi leading-relaxed">
                          {item.amount}
                        </div>
                        <div className="text-white text-base font-medium font-Satoshi leading-relaxed">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-[35px] flex">
            <div className="self-stretch px-[3px] justify-center items-center gap-[61px] inline-flex">
              <div className="w-[118.22px] text-center text-white text-2xl font-bold font-Satoshi">
                Protocol
              </div>
              <div className="text-center text-white text-2xl font-bold font-Satoshi">
                {" "}
                Cover Amount
              </div>
              <div className="text-center text-white text-2xl font-bold font-Satoshi">
                Covered Address
              </div>
              <div className="text-center text-white text-2xl font-bold font-Satoshi">
                Cover Period
              </div>
              <div className="w-[153.05px] text-center text-white text-2xl font-bold font-Satoshi">
                Status
              </div>
              <div className="w-[159.39px] text-center text-white text-2xl font-bold font-Satoshi">
                Actions
              </div>
            </div>
            {data?.map((item, index) => (
              <div
                key={index}
                className="w-[1289px] h-[67px] relative bg-white bg-opacity-10 rounded-[15px] border border-white border-opacity-25"
              >
                <div className="left-[45px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                  {item.title}
                </div>
                <div className="left-[233px] top-[21px] absolute text-center">
                  <span className="text-white text-lg font-medium font-Satoshi">
                    {item.value}{" "}
                  </span>
                  <span className="text-white text-lg font-bold font-Satoshi">
                    {item.unit}
                  </span>
                </div>
                <div className="left-[446px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                {item.address?.slice(0, 6)}...{item.address?.slice(-2)}
                </div>
                <div className="left-[651px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                  {item.date}
                </div>
                {item.status == "Expired" && (
                  <div className="px-[18px] py-[9px] left-[935px] top-[11px] absolute bg-white bg-opacity-20 rounded-xl justify-start items-start gap-2.5 inline-flex">
                    <div className="text-center text-white text-lg font-bold font-Satoshi">
                      {item.status}
                    </div>
                  </div>
                )}
                {item.status == "Active" && (
                  <div className="w-[100px] px-[18px] py-[9px] left-[935px] top-[11px] absolute bg-gradient-to-r from-purple-600 to-cyan-400 rounded-xl justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-white text-lg font-bold font-Satoshi">
                      {item.status}
                    </div>
                  </div>
                )}
                <div className="left-[1136px] top-[19px] absolute justify-start items-start gap-2.5 inline-flex">
                  {item.actions.map((action, actionIndex) => (
                    <div
                      key={actionIndex}
                      className="w-[30px] h-[30px] relative cursor-pointer"
                    >
                      <img src={images[action]} alt={action} />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* <div className="h-[419px] flex-col justify-start items-start gap-[21px] flex">
              <div className="w-[1289px] h-[67px] relative bg-white bg-opacity-10 rounded-[15px] border border-white border-opacity-25">
                <div className="left-[45px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                  Extra Finance
                </div>
                <div className="left-[233px] top-[21px] absolute text-center">
                  <span className="text-white text-lg font-medium font-Satoshi">
                    12.2361{" "}
                  </span>
                  <span className="text-white text-lg font-bold font-Satoshi">
                    ETH
                  </span>
                </div>
                <div className="left-[446px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                  0x231j2b41hj
                </div>
                <div className="left-[651px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                  07/10/2023 - 07/3/2024
                </div>
                <div className="w-[100px] px-[18px] py-[9px] left-[935px] top-[11px] absolute bg-gradient-to-r from-purple-600 to-cyan-400 rounded-xl justify-center items-center gap-2.5 inline-flex">
                  <div className="text-center text-white text-lg font-bold font-Satoshi">
                    Active
                  </div>
                </div>
                <div className="left-[1136px] top-[19px] absolute justify-start items-start gap-2.5 inline-flex">
                  <div className="w-[30px] h-[30px] relative"></div>
                  <div className="w-[30px] h-[30px] relative" />
                </div>
              </div>
              <div className="w-[1289px] h-[67px] relative bg-white bg-opacity-10 rounded-[15px] border border-white border-opacity-25">
                <div className="left-[45px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                  Extra Finance
                </div>
                <div className="left-[233px] top-[21px] absolute text-center">
                  <span className="text-white text-lg font-medium font-Satoshi">
                    12.2361{" "}
                  </span>
                  <span className="text-white text-lg font-bold font-Satoshi">
                    ETH
                  </span>
                </div>
                <div className="left-[446px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                  0x231j2b41hj
                </div>
                <div className="left-[651px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                  07/10/2023 - 07/3/2024
                </div>
                <div className="w-[100px] px-[18px] py-[9px] left-[935px] top-[11px] absolute bg-gradient-to-r from-purple-600 to-cyan-400 rounded-xl justify-center items-center gap-2.5 inline-flex">
                  <div className="text-center text-white text-lg font-bold font-Satoshi">
                    Active
                  </div>
                </div>
                <div className="left-[1136px] top-[19px] absolute justify-start items-start gap-2.5 inline-flex">
                  <div className="w-[30px] h-[30px] relative"></div>
                  <div className="w-[30px] h-[30px] relative" />
                </div>
              </div>
              <div className="w-[1289px] h-[67px] relative bg-white bg-opacity-10 rounded-[15px] border border-white border-opacity-25">
                <div className="left-[45px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                  Extra Finance
                </div>
                <div className="left-[233px] top-[21px] absolute text-center">
                  <span className="text-white text-lg font-medium font-Satoshi">
                    12.2361{" "}
                  </span>
                  <span className="text-white text-lg font-bold font-Satoshi">
                    ETH
                  </span>
                </div>
                <div className="left-[446px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                  0x231j2b41hj
                </div>
                <div className="left-[651px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                  07/10/2023 - 07/3/2024
                </div>
                <div className="w-[100px] px-[18px] py-[9px] left-[935px] top-[11px] absolute bg-gradient-to-r from-purple-600 to-cyan-400 rounded-xl justify-center items-start gap-2.5 inline-flex">
                  <div className="text-center text-white text-lg font-bold font-Satoshi">
                    Active
                  </div>
                </div>
                <div className="left-[1136px] top-[19px] absolute justify-start items-start gap-2.5 inline-flex">
                  <div className="w-[30px] h-[30px] relative"></div>
                  <div className="w-[30px] h-[30px] relative" />
                </div>
              </div>
              <div className="w-[1289px] h-[67px] relative bg-white bg-opacity-10 rounded-[15px] border border-white border-opacity-25">
                <div className="left-[45px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                  Extra Finance
                </div>
                <div className="left-[233px] top-[21px] absolute text-center">
                  <span className="text-white text-lg font-medium font-Satoshi">
                    12.2361{" "}
                  </span>
                  <span className="text-white text-lg font-bold font-Satoshi">
                    ETH
                  </span>
                </div>
                <div className="left-[446px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                  0x231j2b41hj
                </div>
                <div className="left-[651px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                  07/10/2023 - 07/3/2024
                </div>
                <div className="px-[18px] py-[9px] left-[935px] top-[11px] absolute bg-white bg-opacity-20 rounded-xl justify-start items-start gap-2.5 inline-flex">
                  <div className="text-center text-white text-lg font-bold font-Satoshi">
                    Expired
                  </div>
                </div>
                <div className="left-[1136px] top-[19px] absolute justify-start items-start gap-2.5 inline-flex">
                  <div className="w-[30px] h-[30px] relative">
                    <img src={images.clipboard} />{" "}
                  </div>
                  <div className="w-[30px] h-[30px] relative">
                    {" "}
                    <img src={images.trashcan} />
                  </div>
                </div>
              </div>
              <div className="w-[1289px] h-[67px] relative bg-white bg-opacity-10 rounded-[15px] border border-white border-opacity-25">
                <div className="left-[45px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                  Extra Finance
                </div>
                <div className="left-[233px] top-[21px] absolute text-center">
                  <span className="text-white text-lg font-medium font-Satoshi">
                    12.2361{" "}
                  </span>
                  <span className="text-white text-lg font-bold font-Satoshi">
                    ETH
                  </span>
                </div>
                <div className="left-[446px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                  0x231j2b41hj
                </div>
                <div className="left-[651px] top-[21px] absolute text-center text-white text-lg font-medium font-Satoshi">
                  07/10/2023 - 07/3/2024
                </div>
                <div className="px-[18px] py-[9px] left-[935px] top-[11px] absolute bg-white bg-opacity-20 rounded-xl justify-start items-start gap-2.5 inline-flex">
                  <div className="text-center text-white text-lg font-bold font-Satoshi">
                    Expired
                  </div>
                </div>
                <div className="left-[1136px] top-[19px] absolute justify-start items-start gap-2.5 inline-flex">
                  <div className="w-[30px] h-[30px] relative"></div>
                  <div className="w-[30px] h-[30px] relative" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="w-[1295px] py-5 border-t border-neutral-700 justify-between items-center inline-flex">
          <div className="w-[334px] h-[27px] relative">
            <div className="w-[17px] left-0 top-[-0.42px] absolute text-slate-500 text-base font-normal font-Satoshi leading-7">
              ©
            </div>
            <div className="left-[61px] top-[-0.42px] absolute text-slate-500 text-base font-normal font-Satoshi leading-7">
              Compound Foundation. All rights reserved.
            </div>
            <div className="left-[17px] top-[-0.42px] absolute text-slate-500 text-base font-normal font-Satoshi leading-7">
              2023
            </div>
          </div>
          <div className="h-[30px] pt-[4.58px] pb-[9.42px] justify-center items-start gap-2.5 flex">
            <div className="w-[26px] h-4 relative rounded-[100px] flex-col justify-start items-start flex">
              <div className="w-[26px] h-4 bg-slate-500" />
              <div className="w-4 h-4 relative rounded-[100px]" />
            </div>
            <div className="w-[26px] h-4 relative flex-col justify-start items-start flex">
              <div className="w-[26px] h-4 bg-slate-500" />
              <div className="w-4 h-4 relative" />
            </div>
            <div className="w-[26px] h-4 relative flex-col justify-start items-start flex">
              <div className="w-[26px] h-4 bg-slate-500" />
              <div className="w-4 h-4 relative" />
            </div>
            <div className="w-[26px] h-4 relative bg-white rounded-[100px] flex-col justify-start items-start flex">
              <div className="w-[26px] h-4 bg-slate-500" />
              <div className="w-4 h-4 relative" />
            </div>
            <div className="w-[26px] h-4 relative flex-col justify-start items-start flex">
              <div className="w-[26px] h-4 bg-slate-500" />
              <div className="w-4 h-4 relative" />
            </div>
            <div className="w-[26px] h-4 relative bg-white rounded-[100px] flex-col justify-start items-start flex">
              <div className="w-[26px] h-4 bg-slate-500" />
              <div className="w-4 h-4 relative" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
