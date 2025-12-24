// common.js
"use strict";

export const PLAYERS = ["Abia","Ibad","Umer","Udan","Ubba","Mamu"];

export function setPlayer(name){
  localStorage.setItem("selectedPlayer", name);
}

export function getPlayer(){
  return localStorage.getItem("selectedPlayer") || "";
}

export function playerImg(name){
  return `players/${name}.png`;
}

export function go(url){
  window.location.href = url;
}

export function routeSpecialCases(name){
  // Udan -> too young -> loser
  if (name === "Udan") {
    localStorage.setItem("specialMessage", "Too young to play 😴");
    go("loser.html");
    return true;
  }
  // Mamu -> rules -> winner
  if (name === "Mamu") {
    localStorage.setItem("specialMessage", "Mamu Rules the World 👑");
    go("winner.html");
    return true;
  }
  return false;
}
