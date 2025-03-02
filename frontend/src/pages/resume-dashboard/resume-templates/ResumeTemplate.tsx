// import React, { useState, useRef, useCallback } from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   User,
//   Briefcase,
//   Mail,
//   Phone,
//   Globe,
//   MapPin,
//   GraduationCap,
//   Layers,
//   FileText,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import html2canvas from "html2canvas";
// import { jsPDF } from "jspdf";

// const ResumeTemplate = () => {
//   const [profileImage, setProfileImage] = useState(null);
//   const [primaryColor, setPrimaryColor] = useState("#4f46e5"); // Default color
//   const resumeRef = useRef(null);
//   const [resumeData, setResumeData] = useState({
//     name: "John Doe",
//     jobTitle: "Software Developer",
//     email: "john.doe@example.com",
//     phone: "+1 234 567 890",
//     website: "www.johndoe.com",
//     location: "New York, USA",
//     summary: "Passionate software developer with 5+ years of experience...",
//     education: "B.Sc. Computer Science - XYZ University",
//     experience: "Software Engineer at ABC Corp (2018 - Present)",
//     skills: "React, Node.js, TypeScript, PostgreSQL",
//     certifications: "AWS Certified Developer, Google Cloud Associate",
//   });

//   const handlePrintPDF = useCallback(async () => {
//     const resumeElement = document.getElementById("resume-preview-id");
//     const a4Width = 210; // A4 width in mm
//     const a4Height = 297; // A4 height in mm
//     const pxToMm = 0.264583; // Pixel to mm conversion factor
//     const scaleFactor = 2; // Improves quality
//     const margin = 10; // Margin in mm

//     try {
//       const canvas = await html2canvas(resumeElement, {
//         scale: scaleFactor, // Improve resolution
//         useCORS: true, // Handle images properly
//         scrollX: 0,
//         scrollY: 0,
//       });
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");
//       const imgWidth = 210; //A4 size in mm
//       const pageHeight = 295;
//       let imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect rati
//       let heightLeft = imgHeight;

//       let position = 0;
//       9;
//       pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
//       heightLeft -= pageHeight;
//       let yPos = margin;
//       while (heightLeft >= 0) {
//         position = heightLeft - imgHeight;
//         pdf.addPage();
//         pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
//         heightLeft -= pageHeight;
//       }
//       if (imgHeight > a4Height - 2 * margin) {
//         let totalPages = Math.ceil(imgHeight / (a4Height - 2 * margin));

//         for (let i = 0; i < totalPages; i++) {
//           if (i > 0) pdf.addPage();
//           pdf.addImage(
//             imgData,
//             "PNG",
//             margin,
//             yPos - i * (a4Height - 2 * margin),
//             imgWidth,
//             imgHeight
//           );
//         }
//       } else {
//         pdf.addImage(imgData, "PNG", margin, yPos, imgWidth, imgHeight);
//       }
//       pdf.save("kavirasan.pdf");
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//     } finally {
//     }
//   }, []);

//   return (
//     <div>
//       <div className="mb-4">
//         <Button onClick={handlePrintPDF}>Download Pdf</Button>
//         <Label htmlFor="color">Choose Primary Color</Label>
//         <Input
//           id="color"
//           type="color"
//           value={primaryColor}
//           onChange={(e) => setPrimaryColor(e.target.value)}
//         />
//       </div>

//       {/* Resume Preview */}
//       <div
//         className="border rounded-lg shadow-lg p-6 bg-white"
//         style={{
//           borderColor: primaryColor,
//           // width: "21cm", // A4 width in centimeters
//           // height: "29.7cm", // A4 height in centimeters
//           // padding: "20mm", // Adds some space around the content
//           // boxSizing: "border-box", // Ensures padding is included within the width/height
//         }}
//         ref={resumeRef.current}
//         id="resume-preview-id"
//       >
//         {/* Profile Image */}
//         <div className="flex items-center gap-4">
//           <div
//             className="w-24 h-24 border-4 rounded-full overflow-hidden"
//             style={{ borderColor: primaryColor }}
//           >
//             {profileImage ? (
//               <img
//                 src={profileImage}
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <User className="w-full h-full text-gray-400" />
//             )}
//           </div>
//           <div>
//             <h1 className="text-2xl font-bold" style={{ color: primaryColor }}>
//               {resumeData.name}
//             </h1>
//             <p className="text-lg">{resumeData.jobTitle}</p>
//           </div>
//         </div>

//         {/* Contact Info */}
//         <div className="mt-4 grid grid-cols-2 gap-4">
//           <p className="flex items-center gap-2">
//             <Mail style={{ color: primaryColor }} /> svsdvsdvsdvsdvv
//           </p>
//           <p className="flex items-center gap-2">
//             <Phone style={{ color: primaryColor }} /> {resumeData.phone}
//           </p>
//           <p className="flex items-center gap-2">
//             <Globe style={{ color: primaryColor }} /> {resumeData.website}
//           </p>
//           <p className="flex items-center gap-2">
//             <MapPin style={{ color: primaryColor }} /> {resumeData.location}
//           </p>
//         </div>

