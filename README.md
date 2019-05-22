This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## TS Linting Rules

Hi! Kindly follow the **style guide** to make the **code standard** in react with typescript project.

Lint libraries related to React & JSX code standard.

`tslint`, `tslint-react`, `tslint-consistent-codestyle`, `tslint-etc`.

Styling libraries related to code styling.

`tslint-plugin-prettier`, `tslint-config-prettier`

## Install dev dependencies

```
yarn add tslint tslint-react tslint-consistent-codestyle tslint-etc  tslint-plugin-prettier tslint-config-prettier -D
```

## TS Linting Rules

### Limiting lines in File

- Requires files to remain under a certain number of lines.
- Limited up-to 300 lines.
  `max-file-line-count : [true, 300]` 
 
### Limiting length in line

- Requires lines to be under a certain max length to code improves code readability.
- ``limit`` : 120 characters
- ``ignore-pattern `` :  string defining ignore pattern for this rule
		-  `^import` pattern will ignore all import statements.
		-  `^export {(.*?)}`  pattern will ignore all multiple export statements. 
  
 ```
 max-line-length: [true, {"limit": 120, "ignore-pattern": "^import |^export {(.*?)}"}]
 ```

### Quotations

- Enforces specific quote character for string literals.
  `quotemark`

```diff
- let a = "bad", let a = `bad`
+ let a = 'hai!, prefered single quotes'
```

### Variable Declaration

- Use `let` and `const` instead of `var`

```diff
- var a = 10
+ let a = 10, const b = 10
```

### Function declaration

- Allows only ES6 arrow functions
  `Only-arrow-functions`

```diff
- myFunfction(){}
+ myFunction  = () => { //Logics goes here... }
```

### Function parameters

- Requires parentheses around the parameters of arrow function definitions.  
  `arrow-parens`

```diff
- fails
function = arg1 = > {
return agr1
}
```

```diff
+ passes
function = (arg1) = > {
return agr1
}
```

### Exports

- Disallows default exports in ES6-style modules, use named exports instead
  `no-default-export`

```diff
- export default const A
+ export const A
```

### Imports

- Disallows duplicate imports
  `no-duplicate-imports`

```diff
- import  React  from  'react';
- import  React  from  'react';
```

```diff
+ import  React  from  'react';
```

### Interfaces

- Empty interface declarations are not allowed
  `no-empty-interface`

```diff
- interface I {}
+ interface I { foo : string }
```

### Empty Block

- Empty block are not allowed
  `no-empty`

```diff
- const  something  = () => {}
+ const  something  = () => { //return value required }
```

### Switch cases

- Doesn't allow the duplicate switch case declaration
  `no-duplicate-switch-case`

```diff
- fails 
switch(expression) {  
case x:  
	// code block  
	break;  
case  x:  
	// code block  
	break;  
default:  
	// code block 
}
```

```diff
+ passes
switch(expression) {  
case x:  
	// code block  
	break;  
case  y:  
	// code block  
	break;  
default:  
	// code block 
}
```

### Spread operator

- Enforces the use of the ES2018 object spread operator over `Object.assign()` where appropriate  
  `prefer-object-spread`

```diff
- fails 
let  c  =  Object.assign(a, b);
```
```diff
+ passes
let c = {...a, ...b};
```

### Template string

- Warns on use of `${` in non-template strings.  
  `no-invalid-template-strings`

```diff
- "hai!, ${}"
```

```diff
+ `hai!, ${}`
```

- interpolation only works with template string

```diff
- "hai!, ${2+2}" // prints hai ${2+2}
```

```diff
+ `hai!, ${2+2}` // prints hai 4
```

### Filename casing

- Enforces a consistent file naming convention which helps maintaining a consistent style across a file hierarchy
  `file-name-casing`

```diff
- fails
userAccount.tsx //tsx should follow pascal-case
```

```diff
+ passes
UserAccount.tsx
```

### Trailing Comma
- Enforces a consistent trailing-comma which helps maintaining a consistent style across a file hierarchy
  `trailing-comma`


### No Console
- In general, `console` methods aren’t appropriate for production code.

```diff
- fails
console.log(something)
```

### No Any 
- Disallows usages of  `any`  as a type declaration.
```diff
- fails
let a : any = 'something'
```

```diff
+ passes
let a : string = 'something'
```
### Interface Over Type Literal
-	interface-over-type-literal is set as false for interface declaration over a type literal
-	```"interface-over-type-literal" :false```

```diff
+ passes
type Foo = {foo: number}; // Allowed
interface Foo {foo: number} // Allowed
```

### No Var Keyword
- Enforce a consist of var keyword, instead of using let, const only
- ```"no-var-keyword" : true```

```diff
- fails
var something = 'Hello'
```
```diff
+ passes
let something = 'Hello'
const something = 'Hello'
```

### Semicolon
- Each line of instruction is called a  **statement**. Semicolons are optional in TypeScript.
```diff
- fails
const something = 'Hello World';
```
```diff
+ passes
const something = 'Hello World'
```

### No Unnecessary Class
- Disallows classes that are not strictly necessary.
- ```"no-unnecessary-class": true```
```diff
- fails
class  A{}
```

### No Unused Imports
- ```"no-unused-imports" :true``` 
- This will remove the un-used imports automatically

### Invalid RegExp
- ```"no-invalid-regexp": true```
- Used to find the invalid reg expression

### Unnecessary Bind
- Prevents unnecessary and/or misleading scope bindings on functions.	
- `function` expressions that are immediately bound to `this` are equivalent to `() =>`arrow lambdas. Additionally, there’s no use in binding a scope to an arrow lambda, as it already has one.
- ```"unnecessary-bind": true```

### Function Constructor
- Prevents using the built-in Function constructor.
```diff
- fails
- let doesNothing = new Function();
 ```

```diff
+ passes
+ let doesNothing = () => {};
 ```
 
### No parameter Re assignment
```diff
- fails
const  add  = (x:  number, y:  number) :  number  => {
	x+ = y; // Not allowed.
return  x+y;
}
```
