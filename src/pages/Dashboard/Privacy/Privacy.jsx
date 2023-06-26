import React  from "react";
import { 
  Section,
  Title,
  Container,
  Items,
  Item,
  ItemContainer,
  Box,
  SubTitle,
  Text
} from "./Privacy.styled";

const PrivacyItem = ({ title, subtext, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</ SubTitle>
          <Text>{subtext}</ Text>
        </ Box>
      </ ItemContainer>
    </ Item>
  );
};

const Privacy = () => {
  return (
    <Section id="privacy">
      <Title>Your privacy</ Title>
      <Container>
        <Items>
          <PrivacyItem
          title="You matter."
          subtext="And we want you to feel respected. That's the reason why we choose you as a priority, no matter the many (and empty) numbers and statistics."
          />
          <PrivacyItem
          title="We're here."
          subtext="But we won't invade what belongs to you only - no one should. Your data, your time, your 'safe place'; it all stays between the two of us."
          />
          <PrivacyItem
          title="You're heard."
          subtext="Still, you are the one deciding who listens. This small project doesn't attempt to push the boundaries you so bravely established."
          />
          <PrivacyItem
          title="Repeat: I matter."
          subtext="And that's why we'll treat your data with the same care we all should treat ourselves. Stay safe, please - and treat yourself kindly."
          />
        </ Items>
      </ Container>
    </ Section>
  )
}

export default Privacy;