//         {/* Summary */}
//         <div className="mt-6">
//           <h2 className="text-xl font-bold" style={{ color: primaryColor }}>
//             Summary
//           </h2>
//           <p>{resumeData.summary}</p>
//         </div>

//         {/* Education */}
//         <div className="mt-6">
//           <h2 className="text-xl font-bold" style={{ color: primaryColor }}>
//             Education
//           </h2>
//           <p className="flex items-center gap-2">
//             <GraduationCap style={{ color: primaryColor }} />{" "}
//             {resumeData.education}
//           </p>
//         </div>

//         {/* Experience */}
//         <div className="mt-6">
//           <h2 className="text-xl font-bold" style={{ color: primaryColor }}>
//             Experience
//           </h2>
//           <p className="flex items-center gap-2">
//             <Briefcase style={{ color: primaryColor }} />{" "}
//             {resumeData.experience}
//           </p>
//         </div>

//         {/* Skills */}
//         <div className="mt-6">
//           <h2 className="text-xl font-bold" style={{ color: primaryColor }}>
//             Skills
//           </h2>
//           <p className="flex items-center gap-2">
//             <Layers style={{ color: primaryColor }} /> {resumeData.skills}
//           </p>
//         </div>

//         {/* Certifications */}
//         <div className="mt-6">
//           <h2 className="text-xl font-bold" style={{ color: primaryColor }}>
//             Certifications
//           </h2>
//           <p className="flex items-center gap-2">
//             <FileText style={{ color: primaryColor }} />{" "}
//             {resumeData.certifications}
//           </p>
//         </div>
//         {/* Summary */}
//         <div className="mt-6">
//           <h2 className="text-xl font-bold" style={{ color: primaryColor }}>
//             Summary
//           </h2>
//           <p>{resumeData.summary}</p>
//         </div>

//         {/* Education */}
//         <div className="mt-6">
//           <h2 className="text-xl font-bold" style={{ color: primaryColor }}>
//             Education
//           </h2>
//           <p className="flex items-center gap-2">
//             <GraduationCap style={{ color: primaryColor }} />{" "}
//             {resumeData.education}
//           </p>
//         </div>

//         {/* Experience */}
//         <div className="mt-6">
//           <h2 className="text-xl font-bold" style={{ color: primaryColor }}>
//             Experience
//           </h2>
//           <p className="flex items-center gap-2">
//             <Briefcase style={{ color: primaryColor }} />{" "}
//             {resumeData.experience}
//           </p>
//         </div>

//         {/* Skills */}
//         <div className="mt-6">
//           <h2 className="text-xl font-bold" style={{ color: primaryColor }}>
//             Skills
//           </h2>
//           <p className="flex items-center gap-2">
//             <Layers style={{ color: primaryColor }} /> {resumeData.skills}
//           </p>
//         </div>

//         {/* Certifications */}
//         <div className="mt-6">
//           <h2 className="text-xl font-bold" style={{ color: primaryColor }}>
//             Certifications
//           </h2>
//           <p className="flex items-center gap-2">
//             <FileText style={{ color: primaryColor }} />{" "}
//             {resumeData.certifications}
//           </p>
//         </div>
//         {/* Summary */}
//         <div className="mt-6">
//           <h2 className="text-xl font-bold" style={{ color: primaryColor }}>
//             Summary
//           </h2>
//           <p>{resumeData.summary}</p>
//         </div>

//         {/* Education */}
//         <div className="mt-6">
//           <h2 className="text-xl font-bold" style={{ color: primaryColor }}>
//             Education
//           </h2>
//           <p className="flex items-center gap-2">
//             <GraduationCap style={{ color: primaryColor }} />{" "}
//             {resumeData.education}
//           </p>
//         </div>

//         {/* Experience */}
//         <div className="mt-6">
//           <h2 className="text-xl font-bold" style={{ color: primaryColor }}>
//             Experience
//           </h2>
//           <p className="flex items-center gap-2">
//             <Briefcase style={{ color: primaryColor }} />{" "}
//             {resumeData.experience}
//           </p>
//         </div>

//         {/* Skills */}
//         <div className="mt-6">
//           <h2 className="text-xl font-bold" style={{ color: primaryColor }}>
//             Skills
//           </h2>
//           <p className="flex items-center gap-2">
//             <Layers style={{ color: primaryColor }} /> {resumeData.skills}
//           </p>
//         </div>

//         {/* Certifications */}
//         <div className="mt-6">
//           <h2 className="text-xl font-bold" style={{ color: primaryColor }}>
//             Certifications
//           </h2>
//           <p className="flex items-center gap-2">
//             <FileText style={{ color: primaryColor }} />{" "}
//             {resumeData.certifications}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeTemplate;

import React from 'react'

const ResumeTemplate = () => {
  return (
    <div>ResumeTemplate</div>
  )
}

export default ResumeTemplate