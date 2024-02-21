import { isNil } from 'lodash';
import Modal from '../modal/modal.component';
import './pdfViewer.css';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

interface PDFViewerDetails {
  path: string
  title: string
}

interface PDFViewerProps {
  title: string
  pdfPath: string
}

const PDFViewer:FC<PDFViewerProps> = ({
  title,
  pdfPath,
}) => {
  const [pdfViewerDetails, setPdfViewerDetails] = useState<PDFViewerDetails | null>();
  
  const showPDF = (details: PDFViewerDetails) => () => {
    setPdfViewerDetails(details);
  }

  const pdfSupport = window.navigator.pdfViewerEnabled;

  return (
    <div className='pdf-viewer'>
      <h4>{title}</h4>
      {pdfSupport && <>
        <iframe src={pdfPath} />
        <div className='pdf-expand' onClick={showPDF({
          path: pdfPath,
          title,
          })}>
          Expand
        </div>
      </>}
      {!pdfSupport && <>
        <Link to={pdfPath} target='_blank' download>Download Certificate</Link>
      </>}

      <div className="pdf-viewer-modal">
        <Modal isOpen={!isNil(pdfViewerDetails)} close={() => setPdfViewerDetails(null)}>
          {pdfViewerDetails && <div className='modal-pdf-view'>
            <h1 className='title'>
              {pdfViewerDetails.title}
            </h1>
            <div className='pdf-wrapper'>
              <iframe src={pdfViewerDetails.path} width='100%' height='100%' />
            </div>
          </div>}
        </Modal>
      </div>
    </div>
  );
};

export default PDFViewer;