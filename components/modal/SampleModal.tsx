import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
} from "@chakra-ui/react";

export const ModalExample = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button onClick={onOpen}>Open Modal</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>Modal Body</ModalBody>

					<ModalFooter>
						<Button colorScheme="green" mr={3} onClick={onClose}>
							Confirm
						</Button>
						<Button colorScheme="red" mr={3} onClick={onClose}>
							Cancel
						</Button>
						{/* <Button variant="ghost">Secondary Action</Button> */}
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
