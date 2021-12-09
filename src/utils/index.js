export const calcPages = (total, perPage = 20) => {
    const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(total / perPage); i++) {
          pageNumbers.push(i);
      }
      return pageNumbers;
  }