import { LegacyRef, RefObject, useRef, useState } from "react";
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerCloseButton,
	useDisclosure,
	Button,
	Input,
} from "@chakra-ui/react";

export const DrawerExample = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button colorScheme="teal" onClick={onOpen}>
				Sign Up
			</Button>

			<Drawer
				onClose={onClose}
				isOpen={isOpen}
				size="lg"
				placement="right"
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Create an account!!</DrawerHeader>
					<DrawerBody>
						<form
							id="my-form"
							onSubmit={(e) => {
								e.preventDefault();
								console.log("submitted");
							}}
						>
							Username
							<Input
								name="username"
								placeholder="your unique name"
							/>
							Email
							<Input
								name="email"
								placeholder="we won't spam :)"
							/>
							Password
							<Input
								name="password"
								placeholder="minimum 8 characters"
							/>
						</form>
						<br />
						<Button colorScheme="teal">Sign Up</Button>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};
