import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

test("renders content", () => {
  render(
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <Navbar />
      </I18nextProvider>
    </BrowserRouter>
  );
});

test("clicking logo should navigate to home page", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <Navbar />
      </I18nextProvider>
    </BrowserRouter>
  );

  const logo = getByTestId("clickImg");
  fireEvent.click(logo);

  // Add your assertion here to check if navigation to the home page occurred
});

test("clicking menu icon should open the drawer", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <Navbar />
      </I18nextProvider>
    </BrowserRouter>
  );

  const menuIcon = getByTestId("click-img2");
  fireEvent.click(menuIcon);

  // Add your assertion here to check if the drawer is open
});

// test("clicking language icon should change the language", () => {
//   const { getByTestId } = render(
//     <BrowserRouter>
//       <I18nextProvider i18n={i18next}>
//         <Navbar />
//       </I18nextProvider>
//     </BrowserRouter>
//   );

//   const languageIcon = getByTestId("click-lng");
//   fireEvent.click(languageIcon);

//   // Add your assertion here to check if the language is changed
// });

// Add more tests as needed for other interactions and functionalities

// import React from "react";
// import "@testing-library/jest-dom/extend-expect";
// import { render, fireEvent } from "@testing-library/react";
// import Navbar from "./Navbar";
// import { BrowserRouter } from "react-router-dom";
// import { I18nextProvider } from "react-i18next";
// import i18next from "i18next";

// test("renders content", () => {
//   const componente = render(
//     <BrowserRouter>
//       <I18nextProvider i18n={i18next}>
//         <Navbar />
//       </I18nextProvider>
//     </BrowserRouter>
//   );
//   componente.debug();
// });

// test("Clicks Navbar", () => {
//   const component = render(
//     <BrowserRouter>
//       <I18nextProvider i18n={i18next}>
//         <Navbar />
//       </I18nextProvider>
//     </BrowserRouter>
//   );
//   const img = component.getByTestId("clickImg");
//     fireEvent.click(img);

//   describe("Img click", () => {
    
//   });

//   describe("Img2 click", () => {
//     const img = component.getByTestId("click-img2");
//     fireEvent.click(img);
//   });

//   describe("Button click", () => {
//     const btn = component.getByTestId("click-btn");
//     fireEvent.click(btn);
//   });

//   describe("Language icon click", () => {
//     const lng = component.getByTestId("click-lng");
//     fireEvent.click(lng);
//   });
// });