# 📧 Email Setup Guide for Contact Form

This guide will help you set up email functionality for the "Let's Connect!" contact form using EmailJS.

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free tier)
3. Complete the email verification

### 2. Add Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.) or use **EmailJS** default
4. Follow the setup instructions for your email provider
5. **Copy your Service ID** - you'll need this later

### 3. Create Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})
Phone: {{phone}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. **Important**: Use these variable names exactly:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{message}}`

5. Set **To Email** to: `sekar6@illinois.edu` (your email address)
6. Click **Save** and **Copy your Template ID**

### 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it - you'll need this

### 5. Create Environment Variables

1. In your project root, create a file named `.env.local`
2. Add these variables:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual credentials from EmailJS

**Example:**
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

### 6. Restart Your Dev Server

After creating `.env.local`, restart your development server:

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

### 7. Test the Form

1. Visit `http://localhost:3000`
2. Scroll to the "Let's Connect!" section
3. Fill out the contact form
4. Submit and check your email (`sekar6@illinois.edu`)

## 🔒 Security Notes

- ✅ `.env.local` is already in `.gitignore` - your keys won't be committed
- ✅ Never share your Public Key publicly
- ✅ EmailJS Public Key is safe to use in client-side code (it's designed for this)

## 🌐 Deploying to Vercel

When deploying to Vercel:

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add these three variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Add the same values from your `.env.local` file
5. **Redeploy** your site (or it will auto-deploy on next push)

## 📊 EmailJS Free Tier Limits

- **200 emails/month** - Perfect for portfolio sites
- No credit card required
- Upgrade if you need more

## 🔧 Troubleshooting

### Form not sending emails?
1. Check browser console for errors
2. Verify all environment variables are set correctly
3. Make sure EmailJS service is active
4. Check your email spam folder

### Getting CORS errors?
- Make sure you're using `@emailjs/browser` (not `@emailjs/node`)
- Check that your Public Key is correct

### Need help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

---

**Your contact form is now ready to receive messages!** 🎉


