const test = async () => {
  try {
    return "Test 123";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  test,
};