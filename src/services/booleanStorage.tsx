function getItem(key, { defaultValue = false } = {}) {
  if (typeof window === 'undefined') {
    return undefined;
  }

  const value = localStorage.getItem(key);
  if (value === null) {
    return defaultValue;
  }

  return Boolean(Number(value));
}

function setItem(key, value) {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.setItem(key, String(Boolean(value)));
}

export default {
  getItem,
  setItem,
};