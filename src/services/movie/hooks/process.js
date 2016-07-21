'use strict';

// src/services/movie/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options) {
  return function(hook) {
    // The authenticated message
    const message = hook.data.message;
    // The actual message title
    const title = hook.data.title
    // Messages can't be longer than 400 characters
      .substring(0, 400)
    // Do some basic HTML escaping
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

    // Override the original data
    hook.data = {
      title,
      // Set the message id
      //messageId: message._id,
      // Add the current time via `getTime`
      createdAt: new Date().getTime()
    };
  };
};
