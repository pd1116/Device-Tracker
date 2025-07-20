// File: src/theme.js
import { createTheme } from '@mui/material/styles';

export const getDesignTokens = (mode) => ({
   palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light theme
          primary: {
            main: '#d4af37', // dark yellow
          },
          background: {
            default: '#f5f5f5',
            paper: '#ffffff',
          },
          text: {
            primary: '#000000',
          },
        }
      : {
          // Dark theme
          primary: {
            main: '#d4af37', // dark yellow
          },
          background: {
            default: '#000000', // black background
            paper: '#121212',
          },
          text: {
            primary: '#ffffff',
          },
        }),
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          minWidth: 650,
          borderCollapse: 'collapse'
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '12px',
          borderBottom: '1px solid #ccc',
        },
        head: {
          fontWeight: 'bold',
          backgroundColor: mode === 'light' ? '#e3f2fd' : '#1f2a38',
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '16px',
          margin: '20px auto',
          maxWidth: '1000px',
          
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px'
        }
      }
    }
  },
});