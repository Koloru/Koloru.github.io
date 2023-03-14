import Button from "../components/Button";

// bg from home
import bg from "../assets/home/bg.jpg";
import bg2 from "../assets/home/bg2.jpg";
import bg3 from "../assets/home/bg3.jpg";

const Construction = () => {
	const navLinks = [
		{ text: "Github", link: "https://github.com/Koloru" },
		{ text: "LinkedIn", link: "https://www.linkedin.com/in/infanteneil/" },
		{ text: "Email", link: "mailto:Koloru@Koloru.dev" },
	];

	const pictureArray = [bg, bg2, bg3];
	const randomIndex = Math.floor(Math.random() * pictureArray.length);
	return (
		<div className='h-screen w-screen flex flex-col gap-4 items-center justify-center font-raleway text-white'>
			<div
				className='absolute h-screen w-screen -z-50 bg-cover bg-no-repeat bg-center'
				style={{ backgroundImage: `url(${pictureArray[randomIndex]})` }}
			></div>
			<div className='absolute h-screen w-screen -z-20 bg-[#9fd8cb] opacity-40'></div>
			<h1 className='font-bold text-4xl lg:text-6xl xl:text-9xl drop-shadow-lg shadow-emerald-300'>
				Come back later
			</h1>
			<p className=''>This page is currently under construction</p>
			<p className='text-4xl tracking-widest opacity-50 font-bold absolute bottom-[100px]'>
				KOLORU
			</p>
			<div className='flex justify-between gap-2 absolute bottom-5'>
				{navLinks.map((link) => (
					<Button text={link.text} link={link.link} key={link.text} />
				))}
			</div>
		</div>
	);
};

export default Construction;
