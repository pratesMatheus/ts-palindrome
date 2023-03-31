<h1 align="center"><b>ts-palindrome</b></h1>

The idea of ​​this project is to apply good programming practices. All this in a super simple project that "only" will check if the username is a palindrome or not.

<h2>Link</h2>

see the final result of the project: [ts-palindrome](https://ts-palindrome.onrender.com "ts-palindrome");

<h2>Pre Reqs</h2>

- Nodejs version = 16.19.0 or higher;
- Install "editorconfig" extension in VSCode;

<h2>Start Project</h2>

In case you choose to use "git clone", start the project like this:

```SH
npm ci
```

**Desc.**: This command (`npm ci`) is similar to npm install, except it's meant to be used in automated environments such as test platforms, continuous integration, and deployment -- or any situation where you want to make sure you're doing a clean install of your dependencies.

<h2>Create Project</h2>

But, if you want to create the project from scratch, choose this:

```SH
npm create vite@latest

√ Project name: ... ts-palindrome
√ Select a framework: » Vanilla
√ Select a variant: » TypeScript

cd ts-palindrome
npm install
npm run dev
```

<h3>Eslint</h3>

```SH
npm i -D eslint
npm init @eslint/config
```

After installation and configuration, simply configure Eslint based on your needs!

<h2>Run</h2>

```SH
npm run dev
```

<h2>Folder structure</h2>

```
public/
  vite.svg
src/
  @types/
    svg.d.ts
  assets/
    ".svg" files
  components/
    DOM.ts
  utils/
    capitalize.ts
  main.ts
  palindrome.ts
  style.css
  vite-env.d.ts
.eslintrc.json
.gitignore
index.html
package-lock.json
package.json
README.md
tsconfig.json
```

<h2>Obrigado</h2>

Disponibilizado com ❤ por [pratesMatheus](https://github.com/pratesMatheus "pratesMatheus").
