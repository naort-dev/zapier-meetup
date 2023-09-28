module.exports = {
  operation: {
    perform: {
      url:
        'https://api.meetup.com/{{bundle.inputData.urlname}}/events/{{bundle.inputData.eventid}}',
      method: 'DELETE',
      params: { eventid: '{{bundle.inputData.eventid}}' },
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer {{bundle.authData.access_token}}',
      },
      body: {},
      removeMissingValuesFrom: {},
    },
    inputFields: [
      {
        key: 'urlname',
        label: 'URL Slug',
        type: 'string',
        helpText: 'The group portion of your Meetup URL',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'eventid',
        label: 'Event ID',
        type: 'string',
        helpText: 'The Meetup ID of the event to delete',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
  },
  key: 'delete_event',
  noun: 'Event',
  display: {
    label: 'Delete Event',
    description: 'Deletes an Event',
    hidden: false,
    important: true,
  },
};
