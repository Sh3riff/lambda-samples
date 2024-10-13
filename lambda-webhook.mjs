

export const handler = async (event) => {
  setImmediate(async () => {
      try {
          // Perform Other operation after returning 200;
          
      } catch (error) {
          // Handle later
      }
  });
  return {
      statusCode: 200,
      body: {}
  }
};
