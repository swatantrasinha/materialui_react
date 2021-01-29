use Select
use MenuItem to make dropdown
Place Holder
use state with value
onChange event

## Note : on value change in dropdown, if there is warning in console like below :
findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node

then in index.js do the following
========================================================================
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <App/>,
  document.getElementById('root')
);
========================================================================


