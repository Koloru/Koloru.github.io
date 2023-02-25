import { Link } from "wouter";
import profilePic from "../assets/atsuko.jpg";

const Navbar = () => {
	return (
		<div className='h-screen flex flex-col items-center gap-10 text-main pt-12'>
			{/* Profile */}
			<div className='flex flex-col items-center gap-2'>
				<div className='w-96 px-14 flex items-end'>
					<img
						src={profilePic}
						alt='Profile Picture'
						className='w-full rounded-md'
					/>
				</div>
				<h1 className='text-4xl tracking-widest font-bold uppercase'>Koloru</h1>
				<p className='font-light'>I'm jealous of the things people create</p>
			</div>

			{/* Navlinks */}

			<ul className='flex flex-col gap-4 text-center w-3/5'>
				<Link href='/' className='group font-light '>
					<span className=' cursor-pointer group-hover hover:shadow-pulse hover:animate-pulse hover:text-purple-600'>
						Home
					</span>
				</Link>
				<Link href='resume' className='group font-light'>
					<span className=' cursor-pointer group-hover hover:shadow-pulse hover:animate-pulse hover:text-purple-600'>
						My Resume
					</span>
				</Link>
				<Link href='about' className='group font-light'>
					<span className=' cursor-pointer group-hover hover:shadow-pulse hover:animate-pulse hover:text-purple-600'>
						What can I do
					</span>
				</Link>
				<Link href='projects' className='group font-light'>
					<span className=' cursor-pointer group-hover hover:shadow-pulse hover:animate-pulse hover:text-purple-600'>
						Stuff I built
					</span>
				</Link>
				<Link href='contact' className='group font-light'>
					<span className=' cursor-pointer group-hover hover:shadow-pulse hover:animate-pulse hover:text-purple-600'>
						Reach out
					</span>
				</Link>
			</ul>
		</div>
	);
};

export default Navbar;
