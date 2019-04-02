import React from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

class App extends React.Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <h2 className={this.state.count >= 10 ? 'warning' : null}>
          Count: {this.state.count}
        </h2>
        <button
          onClick={() =>
            this.setState(prevState => ({ count: prevState.count + 1 }))
          }
        >
          Add one!
        </button>
        <button
          onClick={() =>
            this.setState(prevState => ({ count: prevState.count - 1 }))
          }
        >
          Subtract one!
        </button>
        {this.state.count >= 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
