import { RedocStandalone } from 'redoc';
import openapi from './data/openapi'

function App() {
  return (
    <RedocStandalone spec={openapi/*{
      "openapi": "3.0.1",
      "info": {
        "title": "TheCodeBuzz-Service",
        "version": "v1"
      },
      "paths": {
        "/api/Pay": {
          "get": {
            "tags": [
              "Pay"
            ],
            "responses": {
              "200": {
                "description": "Success",
                "content": {
                  "text/plain": {
                    "schema": {
                      "$ref": "#/components/schemas/Employee"
                    }
                  },
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Employee"
                    }
                  },
                  "text/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Employee"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "components": {
        "schemas": {
          "Employee": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "nullable": true,
                "readOnly": true
              },
              "name": {
                "type": "string",
                "nullable": true,
                "readOnly": true
              }
            },
            "additionalProperties": false
          }
        },
        "securitySchemes": {
          "bearerAuth": {
            "type": "http",
            "description": "JWT Authorization header using the Bearer scheme.",
            "scheme": "bearer",
            "bearerFormat": "JWT"
          }
        }
      },
      "security": [
        {
          "bearerAuth": []
        }
      ]
    }*/} options={{
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
