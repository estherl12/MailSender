const nodemailer = require('nodemailer')
require('dotenv').config();
const transporter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:578,
    // secure:true,
    auth:{
        // type:'OAuth2',
        // user:process.env.USER_NAME,
        // pass:process.env.PASSWORD,
        // clientId:"",
        // clientSecret:"",
        // refreshToken:""
      user: "lamaesther5@gmail.com",
      pass: "qyashmwakrlcpfgc"
    }
});
const mailOptions = {
    from:'lamaesther5@gmail.com',
    to:'akashkhadka099@gmail.com ',
    subject:'Sending email using nodejs',
    Text:'That was easy though'
};
// transporter.sendMail(mailOptions,call)

const mailSender = async (mailDetails) =>{
    try {
        const info = await transporter.sendMail(mailDetails )
        // callback(info);
        console.log("mail sent");
    } catch (error) {
       console.error(error) 
    }
}

console.log("mail page");
mailSender(mailOptions)


module.export = mailSender ;

