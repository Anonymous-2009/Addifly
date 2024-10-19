export const customToastOptions = {
  // Success Toast
  success: {
    duration: 5000, // 5 seconds duration
    style: {
      background: '#1E1E2A', // Dark background
      color: '#FFFFFF', // White text color
      borderRadius: '8px', // Rounded corners
      border: '1px solid #2A75FF', // Border with blue color to match theme
      padding: '21px',
      maxWidth: '700px', // Increase width of the toast
      whiteSpace: 'nowrap', // Prevent text from wrapping
    },
    iconTheme: {
      primary: '#2A75FF', // Icon color (blue)
      secondary: '#1E1E2A', // Icon background (dark)
    },
  },
  // Error Toast
  error: {
    duration: 2500, // 2.5 seconds duration
    style: {
      background: '#1E1E2A', // Dark background
      color: '#FFFFFF', // White text color
      borderRadius: '8px', // Rounded corners
      border: '1px solid #FF4B4B', // Red border for errors
      padding: '20px',
      maxWidth: '700px', // Increase width of the toast
      whiteSpace: 'nowrap', // Prevent text from wrapping
    },
    iconTheme: {
      primary: '#FF4B4B', // Icon color (red)
      secondary: '#1E1E2A', // Icon background (dark)
    },
  },

  // Transition settings
  transition: {
    // Add the custom transition effects here
    enter: 'transform 0.3s ease, opacity 0.2s ease', // Enter with transform and opacity
    exit: 'transform 0.2s ease, opacity 0.15s ease', // Exit with transform and opacity
  },
};
