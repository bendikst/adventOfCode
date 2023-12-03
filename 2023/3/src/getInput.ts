import {readFile} from 'fs/promises';

//export async function fetchInput(url: string) {
//  const request = {
//    method: "GET",
//    mode: "no-cors"
//  }
//  const res = await fetch(url, request);
//  const output = await res.json();
//  console.log(res);
//}

type entry = {
  num: number,
  startX: number,
  endX: number,
  y: number
}

export async function readInputTo3dArray(filename: string) {
  try {
    const res = await readFile(filename, 'utf-8');
    const lines = res.split('\n')
    const numLines = lines.length;
    const numSymbols = lines[0].length
    const arr = lines.map(line => line.split(''))
    
    return arr;
  }
  catch (err) {
    console.error('Error reading file', err)
  }
}

function isAdjacentToSymbol(startXIndex: number, endXIndex: number, yIndex: number, arr: Array<Array<string>>): boolean{
  const adjacentSymbols: string[] = [];
  if (yIndex !== 0) {
    adjacentSymbols.push(...arr[yIndex-1].slice(Math.max(0, startXIndex-1), Math.min(arr[yIndex].length, endXIndex+2)))
  }
  
  if (startXIndex !== 0){
    adjacentSymbols.push(arr[yIndex][startXIndex-1])
  }
  
  if (endXIndex !== arr[yIndex].length-1){
    adjacentSymbols.push(arr[yIndex][endXIndex+1])
  }
  
  if (yIndex !== arr.length-1) {
    adjacentSymbols.push(...arr[yIndex+1].slice(Math.max(0, startXIndex-1), Math.min(arr[yIndex].length, endXIndex+2)))
  }
  console.log(adjacentSymbols);
  return !adjacentSymbols.every(symbol => symbol === '.' || isNumeric(symbol))
}

function isAdjacentToStar(startXIndex: number, endXIndex: number, yIndex: number, arr: Array<Array<string>>): boolean{
  const adjacentSymbols: string[] = [];
  if (yIndex !== 0) {
    adjacentSymbols.push(...arr[yIndex-1].slice(Math.max(0, startXIndex-1), Math.min(arr[yIndex].length, endXIndex+2)))
  }

  if (startXIndex !== 0){
    adjacentSymbols.push(arr[yIndex][startXIndex-1])
  }

  if (endXIndex !== arr[yIndex].length-1){
    adjacentSymbols.push(arr[yIndex][endXIndex+1])
  }

  if (yIndex !== arr.length-1) {
    adjacentSymbols.push(...arr[yIndex+1].slice(Math.max(0, startXIndex-1), Math.min(arr[yIndex].length, endXIndex+2)))
  }
  if (adjacentSymbols.find(char => char === "*")){
    return true;
  }
  else return false;
}

async function taskOne() {
  const schematic = await readInputTo3dArray("src/input.txt");
  let total = 0;
  schematic.forEach((line, yIndex) => {
    let endXIndex = 0;
    line.forEach((character, xIndex) => {
      if (xIndex > 0 &&xIndex <= endXIndex){
        return;
      }
      if (isNumeric(character)){
        let num = character;
        endXIndex = xIndex+1
        while(endXIndex < line.length){
          if (isNumeric(line[endXIndex])) {
            num += line[endXIndex];
            endXIndex += 1;
          } else {
            break;
          }
        }
        endXIndex -= 1;
        console.log(parseInt(num), " start: ", xIndex, "end: ", endXIndex);
        if (isAdjacentToSymbol(xIndex, endXIndex, yIndex, schematic)){
          console.log(true);
          total += parseInt(num);
        }
      }
      
    })
  })
  console.log("Total: ", total)
}

async function taskTwo() {
  const schematic = await readInputTo3dArray("src/input.txt");
  let total = 0;
  let adjacentToStars: Array<entry> = new Array<entry>;
  let starIndexes = new Array<{x: number, y: number}>
  schematic.forEach((line, yIndex) => {
    let endXIndex = 0;
    line.forEach((character, xIndex) => {
      if (xIndex > 0 &&xIndex <= endXIndex){
        return;
      }
      if (character === "*"){
        starIndexes.push({x: xIndex, y: yIndex})
      }
      if (isNumeric(character)){
        let num = character;
        endXIndex = xIndex+1
        while(endXIndex < line.length){
          if (isNumeric(line[endXIndex])) {
            num += line[endXIndex];
            endXIndex += 1;
          } else {
            break;
          }
        }
        endXIndex -= 1;
        console.log(parseInt(num), " start: ", xIndex, "end: ", endXIndex);
        if (isAdjacentToStar(xIndex, endXIndex, yIndex, schematic)){
          console.log(true);
          adjacentToStars.push({
            num: parseInt(num),
            startX: xIndex,
            endX: endXIndex,
            y: yIndex
          })
          //total += parseInt(num);
        }
      }

    })
  })
  
  starIndexes.forEach(coordinate => {
    let matches = adjacentToStars.filter(entry => {
      return (
      (entry.y >= coordinate.y - 1 && entry.y <=coordinate.y + 1)
       && 
      (coordinate.x >= entry.startX - 1 && coordinate.x <= entry.endX + 1) 
      )
    })
    if (matches.length === 2) {
      total += matches[0].num * matches[1].num
    }
  })
  
  console.log("Total: ", total)
//  console.log(adjacentToStars);
//  console.log(starIndexes)
}


function isNumeric(char: string): boolean{
  return !isNaN(parseInt(char));
}

//taskOne();
taskTwo();


