# 🚀 Complete Deployment Guide - Portfolio Website

This guide will walk you through deploying your portfolio website to GitHub and Vercel step by step.

---

## 📋 Prerequisites Checklist

Before we begin, make sure you have:
- ✅ Your portfolio website code ready (this folder)
- ✅ A GitHub account (create one at https://github.com if you don't have one)
- ✅ A Vercel account (we'll create one during deployment)
- ✅ Git installed on your computer (we'll check this first)

---

## Step 1: Check if Git is Installed

Open your terminal (Terminal on Mac, Command Prompt or PowerShell on Windows) and run:

```bash
git --version
```

**If you see a version number** (like `git version 2.x.x`): ✅ You're good to go! Skip to Step 2.

**If you see an error**: You need to install Git first:
- **Mac**: Download from https://git-scm.com/download/mac or install via Homebrew: `brew install git`
- **Windows**: Download from https://git-scm.com/download/win
- **Linux**: Run `sudo apt-get install git` (Ubuntu/Debian) or `sudo yum install git` (CentOS)

---

## Step 2: Navigate to Your Project Folder

In your terminal, navigate to your portfolio website folder:

```bash
cd /Users/harshasekar/portfolio-website
```

Verify you're in the right place:
```bash
pwd
```

You should see: `/Users/harshasekar/portfolio-website`

---

## Step 3: Initialize Git Repository (if not already done)

Check if Git is already initialized:
```bash
ls -la
```

**If you see a `.git` folder**: ✅ Git is already initialized! Skip to Step 4.

**If you don't see a `.git` folder**: Initialize Git:
```bash
git init
```

---

## Step 4: Configure Git (First Time Only)

Set your name and email (use your GitHub account email):

```bash
git config user.name "Harshvardhan Sekar"
git config user.email "your-email@example.com"
```

Replace `your-email@example.com` with the email you used for your GitHub account.

---

## Step 5: Check Your Current Files

See what files are in your project:
```bash
ls -la
```

Make sure you see files like:
- `package.json`
- `next.config.js`
- `components/`
- `pages/`
- `styles/`
- etc.

---

## Step 6: Create/Update .gitignore File

Make sure you have a `.gitignore` file to exclude unnecessary files:

```bash
cat .gitignore
```

If it doesn't exist or is incomplete, create/update it. The file should include:
```
node_modules/
.next/
.env.local
.env*.local
.DS_Store
*.log
.vercel
```

---

## Step 7: Add All Files to Git

Add all your project files to Git:

```bash
git add .
```

This stages all your files for commit.

---

## Step 8: Create Your First Commit

Commit your files with a message:

```bash
git commit -m "Initial commit: Portfolio website final build"
```

**If this is your first commit**, you might see a message about setting up your email. Follow the instructions if needed.

---

## Step 9: Connect to Your GitHub Repository

### Option A: If the repository already exists on GitHub

Link your local repository to GitHub:

```bash
git remote add origin https://github.com/harshvardhan-sekar/harshvardhan-sekar-portfolio.git
```

Verify the connection:
```bash
git remote -v
```

You should see:
```
origin  https://github.com/harshvardhan-sekar/harshvardhan-sekar-portfolio.git (fetch)
origin  https://github.com/harshvardhan-sekar/harshvardhan-sekar-portfolio.git (push)
```

### Option B: If you need to create a new repository

1. Go to https://github.com/new
2. Repository name: `harshvardhan-sekar-portfolio`
3. Description: "Portfolio Website"
4. Choose **Public** or **Private**
5. **DO NOT** check "Initialize this repository with a README"
6. Click "Create repository"

Then run:
```bash
git remote add origin https://github.com/harshvardhan-sekar/harshvardhan-sekar-portfolio.git
```

---

## Step 10: Push Your Code to GitHub

Push your code to the main branch:

```bash
git branch -M main
git push -u origin main
```

**If you're asked for credentials:**
- **Username**: Your GitHub username
- **Password**: You'll need a **Personal Access Token** (not your GitHub password)

### Creating a Personal Access Token (if needed):

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Name it: "Portfolio Deployment"
4. Select scopes: Check `repo` (this gives full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)
7. Use this token as your password when pushing

---

## Step 11: Verify Your Code is on GitHub

1. Go to: https://github.com/harshvardhan-sekar/harshvardhan-sekar-portfolio
2. You should see all your files there
3. ✅ Great! Your code is now on GitHub!

---

## Step 12: Deploy to Vercel

### 12.1: Create a Vercel Account

1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### 12.2: Import Your Project

1. Once logged in, click "Add New..." → "Project"
2. You'll see a list of your GitHub repositories
3. Find and click on `harshvardhan-sekar-portfolio`
4. Click "Import"

### 12.3: Configure Your Project

Vercel will auto-detect Next.js settings. You should see:

- **Framework Preset**: Next.js ✅
- **Root Directory**: `./` ✅
- **Build Command**: `next build` ✅
- **Output Directory**: `.next` ✅

**Environment Variables** (if you have any):
- If you have EmailJS keys in `.env.local`, add them here:
  - Click "Environment Variables"
  - Add each variable:
    - Name: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, Value: `service_ahrsd0m`
    - Name: `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, Value: `template_0emuy3h`
    - Name: `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`, Value: `vbQPmylrUs-dZ_JW4`

### 12.4: Deploy!

1. Click "Deploy" button
2. Wait 2-3 minutes for the build to complete
3. You'll see a success message with your live URL!

---

## Step 13: Your Website is Live! 🎉

After deployment, you'll get a URL like:
- `https://harshvardhan-sekar-portfolio.vercel.app`

**Or a custom domain if you set one up.**

---

## Step 14: Future Updates (How to Update Your Website)

Whenever you make changes to your website:

1. **Make your changes** in your code editor
2. **Save all files**
3. **In terminal, run:**

```bash
cd /Users/harshasekar/portfolio-website
git add .
git commit -m "Updated portfolio: [describe your changes]"
git push origin main
```

4. **Vercel will automatically detect the changes** and redeploy your site!
5. Wait 2-3 minutes, and your changes will be live!

---

## 🔧 Troubleshooting

### Problem: "Git is not recognized"
**Solution**: Install Git (see Step 1)

### Problem: "Permission denied" when pushing
**Solution**: 
- Make sure you're using a Personal Access Token, not your password
- Check that you have write access to the repository

### Problem: "Repository not found"
**Solution**: 
- Make sure the repository exists on GitHub
- Check the repository name is correct
- Verify you're logged into the correct GitHub account

### Problem: Build fails on Vercel
**Solution**:
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Verify `next.config.js` is correct
- Check for any syntax errors in your code

### Problem: Environment variables not working
**Solution**:
- Make sure you added them in Vercel dashboard
- Variable names must start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding variables

---

## 📝 Quick Reference Commands

```bash
# Navigate to project
cd /Users/harshasekar/portfolio-website

# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin main

# Pull latest changes (if working from multiple computers)
git pull origin main
```

---

## ✅ Final Checklist

Before deploying, make sure:
- [ ] All your files are saved
- [ ] `.env.local` is in `.gitignore` (don't commit secrets!)
- [ ] `package.json` has all dependencies
- [ ] `next.config.js` is configured correctly
- [ ] All images are in `public/images/` folder
- [ ] Test your site locally with `npm run dev`

---

## 🎯 Next Steps After Deployment

1. **Test your live site**: Visit your Vercel URL and test everything
2. **Share your portfolio**: Update your LinkedIn, resume, etc. with the new URL
3. **Set up a custom domain** (optional): In Vercel dashboard → Settings → Domains
4. **Monitor your site**: Check Vercel dashboard for analytics and performance

---

## 📞 Need Help?

If you get stuck:
1. Check the error message carefully
2. Look at Vercel build logs
3. Check GitHub repository settings
4. Make sure all files are committed and pushed

---

**Congratulations! Your portfolio website is now live! 🚀**

