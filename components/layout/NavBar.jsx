import {
  Box,
  Flex,
  IconButton,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useEffect, useRef, useCallback } from "react";
import MobileNavBar from "./MobileNavBar";
import { NAV_LINKS, getLinkHref, getLinkLabel } from "./navLinks";

// --- Constants ---
const SCROLL_THRESHOLD_MIN = 50;
const SCROLL_THRESHOLD_MAX = 650;
const DEBOUNCE_MS = 300;
const ACTIVE_BG = "#153243";
const HOVER_STYLES = {
  color: "#fff",
  opacity: 1,
  transform: "scale(1.0)",
  transition: "transform 0.5s",
  backgroundColor: "#637681",
};

export default function Navbar() {
  const [navBarTextColor, setNavBarTextColor] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const navRef = useRef(null);
  const router = useRouter();

  // Set scroll-padding CSS variable based on navbar height
  useEffect(() => {
    if (!navRef.current) return;
    const navbarHeight = navRef.current.offsetHeight;
    document.documentElement.style.setProperty(
      "--scroll-padding",
      `${navbarHeight}px`,
    );
  }, []);

  // Debounced scroll listener to toggle text color
  useEffect(() => {
    let timer;
    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const scrollY = window.scrollY;
        setNavBarTextColor(
          scrollY >= SCROLL_THRESHOLD_MIN && scrollY <= SCROLL_THRESHOLD_MAX,
        );
      }, DEBOUNCE_MS);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = useCallback((index) => {
    setActiveLink(index);
  }, []);

  return (
    <Box as="header" pos="sticky" boxShadow="lg" top={0} zIndex={5}>
      <Box
        as="nav"
        py={4}
        pb={5}
        ref={navRef}
        id="navbar"
        bg="transparent"
        backdropFilter="blur(10px)"
      >
        <Flex>
          {/* Logo / Home button */}
          <Box>
            <IconButton
              aria-label="Menu"
              variant="black"
              color="white"
              size="lg"
              onClick={() => router.pathname !== "/" && router.push("/")}
            >
              <Image
                src="/bm-logo-remove-bg.webp"
                objectFit="contain"
                rounded="xl"
                w={120}
                h={100}
                mb={1}
                pt={1}
                bg={{ base: null, md: navBarTextColor ? "#F5F5F5" : null }}
              />
            </IconButton>
          </Box>

          {/* Navigation links */}
          <Box w="auto">
            <Flex
              spacing={5}
              fontSize={20}
              fontFamily="Inter"
              color={navBarTextColor ? "#fff" : "#000"}
              bg="transparent"
            >
              <MobileNavBar />

              <Flex
                direction="row"
                gap={8}
                display={{ base: "none", md: "flex" }}
              >
                {NAV_LINKS.map((link, index) => (
                  <Link
                    key={link.label}
                    href={getLinkHref(link, router.pathname)}
                    passHref
                  >
                    <ChakraLink
                      _hover={activeLink !== index && HOVER_STYLES}
                      as="p"
                      rounded="xl"
                      opacity={0.9}
                      p={3}
                      bg={activeLink === index ? ACTIVE_BG : "none"}
                      color={activeLink === index && "#fff"}
                      onClick={() => handleLinkClick(index)}
                    >
                      {getLinkLabel(link, router.pathname)}
                    </ChakraLink>
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
