import AbstractView from"../AbstractView.js";import gridsystemPage from"./gridsystem.html";export default class extends AbstractView{constructor(t){super(t),this.setTitle("GridSystem")}script(){console.log("GridSystem page load success")}async getHtml(){return gridsystemPage}}