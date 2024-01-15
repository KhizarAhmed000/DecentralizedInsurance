import React from "react";
import styles from "../../../src/App.css";
import { useParams } from 'react-router-dom';


export default function UserHome() {
    const { walletAddress } = useParams();
    console.log('===>',walletAddress);
  return (
    <>
      <div className="w-full bg-[#242324] h-[1241.03px] shadow flex-col justify-start items-center gap-[150px] inline-flex">
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
              {walletAddress.slice(0, 6)}...{walletAddress.slice(-2)}
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
                <div className="grow shrink basis-0 px-8 py-[39px] rounded-[15px] flex-col justify-end items-start gap-0.5 inline-flex">
                  <div className="text-white text-2xl font-bold font-Satoshi leading-relaxed">
                    12.2361 ETH
                  </div>
                  <div className="text-white text-base font-medium font-Satoshi leading-relaxed">
                    Active Cover Amount
                  </div>
                </div>
                <div className="grow shrink basis-0 px-8 py-[39px] rounded-[15px] flex-col justify-end items-start gap-0.5 inline-flex">
                  <div className="text-white text-2xl font-bold font-Satoshi leading-relaxed">
                    40.1287 ETH
                  </div>
                  <div className="text-white text-base font-medium font-Satoshi leading-relaxed">
                    Total Cover Amount
                  </div>
                </div>
                <div className="grow shrink basis-0 px-8 py-[39px] rounded-[15px] flex-col justify-end items-start gap-0.5 inline-flex">
                  <div className="text-white text-2xl font-bold font-Satoshi leading-relaxed">
                    2
                  </div>
                  <div className="text-white text-base font-medium font-Satoshi leading-relaxed">
                    Protocols Covered
                  </div>
                </div>
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
            <div className="h-[419px] flex-col justify-start items-start gap-[21px] flex">
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
                  <div className="w-[30px] h-[30px] relative"></div>
                  <div className="w-[30px] h-[30px] relative" />
                </div>
              </div>
            </div>
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
