import React from "react";

const address = {
  name: "Shri Anapanahalli Mahalakshmi Trust",
  street: "Anapanahalli, Honnudike",
  city: "Tumkur",
  state: "Karnataka",
  zip: "572122",
  country: "India",
};

const AddressComponent = ({ address }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "400px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.5",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ marginBottom: "8px", fontSize: "18px", color: "#333" }}>
        Address
      </h2>
      <p style={{ margin: "0", fontWeight: "bold" }}>{address.name}</p>
      <p style={{ margin: "4px 0" }}>{address.street}</p>
      <p style={{ margin: "4px 0" }}>
        {address.city}, {address.state} {address.zip}
      </p>
      <p style={{ margin: "4px 0", color: "#555" }}>{address.country}</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Address Details</h1>
      <AddressComponent address={address} />
    </div>
  );
};

export default Contact;
