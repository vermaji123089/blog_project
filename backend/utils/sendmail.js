const nodemailer= require("nodemailer")


module.exports = async(email,subject,text)=>{
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "vermaji123089@gmail.com",
              pass: "jmxzdgjsvgueuzqs",
            },
        });

        await transporter.sendMail({
            from: "<no-reply@vermaji123089@gmail.com>",
            to: "vermaji123089@gmail.com", // yaha pe yo email aygi jse bhejna hai
			subject: subject,
			text: text,
		});
		console.log("email sent successfully");


    } catch (error) {
        console.log("email not sent!");
		console.log(error);
		return error;
    }
}