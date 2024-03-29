import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { theme } from '../styles/theme';
import { store } from '../store/store';
import { useGetSectorsQuery } from '../api/helldiversApi/helldiversApi';

function App() {
  const { data } = useGetSectorsQuery();

  return (
    <ThemeProvider theme={theme}>
      <div>{data?.data[0].id}</div>
    </ThemeProvider>
  );
}

export default App;
