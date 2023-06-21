'use client'

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Accordion from "../../components/Accordion/Accordion";
import { Section, Title, Container, Box } from "./Features.styled";

const Features = () => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    let element = ref.current;
  
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: true,
        onUpdate: ScrollTrigger.refresh,
      },
    });
  
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);  

  return (
    <Section ref={ref} id="features">
      <Title>FEATURES</ Title>
      <Container>
        <Box>
          <Accordion title="COUNTRY CONNECTION">
            Enables expats to connect with/discover their host country.
            We understand that as an expat, you'd want to see news and 
            events relevant to your location, so you can connect with the 
            local culture and community. We've got you covered thanks to 
            our news feed!
          </ Accordion>
          <Accordion title="EXPAT COMMUNITY">
            Facilitates building connections among expats in the same location.
            As expats, it's crucial to collaborate with others just so you can
            share knowledge and experiences, and we thought that collaboratively 
            building a wiki would make it easier for you.
          </ Accordion>
          <Accordion title="PERSONAL WELL-BEING">
            Provides tools for expats to track their mood and receive relevant advice.
            We do understand that sometimes, we can't prioritize our well-being as 
            much as we'd want to, which becomes even more complicated while dealing
            with a new reality. However, it is still essential to track our mood and 
            receive advice based on our current state.
          </ Accordion>
        </ Box>
        <Box>
          <Accordion title="SOLIDARITY AND SUPPORT">
            Allows expats to show solidarity by buying symbolic coffees for others.
            Since solidarity is this application's main pillar, we thought that one 
            of the best ways of expressing solidarity with others would be buying them 
            a symbolic coffee with encouraging messages. It's always nice to hear 
            something nice, no matter the origin itself.
          </ Accordion>
          <Accordion title="BUREAUCRATIC ASSISTANCE">
            Assists with bureaucratic procedures.
            We all agree: it gets extremely difficult to know where to go or who to 
            call when things start getting complicated. No matter if it's about a 
            medical problem or some Visa issues, our AI-powered chat system will 
            help you find relevant information and resources for various bureaucratic
            tasks.
          </ Accordion>
          <Accordion title="SOMETHING ELSE...?">
            Of course there's more to come! However, and since there's only one person  
            working on this website architecture and features, it will take me a bit 
            to find the best implementations for the expats community. Do not hesitate 
            to let me know about your own ideas and perspective, though! As someone who 
            spent some time living in a foreign country, I'd want to prioritize your 
            emotional, social and psychological needs by keeping this site up to date. 
          </ Accordion>
        </ Box>
      </ Container>
    </ Section>
  );
};

export default Features;
