# 🧠 Vercel Frontend – Cloud Run API Integration

This project is part of the [**Stock Guru API**](https://github.com/JuanMontreuil08/stock-guru-api) repository. It offers a web interface built with **Next.js**, designed to seamlessly integrate with an API deployed on **Cloud Run**.

---

## 🚀 Clone and use this project

Follow this steps:

```bash
# 1. Clone the Repo
git clone https://github.com/JuanMontreuil08/ui-agent-vercel.git
cd ui-agent-vercel

# 2. Remove the reference to the original Repo
git remote remove origin
```

---

## 🔗 Add your API Url (Cloud Run)

1. Open the file:

```
src/app/api/agent/route.ts
```

2. In line 4, add your API Url including the endpoint, for example:

```ts
const url = 'https://stockbotv2-224560036383.us-west4.run.app/discover?' +
              new URL(request.url).searchParams.toString();
```

In my case, my endpoint is /discover.

---

## 📤 Push your changes

```bash
git remote add origin <your_repo>
git push -u origin main
```

### For future changes, execute:

```bash
git add .
git commit -m "update"
git push
```

---

## 💬 API input variables

In the file:

```
src/app/page.tsx
```

Your API needs the following variables:

- `msg`: user's message.

---

## 📦 Deploy on Vercel

1. Create a [Vercel](https://vercel.com/) account.
2. Create a new project
3. Choose your Repository
4. Deploy

---
