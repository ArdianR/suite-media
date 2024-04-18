import Navbar from '@/components/Navbar';
import { Button, Image, Input } from '@nextui-org/react';
import { NextPage } from 'next';
import { ChevronRightIcon, PlayCircleIcon } from '@heroicons/react/24/outline';

interface Props {}

const Home: NextPage<Props> = () => {
	const pets = [
		{
			code: 'MO231',
			name: 'Pomeranian White',
			gender: 'Male',
			age: '02',
			price: '6.900.000',
			alt: 'pets-1',
		},
		{
			code: 'MO502',
			name: 'Poodle Tiny Yellow',
			gender: 'Female',
			age: '02',
			price: '3.900.000',
			alt: 'pets-2',
		},
		{
			code: 'MO102',
			name: 'Poodle Tiny Sepia',
			gender: 'Male',
			age: '02',
			price: '4.000.000',
			alt: 'pets-3',
		},
		{
			code: 'MO512',
			name: 'Alaskan Malamute Grey',
			gender: 'Male',
			age: '02',
			price: '8.900.000',
			alt: 'pets-4',
		},
		{
			code: 'MO231',
			name: 'Pembroke Corgi Cream',
			gender: 'Male',
			age: '02',
			price: '7.900.000',
			alt: 'pets-5',
		},
		{
			code: 'MO502',
			name: 'Pembroke Corgi Tricolor',
			gender: 'Female',
			age: '02',
			price: '6.500.000',
			alt: 'pets-6',
		},
		{
			code: 'MO231',
			name: 'Pomeranian White',
			gender: 'Female',
			age: '02',
			price: '6.500.000',
			alt: 'pets-7',
		},
		{
			code: 'MO512',
			name: 'Poodle Tiny Dairy Cow',
			gender: 'Male',
			age: '02',
			price: '5.000.000',
			alt: 'pets-8',
		},
	];
	const products = [
		{
			name: 'Reflex Plus Adult Cat Food Salmon',
			category: 'Dog Food',
			size: '385gm',
			price: '140.000',
			alt: 'product-8',
			gift: 'Free Toy & Free Shaker',
		},
		{
			name: 'Reflex Plus Adult Cat Food Salmon',
			category: 'Cat Food',
			size: '1.5kg',
			price: '165.000',
			alt: 'product-1',
			gift: 'Free Toy & Free Shaker',
		},
		{
			name: 'Cat scratching ball toy kitten sisal rope ball',
			category: 'Toy',
			price: '1.100.000',
			alt: 'product-2',
			gift: 'Free Cat Food',
		},
		{
			name: 'Cute Pet Cat Warm Nest',
			category: 'Toy',
			price: '410.000',
			alt: 'product-3',
			gift: 'Free Cat Food',
		},
		{
			name: 'NaturVet Dogs - Omega-Gold Plus Salmon Oil',
			category: 'Dog Food',
			size: '385gm',
			price: '350.000',
			alt: 'product-4',
			gift: 'Free Toy & Free Shaker',
		},
		{
			name: 'Costumes Fashion Pet Clother Cowboy Rider',
			category: 'Costume',
			size: '1.5kg',
			price: '500.000',
			alt: 'product-5',
			gift: 'Free Toy & Free Shaker',
		},
		{
			name: 'Costumes Chicken Drumsti ck Headband',
			category: 'Costume',
			price: '400.000',
			alt: 'product-6',
			gift: 'Free Toy & Free Shaker',
		},
		{
			name: 'Plush Pet Toy',
			category: 'Toy',
			price: '250.000',
			alt: 'product-7',
			gift: 'Free Toy & Free Shaker',
		},
	];
	const sellers = [
		{
			alt: 'seller-1',
		},
		{
			alt: 'seller-2',
		},
		{
			alt: 'seller-3',
		},
		{
			alt: 'seller-4',
		},
		{
			alt: 'seller-5',
		},
		{
			alt: 'seller-6',
		},
		{
			alt: 'seller-7',
		},
	];

	const knowledges = [
		{
			tag: 'Pet knowledge',
			title: 'What is a Pomeranian? How to Identify Pomeranian Dogs',
			desc: 'The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.',
			alt: 'knowledge-1',
		},
		{
			tag: 'Pet knowledge',
			title: 'Dog Diet You Need To Know',
			desc: "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
			alt: 'knowledge-2',
		},
		{
			tag: 'Pet knowledge',
			title: 'Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively',
			desc: 'Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.',
			alt: 'knowledge-3',
		},
	];
	return (
		<div className='w-full h-screen bg-white xl:flex xl:justify-center'>
			<div className='max-w-screen-xl h-screen'>
				<div className='relative'>
					<Navbar />
					<Image src='./banner-1-mobile.png' className='h-full w-screen z-0 rounded-none sm:hidden' alt='' />
					<Image src='./banner-1.png' className='h-full w-full z-0 rounded-none hidden md:flex' alt='' />
					<div className='absolute top-[15%] md:top-[20%] lg:top-[27%] md:left-[10%] max-w-full md:max-w-[30rem] p-4 md:p-0'>
						<div className='text-[#002A48] font-bold font-gilroy-medium text-[35px] xl:text-[60px]'>One more friend</div>
						<div className='text-[#002A48] font-bold font-gilroy-medium text-[20px] xl:text-[45px] leading-5 md:leading-10'>Thousands more fun!</div>
						<div className='text-[#242B33] font-gilroy-medium text-sm lg:text-medium pt-5 md:pt-2 max-w-full md:max-w-[15rem] lg:max-w-[20rem]'>
							Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
						</div>
						<div className='pt-5 flex gap-5 pb-5'>
							<Button
								variant='ghost'
								className='py-2 px-5 border-[#003459] rounded-full !text-[#003459] font-gilroy-medium text-xs'
								endContent={<PlayCircleIcon className='h-4 w-4 text-[#003459]' />}>
								View Intro
							</Button>
							<Button variant='solid' className='py-2 px-5 bg-[#003459] rounded-full text-white font-gilroy-medium font-normal text-xs'>
								Explore Now
							</Button>
						</div>
					</div>
				</div>
				<div className='bg-gray-50 px-5 md:px-20 py-10'>
					<div className='flex justify-between items-center'>
						<div>
							<div className='text-black font-gilroy-medium text-xs xl:text-medium'>Whats new?</div>
							<div className='text-[#003459] font-gilroy-bold text-sm xl:text-[24px]'>Take a look at some of our pets</div>
						</div>
						<Button
							variant='bordered'
							className='rounded-full xl:p-5 bg-transparent text-xs lg:text-sm text-[#003459] border-[#003459] font-gilroy-medium hidden md:flex'
							endContent={<ChevronRightIcon className='h-4 w-4 text-[#003459]' />}>
							View more
						</Button>
					</div>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-5 pt-5'>
						{pets?.map((pet, index) => {
							return (
								<div key={index} className='w-full h-full p-2 bg-white rounded-lg shadow-lg'>
									<Image src={`./pets/${pet.alt}.png`} alt={pet.alt} className='w-screen h-full rounded-lg' />
									<div className='text-[#00171F] text-xs pt-2 font-gilroy-bold'>
										{pet.code} - {pet.name}
									</div>
									<div className='text-[#667479] flex flex-col xl:flex-row text-center md:text-start text-xs pt-1'>
										<div className='flex'>
											<div className='pr-2 font-gilroy-medium'>Gene:</div>
											<div className='text-[#667479] font-gilroy-bold'>{pet.gender}</div>
										</div>
										<div className='px-2 hidden xl:flex'>.</div>
										<div className='flex'>
											<div className='pr-2 font-gilroy-medium'>Age:</div>
											<div className='text-[#667479] font-gilroy-bold'>{pet.age} months</div>
										</div>
									</div>
									<div className='text-[#00171F] text-sm pt-1 font-gilroy-bold'>{pet.price} VND</div>
								</div>
							);
						})}
					</div>
					<Button
						variant='bordered'
						className='rounded-full w-full p-5 bg-transparent text-sm text-[#003459] border-[#003459] font-gilroy-medium md:hidden mt-5'
						endContent={<ChevronRightIcon className='h-4 w-4 text-[#003459]' />}>
						View more
					</Button>
					<div className='relative'>
						<Image src='./banner-2-mobile.png' className='h-fit w-full pt-10 z-0 md:hidden' alt='' />
						<Image src='./banner-2.png' className='h-fit w-full pt-10 z-0 hidden md:flex' alt='' />
						<div className='absolute top-[10%] md:top-[22%] lg:top-[27%] md:right-[5%] w-full md:w-auto md:max-w-[30rem]'>
							<div className='text-[#002A48] font-bold font-gilroy-medium text-3xl md:text-2xl lg:text-[40px] xl:text-[52px] text-center md:text-end'>One more friend</div>
							<div className='text-[#002A48] font-bold font-gilroy-medium text-xl md:text-medium lg:text-[30px] lg:pt-5 xl:text-[36px] lg:leading-5 leading-10 text-center md:text-end'>Thousands more fun!</div>
							<div className='text-[#242B33] font-gilroy-medium text-xs text-center md:text-end px-5 md:p-0 md:pl-24 md:max-w-[22rem] lg:max-w-[30rem] lg:pt-5'>
								Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
							</div>
							<div className='pt-2 md:pt-4 lg:pt-2 flex md:gap-2 gap-5 pb-5 justify-center md:justify-end'>
								<Button
									variant='ghost'
									className='py-1 px-5 lg:p-5 border-[#003459] rounded-full !text-[#003459] font-gilroy-medium lg:text-sm font-normal text-xs xl:text-medium md:bg-[#FCEED5]'
									endContent={<PlayCircleIcon className='h-full w-4 md:w-4 xl:h-6  text-[#003459]' />}>
									View Intro
								</Button>
								<Button variant='solid' className='py-1 px-5 lg:p-5 bg-[#003459] rounded-full text-white font-gilroy-medium font-normal text-xs lg:text-sm xl:text-medium'>
									Explore Now
								</Button>
							</div>
						</div>
					</div>
					<div className='hidden md:flex justify-between items-center pt-10'>
						<div className=''>
							<div className='text-black font-gilroy-medium text-xs lg:text-medium'>Hard to choose right products for your pets?</div>
							<div className='text-[#003459] font-gilroy-bold text-sm lg:text-[24px]'>Our Products</div>
						</div>
						<Button
							variant='bordered'
							className='rounded-full xl:p-5 bg-transparent text-xs lg:text-sm text-[#003459] border-[#003459] hidden md:flex'
							endContent={<ChevronRightIcon className='h-4 w-4 text-[#003459]' />}>
							View more
						</Button>
					</div>
					<div className='hidden md:grid grid-cols-4 gap-5 pt-10'>
						{products?.map((product, index) => {
							return (
								<div key={index} className='w-full h-full p-2 bg-white rounded-lg shadow-lg'>
									<Image src={`./products/${product.alt}.png`} alt={product.alt} className='w-full h-full rounded-lg' />
									<div className='text-[#00171F] text-sm xl:text-medium pt-2 font-gilroy-bold'>{product.name}</div>
									<div className='text-[#667479] flex flex-col xl:flex-row text-center text-xs pt-1'>
										<div className='flex'>
											<div className='pr-2 font-gilroy-medium'>Product:</div>
											<div className='text-[#667479] font-gilroy-bold'>{product.category}</div>
										</div>
										{product.size && (
											<>
												<div className='px-2 hidden xl:flex'>.</div>
												<div className='flex'>
													<div className='pr-2 font-gilroy-medium'>Size:</div>
													<div className='text-[#667479] font-gilroy-bold'>{product.size}</div>
												</div>
											</>
										)}
									</div>
									<div className='text-[#00171F] text-sm pt-1 font-gilroy-bold'>{product.price} VND</div>
									<div className='text-[#002A48] mt-2 bg-[#FCEED5] rounded-md w-full flex flex-col xl:flex-row text-center p-2 items-center font-gilroy-bold text-sm'>
										<Image src='./icon-1.png' alt='icon' className='w-5 h-5 pr-1' />
										<div className='px-2 text-center text-xs xl:text-sm hidden xl:flex'>.</div>
										{product.gift}
									</div>
								</div>
							);
						})}
					</div>
					<div className='hidden md:flex justify-between items-center pt-10'>
						<div className='flex items-center'>
							<div className='text-black font-gilroy-medium font-medium pr-1 pt-1'>Proud to be part of</div>
							<div className='text-[#003459] text-[18px] xl:text-[24px] font-gilroy-bold'>Pet Sellers</div>
						</div>
						<Button
							variant='bordered'
							className='rounded-full p-5 bg-transparent text-xs xl:text-sm text-[#003459] border-[#003459] font-gilroy-medium'
							endContent={<ChevronRightIcon className='h-4 w-4 text-[#003459]' />}>
							View all our sellers
						</Button>
					</div>
					<div className='hidden md:flex justify-between pt-10 w-full'>
						{sellers?.map((seller, index) => {
							return <Image key={index} src={`./sellers/${seller.alt}.png`} alt={seller.alt} className='w-full h-full' />;
						})}
					</div>
					<div className='relative hidden md:flex'>
						<Image src='./banner-3.png' className='h-fit w-full pt-10 z-0' alt='' />
						<div className='absolute top-[20%] xl:top-[27%] left-[5%] max-w-[30rem] z-10'>
							<div className='text-[#002A48] font-bold font-gilroy-medium text-[35px] xl:text-[52px] flex items-center'>
								Adoption <Image src='./paw.png' alt='paw' className='h-full w-8 xl:w-10 ml-3' />
							</div>
							<div className='text-[#002A48] font-bold font-gilroy-medium text-[20px] xl:text-[36px] leading-5 xl:leading-10'>We need help. so do they.</div>
							<div className='text-[#242B33] font-gilroy-medium text-xs pt-2 xl:pt-5 max-w-52'>
								Adopt a pet and give it a home, <br /> it will be love you back unconditionally.
							</div>
							<div className='pt-2 xl:pt-5 flex gap-5 pb-5 flex-row-reverse justify-end'>
								<Button
									variant='ghost'
									className='py-2 px-5 border-[#003459] rounded-full !text-[#003459] font-gilroy-medium text-xs'
									endContent={<PlayCircleIcon className='h-4 w-4 text-[#003459]' />}>
									View Intro
								</Button>
								<Button variant='solid' className='py-2 px-5 bg-[#003459] rounded-full text-white font-gilroy-medium font-normal text-xs'>
									Explore Now
								</Button>
							</div>
						</div>
					</div>
					<div className='flex justify-between items-center pt-5 md:pt-10'>
						<div className=''>
							<div className='text-black font-gilroy-medium text-xs xl:text-medium'>You already know ?</div>
							<div className='text-[#003459] font-gilroy-bold text-sm xl:text-[24px]'>Useful pet knowledge</div>
						</div>
						<Button
							variant='bordered'
							className='rounded-full p-5 bg-transparent text-xs xl:text-sm text-[#003459] border-[#003459] hidden md:flex'
							endContent={<ChevronRightIcon className='h-4 w-4 text-[#003459]' />}>
							View more
						</Button>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-5 pt-5 md:pt-10'>
						{knowledges?.map((knowledge, index) => {
							return (
								<div key={index} className='w-full h-full p-2 bg-white rounded-lg shadow-lg'>
									<Image src={`./knowledge/${knowledge.alt}.png`} alt={knowledge.alt} className='w-full h-full rounded-lg' />
									<div className='bg-[#00A7E7] text-[7px] xl:text-[10px] font-gilroy-bold rounded-full text-white py-1 px-3 max-w-fit mt-2'>{knowledge.tag}</div>
									<div className='text-[#00171F] text-xs xl:text-medium pt-2 font-gilroy-bold'>{knowledge.title}</div>
									<div className='text-[#00171F] text-[10px] xl:text-sm pt-2 font-gilroy-medium'>{knowledge.desc}</div>
								</div>
							);
						})}
					</div>
					<Button
						variant='bordered'
						className='rounded-full w-full p-5 bg-transparent text-sm text-[#003459] border-[#003459] font-gilroy-medium md:hidden mt-5'
						endContent={<ChevronRightIcon className='h-4 w-4 text-[#003459]' />}>
						View more
					</Button>
				</div>
				<div className='bg-[#FCEED5] rounded-t-3xl px-5 md:px-20 py-10'>
					<div className='bg-[#003459] rounded-xl p-3 md:p-5 flex flex-col md:flex-row justify-between'>
						<div className='font-gilroy-medium font-normal tracking-wider capitalize text-sm xl:text-xl w-[15rem] md:w-[35rem] p-2'>Register now so you don`t miss our programs</div>
						<div className='w-full h-full md:max-h-16 bg-white rounded-xl p-2 gap-2 flex flex-col md:flex-row'>
							<Input
								classNames={{
									base: 'w-full h-full',
									mainWrapper: 'w-full h-full',
									input: 'text-small placeholder:text-[#99A2A5] !placeholder:font-gilroy-medium placeholder:font-thin border-1 rounded-md border-[#99A2A5] h-full p-2',
									inputWrapper: 'font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 bg-white rounded-xl placeholder:font-thin px-0 py-0 h-full',
								}}
								placeholder='Enter your Email'
								size='sm'
								type='search'
							/>
							<Button variant='solid' className='md:px-10 bg-[#003459] rounded-lg text-white font-gilroy-medium font-normal text-xs'>
								Subcribe Now
							</Button>
						</div>
					</div>
					<div className='flex flex-col md:flex-row justify-between w-full pt-5 md:pt-10'>
						<div className='text-[#00171F] w-full md:w-[50%] flex justify-between md:justify-normal md:gap-5 font-gilroy-medium font-medium text-xs md:text-medium'>
							<div>Home</div>
							<div>Category</div>
							<div>About</div>
							<div>Contact</div>
						</div>
						<div className='w-full md:w-[50%] flex justify-center md:justify-end gap-5 pt-5 md:pt-0'>
							<Image src='./facebook.png' alt='' className='rounded-none h-full' />
							<Image src='./twitter.png' alt='' className='rounded-none h-full' />
							<Image src='./instagram.png' alt='' className='rounded-none h-full' />
							<Image src='./youtube.png' alt='' className='rounded-none h-full' />
						</div>
					</div>
					<div className='flex md:hidden justify-center'>
						<Image src={'./monito.svg'} className='h-full w-28 pt-10' alt={'monito'} />
					</div>
					<div className='flex justify-center flex-col-reverse md:flex-row md:justify-between text-center w-full pt-10 md:pt-20 font-gilroy-medium font-thin text-sm text-[#667479]'>
						<div className='pt-5 md:pt-0 text-xs flex justify-center md:items-center'>© 2022 Monito. All rights reserved.</div>
						<div className='flex justify-center items-center'>
							<Image src={'./monito.svg'} className='h-full w-28 hidden md:flex' alt={'monito'} />
						</div>
						<div className='gap-5 md:gap-10 justify-evenly text-xs flex items-center'>
							<div>Terms of Service</div>
							<div>Privacy Policy</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
