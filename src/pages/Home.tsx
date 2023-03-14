const Home = () => {
	return (
		//test
		<div className='relative flex flex-col gap-y-5 justify-center w-full h-full p-16 pl-24'>
			<div className='absolute left-[-25px] w-[3px] h-40 bg-main rounded-full'></div>
			<a
				className='absolute right-5 top-3 font-light text-main text-xs tracking-widest'
				href='mailto:koloru@koloru.dev'
			>
				Email me
				<br />
				koloru@koloru.dev
			</a>
			<h1 className='text-7xl font-bold tracking-wider'>Koloru / Neil</h1>
			<p className='text-gray2 pl-1'>
				Frontend Developer -{" "}
				<span className='font-bold text-main'>Manila, Philippines</span>
			</p>
			<p className='text-gray2 font-light pl-1 w-2/4 text-left leading-loose'>
				I'm <span className='font-bold text-main mx-1'>WEB DEVELOPER</span> who
				seeks novel solutions to novel problems. <br />
				knowledge hungry and loves learning new things, I can help you build
				your ideas to life.
				<span className='block mt-6'>I also like dogs and photography</span>
			</p>
			<button className='border border-2 w-fit p-1 px-6 font-bold ml-1 text-center hover:border-main hover:text-white hover:bg-main hover:opacity-70'>
				My Resume
			</button>
		</div>
	);
};

export default Home;
