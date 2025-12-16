import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { PaymentSummary } from "./PaymentSummary";

vi.mock('axios')

describe('PaymentSummary component', () => {
  let paymentSummary;
  let loadCart;

  beforeEach(() => {
    paymentSummary = {
      totalItems: 3,
      productCostCents: 4275,
      shippingCostCents: 499,
      totalCostBeforeTaxCents: 4774,
      taxCents: 477,
      totalCostCents: 5251,
    };

    loadCart = vi.fn();
  });

  it('displays the correct details', async() => {
    render(
      <MemoryRouter>
        <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
      </MemoryRouter>
    );

    expect(screen.getByText('Items (3):')).toBeInTheDocument();

    expect(
      within(screen.getByTestId("payment-summary-product-cost")).getByText(
        "$42.75"
      )
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId('payment-summary-shipping-cost')).getByText(
        '$4.99'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("payment-summary-total-before-tax")
    ).toHaveTextContent("$47.74");

    expect(
      screen.getByTestId('payment-summary-tax')
    ).toHaveTextContent('$4.77');

    expect(screen.getByTestId("payment-summary-total-cost")).toHaveTextContent(
      "$52.51"
    );
  });
})
