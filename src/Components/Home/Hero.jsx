import { Player} from '@lottiefiles/react-lottie-player';
const Hero = () => {
  return (
    <div className="flex items-center md:py-0 py-16 justify-center w-full md:flex-row md:h-screen h-auto flex-col">
      {/* Header intro */}
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center">
        <h1 className=" w-full text-center text-gray-700 md:text-left text-2xl font-bold md:text-5xl">
        Can't Find What To Eat ? 
        <br/> 
        <br/> 
        <div className='text-rose-500'>Bring Out The Chef In You...</div>
        </h1>
        <p className=" w-full text-center md:text-left py-4 text-rose-900">
        Explore a world of delectable recipes on our website. From quick weeknight meals to gourmet delights, find culinary inspiration for every occasion.
        </p>
        
      </div>

      {/* Hero Animation */}
      <div className="flex w-full md:w-1/2 items-center justify-center">
        <Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_ysas4vcp.json"
          className="w-full h-full z-0 object-cover"
          id="player"
        ></Player>
      </div>
    </div>
  )
}

export default Hero