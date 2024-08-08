/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#FFFFFF",      
                secondary: "#6701A3",   
                tertiary: "#003366",   
                successPrimary: "#4BB39B",
                successSecondary: "#beffefcb",
                errorPrimary: "#cf6952",
                errorSecondary: "#ffcfc49a",
                "black-100": "#2C2C2C", 
                "black-200": "#1A1A1A", 
                "white-100": "#F5F5F5" 
            },
        boxShadow: {
            card: "0px 35px 120px -15px #211e35",
            button: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        },
        },
    },
    plugins: [],
};
