// common.js
"use strict";

export const PLAYERS = ["Abia","Ibad","Umer","Udan","Ubba","Mamu"];

export function setPlayer(name){
  localStorage.setItem("selectedPlayer", name);
}

export function getPlayer(){
  return localStorage.getItem("selectedPlayer") || "";
}

/**
 * Build asset URLs relative to this module (works on GitHub Pages subpaths).
 */
export function playerImg(name){
  return new URL(`players/${name}.png`, import.meta.url).toString();
}

/**
 * GitHub Pages-safe navigation.
 * Always resolves relative to the CURRENT page URL (preserves /REPO_NAME/).
 */
export function go(file){
  window.location.assign(new URL(file, window.location.href).toString());
}

export function routeSpecialCases(name){
  if (name === "Udan") {
    localStorage.setItem("specialMessage", "Too young to play 😴");
    go("loser.html");
    return true;
  }
  if (name === "Mamu") {
    localStorage.setItem("specialMessage", "Mamu Rules the World 👑");
    go("winner.html");
    return true;
  }
  return false;
}
