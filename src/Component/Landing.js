export const Landing = () => {
    return(
        <>
           <div className="flex flex-col justify-center items-center md:flex-row bg-custom-color w-full md:py-3 md:justify-between">
                <div className="flex flex-col md:flex-row justify-center items-center md:justify-start">
                    <div className='bg-auto bg-cover w-[140px] h-[90px] bg-[url("./img/Akashism.png")]'></div>
                    <div className="flex flex-col md:py-5 items-center justify-center">
                        <div className='bg-auto bg-cover w-[140px] h-[48px] bg-[url("./img/Akashism_1.png")]'></div>
                        <div className='text-left font-bold'>
                            A reward-based token ecosystem<br/>on the Ethereum blockchain.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:py-5">
                    <div className="md:mr-10 flex flex-col justify-center md:justify-between">
                        <div className="flex flex-col items-center md:flex-row justify-center">
                            <span>Audit By:</span>
                            <div className='-mt-1 w-24 h-8 bg-auto bg-cover bg-[url("./img/certik.png")]'></div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center ">
                            <span>Listed On:</span>
                            <div className="flex flex-row">
                                <div className='mr-5 w-5 h-5 bg-auto bg-cover bg-[url("./img/coinmarketcap.png")]'></div>
                                <div className='w-5 h-5 bg-auto bg-cover bg-[url("./img/coingecko.png")]'></div>
                            </div>
                        </div>
                        <div className="md:mt-2 flex flex-row justify-center items-center mt-28 md:px-3">
                            <div className='mr-7 w-[27px] h-5 bg-auto bg-cover bg-[url("./img/twitter.png")]'></div>
                            <div className='mr-7 w-[21px] h-[17px] bg-auto bg-cover bg-[url("./img/telegram.png")]'></div>
                            <div className='mr-7 w-[24px] h-[17px] bg-auto bg-cover bg-[url("./img/discord.png")]'></div>
                            <div className='mr-7 w-5  h-5 bg-auto bg-cover bg-[url("./img/reddis.png")]'></div>
                            <div className='mr-7 w-4 h-5 bg-auto bg-cover bg-[url("./img/em.png")]'></div>
                        </div>
                    </div>
                    <div className="flex flex-col md:text-left text-center">
                        <div className="flex md:flex-row justify-center my-5 md:mt-2">
                            <button className="mr-2 w-[130px] h-[35px] rounded-full text-white drop-shadow-[0_3px_0px_rgba(0,0,0,1)]" style={{background:"linear-gradient(180deg, #CC6832 0%, rgba(204, 104, 50, 0.6) 100%)"}}>Launch Dapp</button>
                            <button className="w-[130px] h-[35px] rounded-full text-white drop-shadow-[0_3px_0px_rgba(0,0,0,1)]" style={{background:"linear-gradient(180deg, #CC6832 0%, rgba(204, 104, 50, 0.6) 100%)"}}>Buy Akashi</button>
                        </div>
                        <span>AKASHI: 0x00000000000000000000000000000</span>
                        <span>Copyright © 2023 by Akashi Cloud. All Rights Reserved. </span>
                    </div>
                </div>
            </div>
        </>
    )
}