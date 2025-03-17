import MapComponent from "./MapComponent";

const LibrarySection = () => {
  // Example seller location (Kolkata, India)
  const sellerLocation = { lat: 23.57859, lng: 87.19487 };

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

export default LibrarySection;
