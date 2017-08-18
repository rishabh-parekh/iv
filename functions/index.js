/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(
  `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);
exports.sendEmailConfirmation = functions.database.ref('/Illuminate/contactus').onCreate(event => {
  const snapshot = event.data;
  const val = snapshot.val();
  console.log('value is:' + JSON.stringify(val));
  const mailOptions = {
    from: '"Illuminate Stories." <illuminatestories@gmail.com>',
    to: val.email
  };
  mailOptions.subject = 'Thanks and Welcome!';
  mailOptions.text = 'Thanks you for reaching out to us.';
  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('New subscription confirmation email sent to:', val.email);
  }).catch(error => {
    console.error('There was an error while sending the email:', error);
  });
});
