import { RedocStandalone } from 'redoc';
import openapi from './data/openapi'

function App() {
  return (
    <RedocStandalone spec={openapi} options={{
        hideDownloadButton: true,
        disableSearch: false,
        pathInMiddlePanel: false,
        menuToggle: true,
        hideSchemaTitles: false,
        theme: {
          colors: {
            border: {
              light: "#e20069",
              dark: "#afac00"
            },
            primary: {
              main: "#e20069",
              dark: "#afac00"
            },
            text: {
              primary: "#000",
              secondary: "#000"
            }
          },
          logo: {
            maxHeight: "150px",
            maxWidth: "150px",
          },
          rightPanel: {
            backgroundColor: "rgb(12, 0, 39)",
            servers: {
              overlay: {
                backgroundColor: "#e20069",
                textColor: "#000"
              },
            }
          },
          typography: {
            fontSize: "17px"
          }
        }
      }} />
  );
}

export default App;
