# React FAQ Component with Semantic HTML
## Include FAQ [schema.org](https://developers.google.com/search/docs/appearance/structured-data/faqpage?hl=en) | [google rich snippet](https://developers.google.com/search/docs/appearance/structured-data/faqpage?hl=en) optimization
**DEMO: https://react-faq-component-semantic-html-demo.vercel.app/**
 ***important message:***
if you are using vite.js with esbuild and Babel add the following line of code in `main.jsx`:
`window.React  =  React`
if you are using vite.js with swc this step is not necessary.

The component is made with semantic HTML, using the `<details></details>` and `<summary></summary>` tags.

The component receives the props:
|prop|type|isRequired|Options|Comments
|--|--|--|--|--|
|data|Array|:heavy_check_mark: ||see example below|
|theme|String|:x: |dark,	green,	netflix,	blue,	purple or 	custom|if you pass "custom" you must pass an object in the "customTheme" prop
|customTheme|Object|:x: or :heavy_check_mark: || only if “custom” is passed on “theme” prop.
|schemaName|String|:heavy_check_mark: ||for google bot purposes

## How to use:
install using `npm install react-faq-component-semantic-html`

```
import FAQComponent from  'react-faq-component-semantic-html'

const App = ()=>{
	return (
		<FAQComponent
			data={data}
			theme="green"
			customTheme={theme}
			schemaName="FAQ Page"
		/>
	)
}
```
### Data Example:
```
const  data  = [
{
	title: "Why This Price?",
	paragraph:'Because we buy the products together with other users, we can offer an affordable price for people who want to try the software. " **Please note that we are under no obligation to provide personalized assistance", But we do everything possible so that the installation / start-up process of the product is successful.',
	colors: {
		title: "red",
		paragraph: "white"
		}
},
{
	title: "How many devices are available to use?",
	paragraph: "As many as you want, we do not limit the devices to use."
},
{
	title: "Don't receive product after payment?",
	paragraph:
	"Our delivery system is semi-automatic, sometimes the delivery take more time was expected.",
	colors: {
		title: "#f09",
		paragraph: "red"
		}
}
];
```
**You can customize text color (for the question and the answer), by passing a `colors:{}` property in the JSON object of the question**
```
colors: {
	title: "#f09",
	paragraph: "#00ff51"
}
```
### Theme Example:
```
const  theme  = {
	background: `#09f`,
	color: `#red`,
	borderBottom: `.1px solid #fff`
};
```