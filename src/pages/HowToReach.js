import React from 'react';


const HowToReach = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Google Map Location</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444763.02103841706!2d77.1238724!3d13.200512699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafd5ecef815e9d%3A0xb8df6dbb1b149f53!2sAnapanahalli%20Mahalakshmi%20Temple!5e1!3m2!1sen!2sin!4v1732367443957!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Anapanahalli Mahalakshmi Temple Location"
      ></iframe>
    </div>
  );
};

export default HowToReach;
