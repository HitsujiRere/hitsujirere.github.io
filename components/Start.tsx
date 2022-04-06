import FloatBoxSketch from "./FloatBoxSketch"

const Start = () => {
  return (
    <div id="start" className='h-screen bg-transparent duration-500'>
      <FloatBoxSketch />

      <div className='h-full mx-auto max-w-screen-lg flex items-center px-4'>
        <div className="space-y-5">
          <h2 className="text-2xl font-light text-yellow-400">Let{"'"}s go!</h2>
          <p className="text-5xl font-bold text-white">What will we make with a computer?</p>
          <p className="text-xl font-bold text-gray-400">I{"'"}m Dejima Mikihide, a computer programmer.</p>
        </div>
      </div>
    </div>
  );
};

export default Start;
