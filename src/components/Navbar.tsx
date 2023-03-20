import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "wouter";
import profilePic from "../assets/atsuko.jpg";

const Navbar = () => {
	return (
		<div className='relative h-screen flex flex-col items-center justify-between gap-10 text-main py-12'>
			<div className='absolute right-0 top-[40%] w-[3px] h-40 bg-main rounded-full'></div>

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
				<p className='font-light text-sm'>
					I'm jealous of the things people create
				</p>
				{/* Navlinks */}
				<div className='block bg-main w-[25px] h-[1px] mt-4'></div>
				<ul className='flex flex-col gap-4 text-center w-3/5 mt-8'>
					<Link href='/' className='group'>
						<span className=' cursor-pointer group-hover hover:shadow-pulse hover:animate-pulse hover:text-purple-600 font-light hover:font-bold hover:text-lg'>
							Home
						</span>
					</Link>
					<Link href='resume' className='group'>
						<span className=' cursor-pointer group-hover hover:shadow-pulse hover:animate-pulse hover:text-purple-600 font-light hover:font-bold hover:text-lg'>
							My Resume
						</span>
					</Link>
					<Link href='about' className='group'>
						<span className=' cursor-pointer group-hover hover:animate-pulse hover:text-purple-600 font-light hover:font-bold hover:text-lg'>
							Stuff I made
						</span>
					</Link>
					<Link href='projects' className='group'>
						<span className=' cursor-pointer group-hover hover:animate-pulse hover:text-purple-600 font-light hover:font-bold hover:text-lg'>
							Stuff I'm learning
						</span>
					</Link>
					<Link href='contact' className='group font-light'>
						<span className=' cursor-pointer group-hover hover:animate-pulse hover:text-purple-600 font-light hover:font-bold hover:text-lg'>
							Reach out
						</span>
					</Link>
					<Link href='gallery' className='group font-light'>
						<span className=' cursor-pointer group-hover hover:animate-pulse hover:text-purple-600 font-light hover:font-bold hover:text-lg'>
							Random pictures I take
						</span>
					</Link>
				</ul>
			</div>

			{/* Socials */}
			<div className='flex gap-6'>
				<a href='https://github.com/Koloru' target='_blank'>
					<AiFillGithub className='cursor-pointer hover:text-purple-600 hover:animate-pulse text-3xl' />
				</a>

				<a href='https://www.instagram.com/colorspectacle/' target='_blank'>
					<AiFillInstagram className='cursor-pointer hover:text-purple-600 hover:animate-pulse text-3xl' />
				</a>

				<a href='https://www.linkedin.com/in/infanteneil/' target='_blank'>
					<AiFillLinkedin className='cursor-pointer hover:text-purple-600 hover:animate-pulse text-3xl' />
				</a>

				<a href='https://t.me/Koloruuu' target='_blank'>
					<FaTelegramPlane className='cursor-pointer hover:text-purple-600 hover:animate-pulse text-3xl' />
				</a>
			</div>
		</div>
	);
};

export default Navbar;
