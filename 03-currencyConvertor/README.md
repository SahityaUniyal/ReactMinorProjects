# Currency Converter

A simple React application for currency conversion. In which we learned about creating our own hook

## Overview

Currency Converter is a React application that enables users to convert currency values seamlessly. The application utilizes the `useCurrencyInfo` custom hook to fetch real-time currency exchange rates for the selected base currency.

## Features

- **Currency Conversion**: Convert currency values from one denomination to another
- **Currency Swap**: Quickly switch between "From" and "To" currencies with a single click

#### `useCurrencyInfo` Custom Hook

The `useCurrencyInfo` hook is a crucial part of this project, responsible for fetching and managing currency exchange rate information. By providing a base currency code as a parameter, it returns an object containing exchange rates for various currencies.

The currency exchange rate information is fetched from the following API link:

https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json
