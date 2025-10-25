// abhinav

const MapEmbed = ({ embedLink }) => {
    return (
      <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
        <iframe
          src={embedLink}
          title="Google Map"
          width="100%"
          height="100%"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default MapEmbed;
  
  