const Home = () => {
	return (
		//test
		<div className='flex flex-col gap-y-5 justify-center w-full h-full py-16 pl-24'>
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
				<span className='block mt-6'>
					I also like dogs and taking pictures of random places
				</span>
			</p>
			<button className='border border-2 w-fit p-1 px-6 font-bold ml-1 text-center hover:border-main hover:text-white hover:bg-main hover:opacity-70'>
				My Resume
			</button>
		</div>
	);
};

export default Home;
