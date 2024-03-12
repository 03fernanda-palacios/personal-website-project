import './DownloadResume.css';

function DownloadResume() {
  return (
    <div className="center-text">
      <p>Click the link below to download a PDF of my resume:</p>
      <a href="../public/FernsAwesomeResume.pdf" download="FernsAwesomeResume.pdf">Download PDF</a>
      <p>Click the link below to download a Pages copy of of my resume:</p>
      <a href="../public/FernsAwesomeResume.pages" download="FernsAwesomeResume.pages">Download PDF</a>
    </div>
  );
}

export default DownloadResume;
