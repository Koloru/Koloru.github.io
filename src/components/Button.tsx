interface props {
	link: string;
	text: string;
}

const Button = ({ link, text }: props) => {
	return (
		<a
			href={link}
			className='relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-bold group'
		>
			<span className='w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-5 top-0 bg-white opacity-[3%]' />
			<span className='absolute top-0 -left-5 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8' />
			<span className='relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-[#4f359b]'>
				{text}
			</span>
			<span className='absolute inset-0 rounded-full' />
		</a>
	);
};

export default Button;
