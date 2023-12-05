#include <fstream>
#include<iostream>
#include <vector>
#include "Card.cpp"

int main() {
  std::ifstream input("input.txt");
  if (!input.is_open()){
    std::cout << "Error opening file" << std::endl;
    return 2;
  }
  std::string line;
  int value = 0;
  std::vector<int> noScratchCards;
  int lineIndex = 0;
  while(std::getline(input, line)) {
    if (lineIndex == noScratchCards.size()){
      noScratchCards.push_back(1);
    } else {
      noScratchCards[lineIndex]++;
    }
    
    Card card;
    card.InsertFromCardInputString(line);
    card.calculateValue();
    value += card.getValue();
    
    std::cout << "on line " << lineIndex << " numcards " << noScratchCards[lineIndex] << " length " << noScratchCards.size() << std::endl;
    
    // Task 2:
    for (int i = 0; i < noScratchCards[lineIndex]; i++){
      Card card;
      card.InsertFromCardInputString(line);
      card.calculateValue();
      
      int wins = card.getWins();
      
      for (int i = lineIndex + 1; i < lineIndex + 1 + wins; i++){
        if (i == noScratchCards.size()){
          noScratchCards.push_back(1);
        } else {
          noScratchCards[i]++;
        }
      }
    }
    
    lineIndex++;
  }
  input.close();
  std::cout << value << std::endl;
  
  std::cout << lineIndex << noScratchCards.size() << std::endl;
  
  int totalCards = 0;
  for (int i = 0; i < lineIndex; i++){
    totalCards += noScratchCards[i];
  }
  
  std::cout << "Total scratchcards: " << totalCards << std::endl;
  
  return 0;
}