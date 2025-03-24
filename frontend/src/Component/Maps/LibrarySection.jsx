import MapComponent from "../Maps/MapComponent";

const SellerProfile = () => {
  // Example seller location (Kolkata, India)
  const sellerLocation = { lat: 22.5726, lng: 88.3639 };

  return (
    <div>
      <h2>Seller Location</h2>
      <MapComponent
        latitude={sellerLocation.lat}
        longitude={sellerLocation.lng}
      />
    </div>
  );
};

export default SellerProfile;
