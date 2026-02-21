import React, { useRef } from "react";
import {
  Flex,
  IconButton,
  Slide,
  useDisclosure,
  Link as ChakraLink,
  useOutsideClick,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NAV_LINKS, getLinkHref, getLinkLabel } from "./navLinks";

export default function MobileNavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  const menuRef = useRef();

  const closeMenu = () => {
    if (isOpen) onToggle();
  };

  useOutsideClick({
    ref: menuRef,
    handler: closeMenu,
  });

  return (
    <>
      <IconButton
        icon={
          isOpen ? <CloseIcon boxSize={4} /> : <HamburgerIcon boxSize={6} />
        }
        aria-label="Mobile Menu"
        variant="outline"
        display={{ base: "block", md: "none" }}
        onClick={onToggle}
        border="none"
        ms={{ base: "200", sm: "300", lg: "100" }}
        zIndex="99"
        css={`
          background-color: transparent;
          &:hover {
            background-color: transparent;
          }
          &:active {
            background-color: #97a3ab;
          }
        `}
      />

      <Slide direction="top" in={isOpen}>
        <Flex
          ref={menuRef}
          direction="column"
          mt={14}
          bg="#fff"
          p={6}
          gap={8}
          ms="auto"
          h={isOpen ? "100%" : "auto"}
          w="50%"
          rounded="md"
          boxShadow={isOpen && "2xl"}
          pos="relative"
          zIndex="99"
          display={isOpen && { base: "block", md: "none" }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={getLinkHref(link, router.pathname)}
              passHref
            >
              <ChakraLink
                as="p"
                color="#000"
                onClick={closeMenu}
                rounded="xl"
                fontSize={20}
                p={2}
              >
                {getLinkLabel(link, router.pathname)}
              </ChakraLink>
            </Link>
          ))}
        </Flex>
      </Slide>
    </>
  );
}
