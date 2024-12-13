import './App.css';
import { createTheme } from '@mui/material/styles';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import MainLayout from './layouts/MainLayout';
import GridLayout from './layouts/GridLayout';
import { blueGrey } from '@mui/material/colors';

const borderColor = blueGrey[50]

const theme = createTheme({
  direction: 'rtl',
  shape: {
    borderRadius: '.5rem'
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          borderBottom: `1px solid ${borderColor}`
        }
      }
    }
  }
});

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <GridLayout></GridLayout>
        </MainLayout>
    </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
