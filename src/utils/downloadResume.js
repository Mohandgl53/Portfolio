import { RESUME_PDF_B64 } from '../assets/resumePdf';

export const downloadResume = (e) => {
  if (e && e.preventDefault) e.preventDefault();
  
  try {
    const byteCharacters = atob(RESUME_PDF_B64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Mohan_Kumar_T_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch (err) {
    console.error('Download error:', err);
    // Fallback: direct base64 data URI
    const a = document.createElement('a');
    a.href = 'data:application/pdf;base64,' + RESUME_PDF_B64;
    a.download = 'Mohan_Kumar_T_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};
