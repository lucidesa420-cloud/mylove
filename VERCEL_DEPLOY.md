# Deploy to Vercel in 3 Steps

## Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

## Step 2: Connect to Vercel
1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Select your GitHub repository
4. Click "Import"

## Step 3: Configure & Deploy
Vercel will auto-detect:
- ✅ Framework: Create React App
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `build`
- ✅ Node Version: 18.x (recommended)

Click "Deploy" and you're done!

---

## Your App Will Be Live At:
```
https://[project-name].vercel.app
```

## Important Notes:

### Audio File
- The music player expects an audio file at `/public/audio/panata.mp3`
- If the file doesn't exist, you'll see a message in the UI
- To add it: Upload `panata.mp3` to `public/audio/` folder

### Environment Variables
If you need backend API integration:
1. In Vercel dashboard → Project Settings → Environment Variables
2. Add `REACT_APP_BACKEND_URL` = your API URL
3. Re-deploy

### Custom Domain
1. In Vercel dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS settings as Vercel instructs

---

## Troubleshooting

**Build fails?**
- Check build logs in Vercel dashboard
- Run locally: `npm run build`
- Check console for errors

**Styling looks broken?**
- Clear Vercel cache: Settings → Git → Redeploy
- Check `tailwind.config.js` is correct

**Components not displaying?**
- Verify all imports use `@/` or relative paths
- Check `craco.config.js` has correct path alias

---

For full Vercel docs: https://vercel.com/docs
