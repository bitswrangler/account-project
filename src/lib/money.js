import Decimal from "decimal.js";

// Global config (optional)
Decimal.set({
  precision: 20,
  rounding: Decimal.ROUND_HALF_UP,
});

export const money = (value = 0) => new Decimal(value);

export const add = (a, b) => money(a).plus(b);
export const subtract = (a, b) => money(a).minus(b);
export const multiply = (a, b) => money(a).times(b);
export const divide = (a, b) => money(a).div(b);

export const isZero = (value) => money(value).equals(0);

export const toNumber = (value) => money(value).toNumber();
export const toString = (value) => money(value).toFixed(2);

// Debit / Credit helpers
export const debitCreditDiff = (debit, credit) => money(debit).minus(credit);

// Validation
export const isBalanced = (totalDebit, totalCredit) =>
  money(totalDebit).equals(totalCredit);
