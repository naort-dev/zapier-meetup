module.exports = {
  type: 'oauth2',
  test: {
    headers: { Authorization: 'Bearer {{bundle.authData.access_token}}' },
  },
};
