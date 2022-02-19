import axios from 'axios';

const API_URL = 'https://wallet.goit.ua/api';

export const signUserUp = async signUpDto => {
  const response = await axios.post(`${API_URL}/auth/sign-up`, signUpDto);
  const userData = response.data;
  return userData;
};

export const signUserIn = async signInDto => {
  const response = await axios.post(`${API_URL}/auth/sign-in`, signInDto);
  const userData = response.data;
  return userData;
};

export const getCurrentUser = async token => {
  const response = await axios.get(`${API_URL}/users/current`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const currentUser = response.data;
  return currentUser;
};

export const signUserOut = async token => {
  await axios.delete(`${API_URL}/auth/sign-out`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getTransactions = async token => {
  const response = await axios.get(`${API_URL}/transactions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getTransactionCategories = async token => {
  const response = await axios.get(`${API_URL}/transaction-categories`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const transactionCategories = response.data;
  return transactionCategories;
};

export const createTransaction = async (createTransactionDto, token) => {
  const response = await axios.post(`${API_URL}/transactions`, createTransactionDto, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const transactionsData = response.data;
  return transactionsData;
};

export const getChartData = async ({ token, year = '', month = '' }) => {
  let url = `${API_URL}/transactions-summary`;
  if (year && month) {
    url = `${API_URL}/transactions-summary?year=${year}&month=${month}`;
  }

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const chartData = response.data;
  return chartData;
};
