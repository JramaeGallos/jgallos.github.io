import emailjs from "@emailjs/browser";

emailjs.init("GXWSXPOFbzddq1p9d");

export const sendEmail = (formData) => {
    return emailjs.send("service_0ui2h9j", "template_3dsolib", formData);
};
