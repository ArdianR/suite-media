'use client';

import React from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
	Image,
	Input,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Avatar,
	User,
} from '@nextui-org/react';
import { MagnifyingGlassIcon, ChevronDownIcon} from '@heroicons/react/24/outline';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className='bg-transparent absolute top-0 !backdrop-blur-0 !backdrop-saturate-100 xl:py-5'>
			<NavbarContent className='sm:hidden' justify='start'>
				<NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className='text-[#00171F]' />
			</NavbarContent>
			<NavbarContent className='sm:hidden' justify='center'>
				<NavbarBrand>
					<Image src={'./monito.svg'} className='h-full w-16' alt={'monito'} />
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className='hidden sm:flex gap-4 w-full' justify='center'>
				<NavbarBrand className='max-w-fit'>
					<Image src={'./monito.svg'} className='h-full md:w-24 lg:w-28 xl:min-w-36' alt={'monito'} />
				</NavbarBrand>
				<NavbarItem>
					<Link href='#' className='text-[#003459] md:text-sm text-medium xl:text-[16px] font-gilroy-bold'>
						Home
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='#' className='text-[#003459] md:text-sm text-medium font-gilroy-bold xl:text-[16px]'>
						Category
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='#' className='text-[#003459] md:text-sm text-medium font-gilroy-bold xl:text-[16px]'>
						About
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='#' className='text-[#003459] md:text-sm text-medium font-gilroy-bold xl:text-[16px]'>
						Contact
					</Link>
				</NavbarItem>
				<NavbarItem>
          <MagnifyingGlassIcon className='h-5 w-5 text-[#00171F] lg:hidden' />
					<Input
						classNames={{
							base: 'hidden lg:flex w-full h-10',
							mainWrapper: 'h-full',
							input: 'placeholder:text-xs placeholder:text-[#99A2A5] !placeholder:font-gilroy-medium placeholder:font-thin',
							inputWrapper: 'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 bg-white rounded-full placeholder:font-thin',
						}}
						placeholder='Search something here!'
						size='sm'
						startContent={<MagnifyingGlassIcon className='h-5 w-5 text-[#667479]' />}
						type='search'
					/>
				</NavbarItem>
				<NavbarItem>
					<Button variant='flat' className='rounded-full bg-[#003459] text-[#FDFDFD] md:px-4 md:py-4 lg:px-8 font-gilroy-bold tracking-wide md:text-xs xl:text-sm'>
						Join the community
					</Button>
				</NavbarItem>
				<NavbarItem>
					<Dropdown placement='bottom-start' className=''>
						<DropdownTrigger>
							<Button variant='ghost' className='w-full border-none text-[#002A48] font-gilroy-bold' disabled endContent={<ChevronDownIcon className='h-4 w-4 text-gray-700' />}>
								<Image src='./flag.png' alt='' className='h-full w-5' />
								VND
							</Button>
						</DropdownTrigger>
						<DropdownMenu aria-label='Actions' variant='flat'>
							<DropdownItem key=''></DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify='end' className='md:hidden'>
				<NavbarItem>
					<MagnifyingGlassIcon className='h-5 w-5 text-[#00171F]' />
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu></NavbarMenu>
		</Navbar>
	);
}
