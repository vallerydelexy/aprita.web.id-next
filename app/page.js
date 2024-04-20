'use client';

import { Metadata } from 'next';
import Skillset from '@components/Skillset';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Avatar from '@components/Avatar';

import Terminal from '@components/Terminal';
import GeometricLottie from '@components/GeometricLottie';
import { webProjects } from '@utils/SliderData';
import PortofolioCard from '@components/PortofolioCard';
import Whatsapp from '@components/Whatsapp';
import '@splidejs/react-splide/css';

// export const metadata = {
//   title: 'Rizki Aprita',
//   description: 'Rizki Aprita is a web developer',

// }

export default function Home() {
	// const { show, data } = useModalStore((state) => state);

	return (
		<main className='relative overflow-hidden bg-gray-100 pt-4 dark:bg-gray-900'>
			<div className='mx-auto max-w-7xl px-4 md:mt-16'>
				<div className=''>
					<div className='text-center'>
						<Avatar />
					</div>

					<h1 className='text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
						<span className='block text-gray-900 dark:text-gray-50 xl:inline'>
							Rizki Aprita
						</span>
					</h1>
					<h2 className='text-1xl text-center font-extrabold tracking-tight sm:text-5xl md:text-6xl'>
						<span className='block text-indigo-600 dark:text-indigo-300 xl:inline'>
							Visual Designer / Web Developer
						</span>
					</h2>
					<Whatsapp />
					<GeometricLottie />
					<div id='skillset' className='pt-6 text-left'></div>
				</div>
			</div>

			<div
				className='relative my-4 flex flex-col gap-4 px-4 py-4 md:flex-row md:px-6'
				id='portfolio'>
				<div className='order-last flex-grow-0 sm:order-none'>
					<Skillset />
				</div>

				<div className='flex-grow-1'>
					<Splide
						aria-label='Websites & UI/UX'
						options={{
							perPage: 1,
							padding: { right: '4rem' },
							gap: '1em',
							arrows: false,
						}}
						className='mx-auto max-w-screen-md md:rounded-t-lg'>
						{webProjects.map((project, index) => {
							return (
								<SplideSlide key={index}>
									<PortofolioCard
										logo={project.logo}
										image={project.image}
										domain={project.domain}
										title={project.title}
										description={project.description}
										stacks={project.stacks}
										year={project.year}
									/>
								</SplideSlide>
							);
						})}
					</Splide>
				</div>
			</div>
		</main>
	);
}
