import ApexChart from "./ApesCharts";
import { useTheme } from '../ThemeContext';
export const Dashboard = () => {
    const {theme} = useTheme()
    return (
        <>          
            <div className={`bg-custom-color ${theme==='dark' ? 'text-white bg-dark-custom-color' : 'text-gray-900 bg-custom-color'} flex flex-col items-center lg:py-32 lg:justify-center`}>
                <div className="w-full px-10">
                    <div className="bg-transparent flex justify-center py-10">
                        <div className='flex lg:hidden bg-cover bg-center w-24 h-8 bg-[url("./img/Akashi4_1.png")]'></div>
                    </div>
                    <div className="flex flex-col lg:flex lg:flex-row items-center lg:justify-center">
                        <div className="lg:order-1 order-2  sm:w-[520px] px-3">
                            <ApexChart/>
                            <div className="mb-[30px] py-4 flex flex-col bg-transparent border-2 rounded-3xl px-8"
                            style={{boxShadow: "-4px 0px 4px rgba(0, 0, 0, 0.25), 0px -4px 4px rgba(0, 0, 0, 0.25), 4px 0px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                                <div className="flex flex-row justify-between">
                                    <div>AKASHI Holders</div>
                                    <div>1,263</div>
                                </div>
                                <div className="py-4 flex flex-row justify-around">
                                <button className="w-32 h-10 rounded-full text-white drop-shadow-[0_3px_0px_rgba(0,0,0,1)]" style={{background:"linear-gradient(180deg, #CC6832 0%, rgba(204, 104, 50, 0.6) 100%)"}}>Buy</button>
                                <button className="w-32 h-10 rounded-full text-white drop-shadow-[0_3px_0px_rgba(0,0,0,1)]" style={{background:"linear-gradient(180deg, #CC6832 0%, rgba(204, 104, 50, 0.6) 100%)"}}>Burn</button>
                                <button className="w-32 h-10 rounded-full text-white drop-shadow-[0_3px_0px_rgba(0,0,0,1)]" style={{background:"linear-gradient(180deg, #CC6832 0%, rgba(204, 104, 50, 0.6) 100%)"}}>Supply</button>
                                </div>
                                    
                            </div>
                        </div>
                        <div className="flex flex-col order-1 lg:order-2  sm:w-[520px]">
                            <div className="mb-[30px] py-4 bg-transparent border-2 rounded-3xl "
                            style={{boxShadow: "-4px 0px 4px rgba(0, 0, 0, 0.25), 0px -4px 4px rgba(0, 0, 0, 0.25), 4px 0px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                                <div class="grid lg:grid-cols-2 lg:grid-rows-2 lg:py-4 lg:gap-x-44 gap-3 grid-cols-1 grid-rows-4 px-8">
                                    <div className="text-center lg:text-left">Total Supply</div>
                                    <div className="text-center lg:text-right">500,000,000,000,000</div>
                                    <div className="text-center lg:text-left">Liquid Supply</div>
                                    <div className="text-center lg:text-right ">15,000,000,000,000</div>
                                </div>
                            </div>

                            <div className="mb-[30px] py-4 bg-transparent border-2 rounded-3xl "
                            style={{boxShadow: "-4px 0px 4px rgba(0, 0, 0, 0.25), 0px -4px 4px rgba(0, 0, 0, 0.25), 4px 0px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                                    <div class="grid lg:grid-cols-2 lg:grid-rows-4 lg:py-4 gap-3 grid-cols-1 grid-rows-8 px-8">
                                    <div className="text-center lg:text-left">Total Liquidity</div>
                                    <div className="text-center lg:text-right">$50,000</div>
                                    <div className="text-center lg:text-left">Treasury Balance</div>
                                    <div className="text-center lg:text-right">5,000,000,000,000</div>
                                    <div className="text-center lg:text-left">AKASHI Burned</div>
                                    <div className="text-center lg:text-right">2,000,000</div>
                                    <div className="text-center lg:text-left">Rewards Distributed</div>
                                    <div className="text-center lg:text-right">200,000,000</div>
                                </div>
                            </div>
                            <div className="py-4 bg-transparent border-2 rounded-3xl "
                            style={{boxShadow: "-4px 0px 4px rgba(0, 0, 0, 0.25), 0px -4px 4px rgba(0, 0, 0, 0.25), 4px 0px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                                    <div class="grid lg:grid-cols-2 lg:grid-rows-2 lg:py-4 gap-3  grid-cols-1 grid-rows-4 px-8">
                                    <div className="text-center lg:text-left">AKASHIx Minted</div>
                                    <div className="text-center lg:text-right">0</div>
                                    <div className="text-center lg:text-left">AKASHIx Staked</div>
                                    <div className="text-center lg:text-right">0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}