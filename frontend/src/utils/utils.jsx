export async function exportMultipleChartsToPdf() {
    const doc = new jsPDF("p", "px"); // (1)
  
    const elements = document.getElementsByClassName("custom-chart"); // (2)
  
    await creatPdf({ doc, elements }); // (3-5)
  
    doc.save(`charts.pdf`); // (6)
}