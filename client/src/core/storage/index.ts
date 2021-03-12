
const storage = {
  /**
   *
   * @param {String} key
   * @param {string} value
   *
   */
  set: (key: string, value: string) => {
    return localStorage.setItem(key, value);
  },
  /**
   *
   * @param {String} key
   *
   */
  get: (key: string) => {
    return localStorage.getItem(key);
  },
  /**
   *
   * @param {String} key
   *
   */
  delete: (key: string) => {
    return localStorage.removeItem(key);
  },
  clear: () => {
    return localStorage.clear();
  },
};

export {storage};
