import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ThemeProvider } from './ui-components/ui-kit/Palette/ThemeProvider';
import { Layout } from './ui-components/composed-components/Layout';

const propTypes = {};

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div
          style={{
            backgroundColor: 'var(--bg-level-1)',
            color: 'var(--body-text-color-0)'
          }}
        >
          Hello, App
        </div>
      </Layout>
    </ThemeProvider>
  );
}

App.propTypes = propTypes;

ReactDOM.render(<App />, document.getElementById('root'));
