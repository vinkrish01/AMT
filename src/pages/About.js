import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
      <Box
        display="flex"
        flexDirection="row"
        alignItems="stretch" // Align items along the cross axis (stretch in this case)
        gap={2} // Spacing between child elements
        padding={2} // Optional padding for the container
        height="100%"
      >
        <Box bgcolor="lightblue" p={2}>
          <img
            src="/images/lakshmiGodess.jpg"
            alt="lakshmi image"
            width="380px"
            height="100%"
          />
        </Box>
        <Box bgcolor="lightskyblue" p={2}>
          <p>
            Anapanahalli Maha Lakshmi is the goddess of wealth and prosperity,
            both material and spiritual. Worshipped as ancestral home godess by
            several hindus from ancient times. Temple is located at Anapanahalli
            Village, near Honnudike, Tumkur district, Karnataka.
          </p>
          <p>
            A special worship is also offered to Lakshmi on the auspicious
            Varalakshmi vratha festival and on Deepavali night
          </p>
          <p>
            It is believed that worshipping Anapanahalli Maha Lakshmi on
            Vara-Lakshmi vratha festival is equivalent to worshipping
            Ashtalakshmi i.e. the eight Goddesses of Wealth (Sri), Earth (Bhu),
            Learning (Saraswati), Love (Priti), Fame (Kirti), Peace (Shanti),
            Pleasure (Tushti) and Strength (Pushti) On the full moon night
            following Dasara or Durga Puja, Hindus worship Lakshmi ceremonially
            at home, pray for her blessings and invite neighbors to attend the
            puja. It is believed that on this full moon night the goddess
            herself visits the homes and replenishes the inhabitants with wealth
          </p>
        </Box>
      </Box>
  );
};

export default About;
