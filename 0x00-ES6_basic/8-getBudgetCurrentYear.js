function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget{
    budget[`income-${getCurrentYear()}`] = income;
    budget[`gdp-${getCurrentYear()}`] = gdp;
    budget[`capita-${getCurrentYear()}`] = capita;
  }

  return Object.values(budget);
}

safety 