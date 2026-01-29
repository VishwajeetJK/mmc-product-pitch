# Custom domain for GitHub Pages

## 1. GitHub repo settings

1. Open **https://github.com/VishwajeetJK/mmc-product-pitch**
2. Go to **Settings** → **Pages** (left sidebar)
3. Under **Custom domain**, enter your domain (e.g. `mmcpitch.com` or `www.mmcpitch.com`)
4. Click **Save**
5. (Recommended) Check **Enforce HTTPS** after DNS has propagated

## 2. DNS at your domain registrar

Configure DNS where you bought the domain (GoDaddy, Namecheap, Cloudflare, Google Domains, etc.).

### Option A: Apex domain (e.g. `yourdomain.com`)

Add **A records** pointing to GitHub’s IPs:

| Type | Name/Host | Value/Points to |
|------|------------|------------------|
| A    | `@`       | `185.199.108.153` |
| A    | `@`       | `185.199.109.153` |
| A    | `@`       | `185.199.110.153` |
| A    | `@`       | `185.199.111.153` |

(Some registrars only allow one A record per host; add all four if possible, or use the first one.)

### Option B: Subdomain (e.g. `www.yourdomain.com`)

Add a **CNAME record**:

| Type  | Name/Host | Value/Points to              |
|-------|------------|------------------------------|
| CNAME | `www`      | `VishwajeetJK.github.io`     |

## 3. Vite base path (required for custom domain)

When you use a custom domain, the site is served at the **root** of that domain (e.g. `https://yourdomain.com/`), not under `/mmc-product-pitch/`.

So in **`vite.config.ts`** set:

```ts
base: '/',
```

Then commit and push. After that, the site will work correctly at your custom domain.  
Note: the URL `https://vishwajeetjk.github.io/mmc-product-pitch/` will no longer work; use your custom domain.

## 4. Wait for DNS

DNS can take from a few minutes up to 48 hours. When it’s ready, the **Custom domain** section in GitHub Pages will show a green check. Then enable **Enforce HTTPS** if you haven’t already.

## Summary

| Step | Action |
|------|--------|
| 1    | In repo **Settings → Pages**, set **Custom domain** and Save |
| 2    | At your registrar, add A records (apex) or CNAME (www) as above |
| 3    | In `vite.config.ts` set `base: '/'`, then commit and push |
| 4    | Wait for DNS, then turn on **Enforce HTTPS** |
