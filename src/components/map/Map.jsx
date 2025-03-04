import React from 'react'

const Map = () => {
  return (
 <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg container">
      <iframe
        title="Google Map -Yangiyul, Tashkent Region"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d535.3208585449715!2d69.1082469757332!3d41.18678286021204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2s!4v1741110853887!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div> )
}

export default Map
