<div dir="rtl" markdown="1">

# کیف پول‌ ارزهای مجازی

::: warning
این سند یک مستند در حال تکمیل و به‌روزرسانی است. به عبارت دیگر، این سند همچنان در حال توسعه و بهبود است و نسخه‌های جدید آن بر اساس نیازها و تغییرات مستمر در استارتاپ ایجاد می‌شود.
:::

## بلاک‌چین اتریوم

بلاک‌چین اتریوم فناوری ایست برای ساخت نرم‌افزار‌ها و سازمان‌ها، نگهداری دارایی‌ها، انجام تراکنش و ارتباطات بدون کنترل از سوی یک مرجع مرکزی. برای استفاده از اتریوم نیازی نیست که اطلاعات شخصی خود را تحویل دهید - شمایید که کنترل داده‌هایتان و هرچیز که قرار است به اشتراک گذاشته شود را در دست دارید. اتریوم رمزارز خودش، اتر، را دارد که برای پرداخت فعالیت های خاصی بر روی شبکه اتریوم از آن استفاده می‌شود.

## کیف پول اتریوم چیست

شما نیاز به یک کیف پول دارید که وجوه را بفرستد و اتر شما را مدیریت کند.
کیف پول‌های اتریوم برنامه‌های کاربردی هستند که به شما امکان استفاده از حساب اتریوم را می‌دهد. به آن به چشم یک برنامه بانکداری ابنترنتی بدون بانک نگاه کنید. کیف پول به شما امکان می‌دهد موجودی خود را بخوانید، تراکنش‌ها را بفرستید، و به برنامه‌های کاربردی متصل شوید.

کیف پول شما تنها یک ابزار برای مدیدریت حساب اتریوم است. این بدین معنی است که می‌توانید ارائه دهنده کیف پول خود را در هر زمانی عوض کنید. بسیاری از کیف پول‌ها به شما امکان استفاده همزمان از چندین حساب اتریوم برای یک برنامه را می‌دهند.

این بدین دلیل است که کیف پول هیچ مالکیتی بر روی پول شما ندارد. کیف پول‌ها تنها ابزاری است برای مدیریت آن چه دارید.

## چگونه ایمن بمانیم

وقتی صحبت از ایمنی به میان می‌آید، کیف پول تغییر در طرز فکرهاست. آزادی مالی و امکان دسترسی و استفاده از وجوه در هر کجا با کمی مسئولیت همراه است – هیچ پشتیبانی مشتری در رمز ارز وجود ندارد.

✅مسئولیت وجوهتان را به عهده بگیرید

صرافی‌های نامتمرکز کیف پولتان را به یک نام کاربری و رمز عبور پیوند می‌دهند و شما می‌توانید از روش‌های سنتی اقدام به بازیابی کنید. فقط به یاد داشته باشید که با این کار دارید به حضانت وجوهتان نزد آن صرافی نامتمرکز اعتماد می‌کنید. اگر آن شرکت مورد حمله قرار گیرد یا ورشکست شود، وجوهتان به خطر می‌افتد.

✅عبارت seed را یادداشت کنید

کیف پول‌ها به شما یک عبارت بازیابی می‌دهند که باید آن را در جایی مطمئن یادداشت کنید. این، تنها راهی است که با آن می‌توانید کیف پول خود را بازیابی کنید.

این مثال را ببنید:

there aeroplane curve vent formation doge possible product distinct under spirit lamp

![The Flow](https://github.com/SAY-DAO/road-map-docs/blob/main/docs/.vuepress/public/seeds.png?raw=true)

آن را روی کامپیوتر ذخیره نکنید. آن را جایی بنویسید و ایمن نگه دارید.

##### ✅کیف پول خود را نشانگذاری کنید

اگر از کیف پول تحت وب استفاده می‌کنید، وبسایت را نشانگذاری کنید تا از شر کلاهبرداری در امان بمانید.

✅هر چیزی را سه بار بررسی کنید

به یاد داشته باشید که تراکنش ها برگشت پذیر و کیف پول‌ها به سادگی قابل بازیابی نیستند، پس احتیاط کنید و همیشه مراقب باشید.

- **Step 1**: Create and change into a new directory

```bash
mkdir vuepress-starter
cd vuepress-starter
```

- **Step 2**: Initialize your project

<CodeGroup>
  <CodeGroupItem title="PNPM" active>

```bash
git init
pnpm init
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash
git init
yarn init
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
git init
npm init
```

  </CodeGroupItem>
</CodeGroup>

- **Step 3**: Install VuePress locally

<CodeGroup>
  <CodeGroupItem title="PNPM" active>

```bash
pnpm add -D vuepress@next @vuepress/client@next vue
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash
yarn add -D vuepress@next
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm install -D vuepress@next
```

  </CodeGroupItem>
</CodeGroup>

- **Step 4**: Add some [scripts](https://classic.yarnpkg.com/en/docs/package-json#toc-scripts) to `package.json`

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

- **Step 5**: Add the default temp and cache directory to `.gitignore` file

```bash
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

- **Step 6**: Create your first document

```bash
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

- **Step 7**: Serve the documentation site in the local server

<CodeGroup>
  <CodeGroupItem title="PNPM" active>

```bash
pnpm docs:dev
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash
yarn docs:dev
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm run docs:dev
```

  </CodeGroupItem>
</CodeGroup>

VuePress will start a hot-reloading development server at [http://localhost:8080](http://localhost:8080). When you modify your markdown files, the content in the browser will be auto updated.

By now, you should have a basic but functional VuePress documentation site. Next, learn about the basics of [configuration](./configuration.md) in VuePress.

</div>
