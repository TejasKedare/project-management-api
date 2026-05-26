import Mailgen from 'mailgen'
import mailgen from 'mailgen'
import nodemailer from 'nodemailer'


const sendEmail = async (options) => {
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Task Manager",
            link: "https://taskmanagerlink.com"
        }
    })

    const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent)
    const emailHTML = mailGenerator.generate(options.mailgenContent)

    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        auth: {
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS
        }
    })

    const mail = {
        from: 'sampleSender@gmail.com', // sender address
        to: "alice@topmail.com, bob@topmail.com", // list of recipients
        subject: options.subject, // subject line
        text: emailTextual, // plain text body
        html: emailHTML, // HTML body
    };

    try {
        await transporter.sendMail(mail)
    } catch (error) {
        console.error(error)
    }
}

const emailGenerationMailgenContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our App we are exited to have you onboard",
            action: {
                instructions: 'To verify the email please click on the following button',
                button: {
                    color: '#22BC66',
                    text: 'Verify your email',
                    link: verificationUrl
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }
}


const forgotPasswordMailgenContent = (username, passwordResetVerificationUrl) => {
    return {
        body: {
            name: username,
            intro: "To reset the password please click on the following button",
            action: {
                instructions: 'To get started with Mailgen, please click here:',
                button: {
                    color: '#22BC66',
                    text: 'Reset Password',
                    link: passwordResetVerificationUrl
                }
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }
}

export { emailGenerationMailgenContent, forgotPasswordMailgenContent , sendEmail}