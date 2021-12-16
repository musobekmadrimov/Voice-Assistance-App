import React from "react";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import faqs from "./faq.json";

export default function FAQ({index, setIndex}) {
  return (
    <div className="faqSection">
      <Accordion allowToggle index={index}>
        {faqs.map((post, id) => {
          return (
            <AccordionItem key={id}>
              <AccordionButton
              onClick={() => setIndex(post.id - 1)}
              >
                <Box flex="1" textAlign="left">
                  <Text fontWeight="semibold">{post.question}</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} className="answer">{post.ans}</AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
