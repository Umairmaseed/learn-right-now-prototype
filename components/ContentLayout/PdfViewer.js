import React from 'react';
import { useSelector } from 'react-redux';

function PdfViewer() {
  const pdfUrl = useSelector((state) => state.course.contentData.media);
  const timestamp = new Date().getTime();
  return (
    <div className="pdf-container">
      <iframe
        sandbox="allow-scripts allow-same-origin"
        src={`https://docs.google.com/viewer?url=${encodeURIComponent(
          `https://lrn-s3.s3.ap-south-1.amazonaws.com/${pdfUrl}`
        )}&embedded=true&t=${timestamp}`} // Append the timestamp as a query parameter
        style={{
          width: '100%',
          height: '100%',
        }}
        frameBorder="0"
      />
    </div>
  );
}

export default PdfViewer;
