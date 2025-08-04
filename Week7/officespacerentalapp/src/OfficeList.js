import React from 'react';

const officeSpaces = [
  {
    id: 1,
    name: "Regus Workspaces",
    rent: 45000,
    address: "MG Road, Bengaluru",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "WeWork Residency",
    rent: 75000,
    address: "DLF Cyber Hub, Gurgaon",
    image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=800&q=80"  // ✅ Updated here
  },
  {
    id: 3,
    name: "SmartSpaces",
    rent: 58000,
    address: "HiTech City, Hyderabad",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
  }
];



const OfficeList = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
      {officeSpaces.map((office) => (
        <div key={office.id} style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          margin: "15px",
          padding: "20px",
          width: "300px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          backgroundColor: "#f9f9f9"
        }}>
          <img src={office.image} alt={office.name} style={{ width: "100%", borderRadius: "8px" }} />
          <h3>{office.name}</h3>
          <p><strong>Address:</strong> {office.address}</p>
          <p>
            <strong>Rent:</strong>{" "}
            <span style={{
              color: office.rent > 60000 ? "green" : "red",
              fontWeight: "bold"
            }}>
              ₹{office.rent}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default OfficeList;
