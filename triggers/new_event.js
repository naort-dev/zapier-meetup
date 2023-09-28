module.exports = {
  operation: {
    perform: {
      url: 'https://api.meetup.com/{{bundle.inputData.urlname}}/events',
      method: 'GET',
      params: {},
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer {{bundle.authData.access_token}}',
      },
      body: {},
      removeMissingValuesFrom: {},
    },
    inputFields: [
      {
        key: 'urlname',
        type: 'string',
        label: 'Meetup Group URL Slug',
        helpText:
          'The meetup group to query. If your group URL is `https://www.meetup.com/My-Example` then the URL Slug will be `My-Example`',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
  },
  key: 'new_event',
  noun: 'Event',
  display: {
    label: 'New Event',
    description: 'Triggers when a new event is created.',
    hidden: false,
    important: true,
  },
};
