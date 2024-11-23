
import React from "react";

const Ekanike = () => {
  // Bank details data
  const bankDetails = {
    bankName: "State Bank of Mysore, Honnudike Branch",
    accountName: "SRI MAHALAKSHMI TEMPLU TRU",
    accountNumber: "54053471658",
    ifscCode: "SBMY0040238",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Bank Account Details</h1>
      <table border="1" style={{ width: "60%", textAlign: "left", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <th style={{ padding: "8px", backgroundColor: "#f2f2f2", width: "40%" }}>
              Bank Name
            </th>
            <td style={{ padding: "8px" }}>{bankDetails.bankName}</td>
          </tr>
          <tr>
            <th style={{ padding: "8px", backgroundColor: "#f2f2f2" }}>
              Account Name
            </th>
            <td style={{ padding: "8px" }}>{bankDetails.accountName}</td>
          </tr>
          <tr>
            <th style={{ padding: "8px", backgroundColor: "#f2f2f2" }}>
              Account Number
            </th>
            <td style={{ padding: "8px" }}>{bankDetails.accountNumber}</td>
          </tr>
          <tr>
            <th style={{ padding: "8px", backgroundColor: "#f2f2f2" }}>
              IFSC Code
            </th>
            <td style={{ padding: "8px" }}>{bankDetails.ifscCode}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Ekanike;

