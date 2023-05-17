
# Change Log
### react-faq-component-semantic-html
React component to add FAQPage to your website / blog.
Implements Schema.org Structured Data.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).
 
## [1.0.2] - 2023-05-16
 
Small changes were made: Babel is changed in favor of SWC, unused dependencies are removed, Read more details below.
 
### Added
- We changed the compilation from Babel to SWC.
- Use runtime: automatic to use a JSX runtime module (e.g. react/jsx-runtime introduced in React 17).
 
### Changed
- Removed unused dependencies:
-- @babel/polyfill
-- @babel/runtime
-- core-js
- Moved to peerDependencies:
-- "@emotion/react": "11.4.0"
-- "@emotion/styled": "11.3.0"
- **You must install the above peerDependencies for the component to work (ignore if you already have them added to your project).**

### Removed
- Removed devDependencies:
-- @babel/cli
-- @babel/core
-- @babel/preset-env
-- @babel/preset-react
 
## [1.0.1] - 2023-05-09
 
### Fixed
 
- Fixed library entry point.
 
## [1.0.0] - 2023-05-09
 
### Initial Release