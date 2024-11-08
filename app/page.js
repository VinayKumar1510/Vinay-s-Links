export default async function Page({ params }) {
    const handle = (await params).handle

    return <div className="relative min-h-screen w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
        
            <div className="photo flex justify-center flex-col items-center gap-5">
            <div className="border border-gray-500 w-[40%] container flex justify-center items-center shadow-[0px_45px_70px_46px_#a3bffa]"></div>
                <img className="h-[250px] mb-4 rounded-full" src="/vinay.jpg" alt="" />
                <span className="font-bold text-3xl text-white">VINAY KUMAR</span>
                <span className="text-xl font-bold text-white mt-2">FULLSTACK DEVELOPER</span>
                <span className="text-lg text-gray-400">Pursuing B.tech (C.S.E) from M.D.University</span>
            </div>

            <div className="flex flex-col justify-center items-center mt-7 gap-6">
                <button className="bg-blue-700  text-xl p-2 w-[30%] text-white rounded-lg outline-none hover:scale-105 hover:shadow-[0px_0px_60px_0px_#4299e1] hover:transition-all delay-75 ease-out"><a href="https://www.linkedin.com/in/vinay-kumar-419b09292/" target="_blank">LinkedIn</a></button>

                <button className="bg-blue-700  text-xl p-2 w-[30%] text-white rounded-lg outline-none hover:scale-105 hover:shadow-[0px_0px_60px_0px_#4299e1] hover:transition-all delay-75 ease-out"><a href="https://github.com/VinayKumar1510" target="_blank">GitHub</a></button>

                <button className="bg-blue-700  text-xl p-2 w-[30%] text-white rounded-lg outline-none hover:scale-105 hover:shadow-[0px_0px_60px_0px_#4299e1] hover:transition-all delay-75 ease-out"><a href="https://www.instagram.com/vinay.kumar_98/" target="_blank">Instagram</a></button>

                <button className="bg-blue-700  text-xl p-2 w-[30%] text-white rounded-lg outline-none hover:scale-105 hover:shadow-[0px_0px_60px_0px_#4299e1] hover:transition-all delay-75 ease-out"><a href="https://x.com/Vinay88140"
                target="_blank">X</a></button>

            </div>
        </div>
    </div>

}
