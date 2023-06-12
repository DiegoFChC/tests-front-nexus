import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

import { render, fireEvent } from "@testing-library/react";
import ButtonIcon from "./ButtonIcon";
import { changeLanguage } from "../../functions/changeLanguage";

// Mockear la función changeLanguage
jest.mock("../../functions/changeLanguage", () => ({
  changeLanguage: jest.fn(),
}));

// Mockear la función navigate
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("ButtonIcon component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('render component ButtonIcon"', () => {
    const component = render(
      <ButtonIcon text="Button" icon="icon.png" link="language" />
    );
    component.debug()
  });

  test('should call changeLanguage when link is "language"', () => {
    const { getByTestId } = render(
      <ButtonIcon text="Button" icon="icon.png" link="language" />
    );
    const button = getByTestId("click");

    fireEvent.click(button);

    expect(mockNavigate).not.toHaveBeenCalled();
    expect(changeLanguage).toHaveBeenCalledTimes(1);
    expect(changeLanguage).toHaveBeenCalledWith(expect.any(Object));
  });
  
});
