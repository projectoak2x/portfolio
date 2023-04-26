// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// async function generatePDF(elementId) {
//   const element = document.getElementById(elementId);

//   // Wait for the animation to finish (change 1000 to the animation duration in milliseconds)
//   await new Promise((resolve) => setTimeout(resolve, 3000));

//   // Capture the element with its styles using html2canvas
//   const canvas = await html2canvas(element, { scale: 2 });

//   // Create a new jsPDF instance
//   window.jsPDF = window.jspdf.jsPDF;
//   const pdf = new jsPDF("p", "px", [1036, 3331]);

//   // Calculate the width and height of the PDF to maintain the aspect ratio
//   const imgWidth = pdf.internal.pageSize.getWidth();
//   const imgHeight = (canvas.height * imgWidth) / canvas.width;

//   // Add the image to the PDF
//   const imageData = canvas.toDataURL("image/jpeg", 1.0);
//   pdf.addImage(imageData, "JPEG", 0, 0, imgWidth, imgHeight);

//   // Save the PDF
//   pdf.save("generated.pdf");
// }

// generatePDF("generatePDF");
// Add your javascript here
