import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import * as PIXI from "pixi.js";

import "./main.html";

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.onRendered(function() {
  const app = new PIXI.Application();

  // The application will create a canvas element for you that you
  // can then insert into the DOM
  this.firstNode.parentNode.appendChild(app.view);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  "click button"(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
