'use client'

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
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
          <Accordion title="AUTHENTICATION SYSTEM">
            As an incipient developer, there are not many things that I 
            can provide you with. Still, and since I do understand that
            some minor projects may result interesting from an external
            perspective, an authentication system has been enabled to
            facilitate the app's usage and overall experience.
          </ Accordion>
          <Accordion title="EXPAT COMMUNITY">
            As expats, it's crucial to collaborate with others just so you can
            connect at a deeper level with your host country and its attractions. 
            It's not much, but we thought that collaboratively building a little 
            wiki would make it easier for you. Feel free to share your knowledge 
            there - and stay tuned for more updates!
          </ Accordion>
          <Accordion title="PERSONAL WELL-BEING">
            We do understand that sometimes, we can't prioritize our well-being as 
            much as we'd want to, which becomes even more complicated while dealing
            with a new reality. However, it is still essential to track our mood and 
            take different measures accordingly. Remember: the EU / EEA mental health 
            helpline can be called dialing <b>116 123</b>.
          </ Accordion>
        </ Box>
        <Box>
          <Accordion title="SOLIDARITY AND SUPPORT">
            Since solidarity is this application's main pillar, we thought that one 
            of the best ways of expressing solidarity with others and one's self would 
            be allowing users to open themselves - and sometimes, get a symbolic
            answer. It's always nice to hear something nice, no matter the origin itself.
          </ Accordion>
          <Accordion title="BUREAUCRATIC ASSISTANCE">
            We all agree: it gets extremely difficult to know where to go or who to 
            call when things start getting complicated. No matter if it's about a 
            medical problem or some Visa issues, an AI-powered chat system will help  
            you find relevant information and resources for various bureaucratic
            tasks.
          </ Accordion>
          <Accordion title="SOMETHING ELSE...?">
            Of course, there's more to come! However, since only one person is working on 
            this website's architecture and features, it will take me a bit to find the 
            best implementations. Keep in mind that, as someone who spent some time living  
            in a foreign country, I'd want to prioritize your emotional, social, and 
            psychological needs by keeping this site up to date.
          </ Accordion>
        </ Box>
      </ Container>
    </ Section>
  );
};

export default Features;
