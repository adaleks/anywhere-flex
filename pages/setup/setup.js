import AbstractView from"../AbstractView.js";import setupPage from"./setup.html";export default class extends AbstractView{constructor(t){super(t),this.setTitle("Setup")}script(){console.log("Setup page load success")}async getHtml(){return setupPage}}