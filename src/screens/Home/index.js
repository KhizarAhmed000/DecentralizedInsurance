import React, { useState } from "react";
import styles from "../../../src/App.css";
import images from "../../services/utilities/images";

export default function Home() {
  // const [activeScreen, setactiveScreen] = useState("Home");



  const data = [
    {
      protocolName: 'BabyDogeSwap',
      coverType: 'Smart Contract Vulnerability',
      imgUrl: 'https://via.placeholder.com/48x48',
      capacity: '~ 166.0k USD',
      coverWording: 'Learn More',
    },
    {
      protocolName: 'BabyDogeSwap',
      coverType: 'Smart Contract Vulnerability',
      imgUrl: 'https://via.placeholder.com/48x48',
      capacity: '~ 166.0k USD',
      coverWording: 'Learn More',
    },
    {
      protocolName: 'BabyDogeSwap',
      coverType: 'Smart Contract Vulnerability',
      imgUrl: 'https://via.placeholder.com/48x48',
      capacity: '~ 166.0k USD',
      coverWording: 'Learn More',
    },

    // Add more objects as needed
  ];

  return (
    <>
      <div className="w-full h-[1475px] shadow flex-col justify-start items-center gap-[150px] inline-flex bg-[#242324]" >
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
            <div className="h-11 px-[25px] py-3 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-[36px] justify-center items-center gap-2.5 flex">
              <div className="text-center text-white text-[15px] font-bold font-Satoshi capitalize leading-tight">
                Connect Wallet
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-[75px] flex">
          <div className="flex-col justify-start items-center gap-5 flex">
            <div className="w-[777px] text-center text-white text-[70px] font-bold font-Satoshi tracking-wide">
              Making Web3 Safer
              <br />
              for Everyone
            </div>
            <div className="px-[30px] py-[15px] bg-gradient-to-r from-purple-600 to-cyan-400 rounded-[36px] border border-black justify-start items-start gap-2.5 inline-flex">
              <div className="text-center text-white text-xl font-medium font-Satoshi capitalize leading-tight">
                Connect Wallet
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-[35px] flex">
            <div className="h-[353px] flex-col justify-start items-start gap-[35px] flex">
              <div className="text-center text-white text-4xl font-bold font-Satoshi">
                New Products
              </div>
              <div className="self-stretch justify-start items-start gap-5 inline-flex">
                {/* <div className="grow shrink basis-0 h-[269px] p-[35px] bg-zinc-800 bg-opacity-30 rounded-[15px] border-2 border-purple-600 backdrop-blur-[25px] flex-col justify-center items-center gap-[30px] inline-flex">
                  <div className="self-stretch grow shrink basis-0 flex-col justify-between items-center flex">
                    <div className="self-stretch h-[49px] justify-start items-start gap-2.5 inline-flex">
                      <img
                        className="w-12 h-12"
                        src="https://via.placeholder.com/48x48"
                      />
                      <div className="grow shrink basis-0 flex-col justify-center items-start gap-[5px] inline-flex">
                        <div className="text-white text-[22px] font-medium font-Satoshi leading-tight">
                          Extra Finance
                        </div>
                        <div className="px-1 py-0.5 justify-center items-center gap-2.5 inline-flex">
                          <div className="w-[15.50px] h-[19.50px] relative"></div>
                          <div className="text-white text-lg font-normal font-Satoshi leading-tight">
                            Smart Contract Vulnerability
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[108px] flex-col justify-center items-center gap-5 flex">
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-white text-base font-normal font-Satoshi capitalize">
                          Chains
                        </div>
                        <div className="justify-start items-center gap-2.5 flex">
                          <img
                            className="w-6 h-6 rounded-[200px]"
                            src="https://via.placeholder.com/24x24"
                          />
                          <div className="w-6 h-6 relative bg-white rounded-[200px]" />
                        </div>
                      </div>
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-white text-base font-normal font-Satoshi capitalize">
                          Capacity
                        </div>
                        <div className="text-purple-600 text-xl font-bold font-Satoshi leading-tight">
                          ~ 16.6k USD
                        </div>
                      </div>
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-white text-base font-normal font-Satoshi capitalize">
                          Cover Wording
                        </div>
                        <div className="text-teal-600 text-xl font-normal font-Satoshi leading-tight">
                          Learn More
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="bg-cover bg-center grow shrink basis-0 h-[269px] p-[35px] bg-zinc-800 bg-opacity-30 rounded-[15px] border-2 border-purple-600 backdrop-blur-[25px] flex-col justify-center items-center gap-[30px] inline-flex" style={{backgroundImage: images.leaderboard1}}>
                  <div className="self-stretch grow shrink basis-0 flex-col justify-between items-center flex">
                    <div className="self-stretch h-[49px] justify-start items-start gap-2.5 inline-flex">
                      <img
                        className="w-12 h-12"
                        src="https://via.placeholder.com/48x48"
                      />
                      <div className="grow shrink basis-0 flex-col justify-center items-start gap-[5px] inline-flex">
                        <div className="text-white text-[22px] font-medium font-Satoshi leading-tight">
                          GMX V2
                        </div>
                        <div className="px-1 py-0.5 justify-center items-center gap-2.5 inline-flex">
                          <div className="w-[15.50px] h-[19.50px] relative"></div>
                          <div className="text-white text-lg font-normal font-Satoshi leading-tight">
                            Smart Contract Vulnerability
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[108px] flex-col justify-center items-center gap-5 flex">
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-white text-base font-normal font-Satoshi capitalize">
                          Chains
                        </div>
                        <div className="justify-start items-center gap-2.5 flex">
                          <img
                            className="w-6 h-6 rounded-[200px]"
                            src="https://via.placeholder.com/24x24"
                          />
                          <img
                            className="w-6 h-6 rounded-[200px]"
                            src="https://via.placeholder.com/24x24"
                          />
                        </div>
                      </div>
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-white text-base font-normal font-Satoshi capitalize">
                          Capacity
                        </div>
                        <div className="text-red-500 text-xl font-bold font-Satoshi leading-tight">
                          Sold Out
                        </div>
                      </div>
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-white text-base font-normal font-Satoshi capitalize">
                          Cover Wording
                        </div>
                        <div className="text-teal-600 text-xl font-normal font-Satoshi leading-tight">
                          Learn More
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="grow shrink basis-0 h-[269px] p-[35px] bg-zinc-800 bg-opacity-30 rounded-[15px] border-2 border-purple-600 backdrop-blur-[25px] flex-col justify-center items-center gap-[30px] inline-flex">
                  <div className="self-stretch grow shrink basis-0 flex-col justify-between items-center flex">
                    <div className="self-stretch h-[49px] justify-start items-start gap-2.5 inline-flex">
                      <img
                        className="w-12 h-12"
                        src="https://via.placeholder.com/48x48"
                      />
                      <div className="grow shrink basis-0 flex-col justify-center items-start gap-[5px] inline-flex">
                        <div className="text-white text-[22px] font-medium font-Satoshi leading-tight">
                          BabyDogeSwap
                        </div>
                        <div className="px-1 py-0.5 justify-center items-center gap-2.5 inline-flex">
                          <div className="w-[15.50px] h-[19.50px] relative"></div>
                          <div className="text-white text-lg font-normal font-Satoshi leading-tight">
                            Smart Contract Vulnerability
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[108.03px] flex-col justify-center items-center gap-5 flex">
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-white text-base font-normal font-Satoshi capitalize">
                          Chains
                        </div>
                        <div className="justify-start items-center gap-2.5 flex">
                          <div className="h-6 px-[5px] bg-white rounded-[500px] justify-between items-center flex">
                            <div className="w-[14.75px] h-6 relative"></div>
                          </div>
                          <div className="w-6 h-6 relative bg-white rounded-[200px]" />
                        </div>
                      </div>
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-white text-base font-normal font-Satoshi capitalize">
                          Capacity
                        </div>
                        <div className="text-purple-600 text-xl font-bold font-Satoshi leading-tight">
                          ~ 166.0k USD
                        </div>
                      </div>
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-white text-base font-normal font-Satoshi capitalize">
                          Cover Wording
                        </div>
                        <div className="text-teal-600 text-xl font-normal font-Satoshi leading-tight">
                          Learn More
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div>
                  {data.map((item, index) => (
                    <div key={index} className="grow shrink basis-0 mx-2 h-[269px] p-[35px] bg-zinc-800 bg-opacity-30 rounded-[15px] border-2 border-purple-600 backdrop-blur-[25px] flex-col justify-center items-center gap-[30px] inline-flex">
                      <div className="self-stretch grow shrink basis-0 flex-col justify-between items-center flex">
                        <div className="self-stretch h-[49px] justify-start items-start gap-2.5 inline-flex">
                          <img
                            className="w-12 h-12"
                            src={item.imgUrl}
                            alt={`Logo for ${item.protocolName}`}
                          />
                          <div className="grow shrink basis-0 flex-col justify-center items-start gap-[5px] inline-flex">
                            <div className="text-white text-[22px] font-medium font-Satoshi leading-tight">
                              {item.protocolName}
                            </div>
                            <div className="px-1 py-0.5 justify-center items-center gap-2.5 inline-flex">
                              <div className="w-[15.50px] h-[19.50px] relative"></div>
                              <div className="text-white text-lg font-normal font-Satoshi leading-tight">
                                {item.coverType}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-[108.03px] flex-col justify-center items-center gap-5 flex">
                          <div className="self-stretch justify-between items-center inline-flex">
                            
                          </div>
                          <div className="self-stretch justify-between items-center inline-flex">
                            <div className="text-white text-base font-normal font-Satoshi capitalize">
                              Capacity
                            </div>
                            <div className="text-purple-600 text-xl font-bold font-Satoshi leading-tight">
                              {item.capacity}
                            </div>
                          </div>
                          <div className="self-stretch justify-between items-center inline-flex">
                            <div className="text-white text-base font-normal font-Satoshi capitalize">
                              Cover Wording
                            </div>
                            <div className="text-teal-600 text-xl font-normal font-Satoshi leading-tight">
                              {item.coverWording}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-1.5 inline-flex">
              <div className="w-[15px] h-[15px] bg-teal-600 rounded-full" />
              <div className="w-[15px] h-[15px] rounded-full border border-white" />
              <div className="w-[15px] h-[15px] rounded-full border border-white" />
              <div className="w-[15px] h-[15px] rounded-full border border-white" />
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-[35px] flex">
            <div className="h-[216px] flex-col justify-start items-start gap-[35px] flex">
              <div className="text-center text-white text-4xl font-bold font-Satoshi">
                Leaderboard
              </div>
              <div className="self-stretch h-[132px] justify-start items-start gap-5 inline-flex">
                <div className="grow shrink basis-0 self-stretch px-8 py-4 rounded-[15px] flex-col justify-between items-start inline-flex kukkursong bg-white">
                  <div className="w-[136px] flex-col justify-between items-start flex">
                    <div className="text-white text-base font-medium font-Satoshi leading-relaxed">
                      Top Cover Amount
                    </div>
                    <div className="flex-col justify-end items-start gap-0.5 flex">
                      <div className="text-white text-2xl font-bold font-Satoshi leading-relaxed">
                        1.0M
                      </div>
                      <div className="text-white text-base font-medium font-Satoshi leading-relaxed">
                        Assets Covered
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-8 py-4 rounded-[15px] flex-col justify-end items-start gap-0.5 inline-flex" style={{ backgroundImage: images.leaderboard1 }}>
                  <div className="w-[137px] flex-col justify-between items-start flex">
                    <div className="text-white text-base font-medium font-Satoshi leading-relaxed">
                      Top Miner
                    </div>
                    <div className="flex-col justify-end items-start gap-0.5 flex">
                      <div className="text-white text-2xl font-bold font-Satoshi leading-relaxed">
                        3.4M INSUR
                      </div>
                      <div className="text-white text-base font-medium font-Satoshi leading-relaxed">
                        Mined
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch px-8 py-4 rounded-[15px] flex-col justify-end items-start gap-0.5 inline-flex">
                  <div className="w-[147px] flex-col justify-between items-start flex">
                    <div className="text-white text-base font-medium font-Satoshi leading-relaxed">
                      Top Referrer
                    </div>
                    <div className="flex-col justify-end items-start gap-0.5 flex">
                      <div className="text-white text-2xl font-bold font-Satoshi leading-relaxed">
                        86.2K INSUR
                      </div>
                      <div className="text-white text-base font-medium font-Satoshi leading-relaxed">
                        Earned
                      </div>
                    </div>
                  </div>
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
