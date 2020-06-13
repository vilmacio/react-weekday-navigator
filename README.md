<h1 align="center">React Weekday Navigator</h1>
<h4 align="center">
  A calendar component with moment.js. 
  <a href="https://vilmacio22-react-weekday-navigator.netlify.app/">Open on Netlify</a>.
</h4>
<p align="center">
  <img src="https://img.shields.io/static/v1?label=languages&message=3&color=yellow" />
  <img src="https://img.shields.io/badge/repo%20size-1.1%20MB-blue" />
  <img src="https://img.shields.io/badge/repo%20files-34-blue" />
  <img src="https://img.shields.io/github/issues/vilmacio22/app-whois" />
  <img src="https://img.shields.io/github/license/vilmacio22/react-weekday-navigator?label=licence" />
 </p>
 <p align="center">
  <a href="#how-to-install">How To Install</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#use-cases">Use Cases</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/50785489/84575839-a2fe0200-ad86-11ea-8e39-c376f1be9253.gif">
 </p>
 
## How to Install
To clone and run this web application, you'll need [Git](https://git-scm.com) + [Node.js v10.16](https://nodejs.org/en) or higher. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/vilmacio22/react-weekday-navigator

# Install dependencies
$ yarn install

# Start in the browser
$ yarn start

# Build the app
$ yarn build
```

## Use cases
Example projects
* Calendar
* Event list
* Todo list
```javascript
{days.map(item =>
  <Link className='item' key={item.id} to={`/${item.number}`}>
    <h2>{item.number}</h2>
    <h4>{item.day}</h4>
  </Link>
)}
```
