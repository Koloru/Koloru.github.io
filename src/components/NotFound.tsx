const notFound = () => {
	return (
		<div className='flex flex-col items-center justify-center gap-4 h-full w-full p-4 text-main'>
			<h1 className='text-6xl font-thin uppercase tracking-widest '>
				Please come back later
			</h1>
			<p className='font-light tracking-wide'>
				This page is currently
				<span className='text-indigo-500'> unavailable.</span>
			</p>
		</div>
	);
};

export default notFound;
