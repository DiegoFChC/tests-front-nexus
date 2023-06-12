import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, waitFor } from '@testing-library/react';
import AlertMessage from './AlertMessage';

jest.useFakeTimers(); // Simula el temporizador para el autoHideDuration

describe('AlertMessage component', () => {
  test('should render message and close the alert after autoHideDuration', async () => {
    const message = 'Test message';
    const type = 'success';

    const { getByText, queryByText } = render(
      <AlertMessage message={message} type={type} />
    );

    const alertMessage = getByText(message);
    expect(alertMessage).toBeInTheDocument();

    // Espera el tiempo del autoHideDuration
    jest.advanceTimersByTime(3000);

    // Espera a que el Snackbar se cierre
    await waitFor(() => {
      expect(queryByText(message)).toBeNull();
    });
  });

  test('should not close the alert when clickaway', async () => {
    const message = 'Test message';
    const type = 'success';

    const { getByText } = render(
      <AlertMessage message={message} type={type} />
    );

    const alertMessage = getByText(message);
    expect(alertMessage).toBeInTheDocument();

    // Simula el click en el Snackbar
    fireEvent.click(alertMessage);

    // Espera el tiempo del autoHideDuration
    jest.advanceTimersByTime(3000);

    // Verifica que el Snackbar aún esté abierto
    await waitFor(() => {
      expect(alertMessage).toBeInTheDocument();
    });
  });
});
