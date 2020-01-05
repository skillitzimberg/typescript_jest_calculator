# TypeScript Calculator with Jest

This project is about my going deeper in JS by backing up to the beginning now that I have a better view of where this all leads and where I get stuck now.

## Set up

You will need:  
[Git](https://git-scm.com/);  
[TypeScript](https://www.typescriptlang.org/);  
[Node Package Manager](https://www.npmjs.com/get-npm) (NPM) or [Yarn](https://yarnpkg.com/lang/en/);

I do not know the benefits or problems with using NPM vs. yarn, yet. I like Yarn because it seems faster & the messages are more clear. NPM is better at keeping you aware of dependency issues - missing, out-of-date, incompatible dependencies.

Because this is a project for practicing project set up, among other things, I'm going to suggest that you NOT clone/fork/what-have-you. Build it from scratch. I'll give you the commands though. (There are probably slicker ways of doing this, but I'm trying to reinforce my own understanding & muscle memory, so . . . )

```
mkdir calculator
cd calculator
touch README.md index.html .gitignore
mkdir src
mkdir src
touch src/vendor.ts src/app.ts
mkdir src/styles
touch src/styles/app.css
git init
npm init
npm install typescript --save-dev
tsc --init
npm i jest @types/jest ts-jest -D

# Get TS watching '.ts' files for changes and transpiling them as your working.
tsc --watch
```

Because I wanted to use the Yarn package manager I also did:

```
rm package-lock.json
yarn install
```

### .gitignore

```
# DIRECTORIES
node_modules/

# FILES
package-lock.json
yarn.lock

/src/**.js
```

Learn about [Jest](https://jestjs.io/) for testing. I didn't research the various testing packages very deeply. Jest just seemed better suited to getting up and running with TypeScript.
