import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store the submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      try {
        const transporter = nodemailer.createTransporter({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER || 'your-email@gmail.com',
            pass: process.env.EMAIL_PASSWORD || 'your-app-password'
          }
        });

        const mailOptions = {
          from: process.env.EMAIL_USER || 'your-email@gmail.com',
          to: process.env.CONTACT_EMAIL || 'aryan.bhatnagar@email.com',
          subject: `Portfolio Contact: ${validatedData.subject || 'New Message'}`,
          html: `
            <h2>New Portfolio Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject || 'No subject'}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          `,
          replyTo: validatedData.email
        };

        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't fail the request if email fails
      }
      
      res.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(400).json({ success: false, message: 'Failed to send message. Please try again.' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
