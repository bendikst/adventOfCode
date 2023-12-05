
#include <cctype>
#include <vector>
#include <string>
#include <iostream>
class Card {
  int value = 0;
  int taskTwoWins = 0;
  std::vector<int> winning_numbers;
  std::vector<int> numbers;
  
  
  public:
    int calculateValue(){
        for (auto &number: numbers){
          if (std::find(winning_numbers.begin(), winning_numbers.end(), number) != winning_numbers.end()){
            taskTwoWins++;
            if (value == 0){
              value = 1;
            } else {
              value = value*2;
            }
          }
        }
        return value;
    };
    
    void InsertFromCardInputString(std::string inputCard){
        int index = inputCard.find(":");
        inputCard.erase(0, index+1); // remove Game x:
        
        index = inputCard.find("|");
        std::string winningString = inputCard.substr(0, index);
        std::string numbersString = inputCard.substr(index+1, inputCard.length());
        numbersString += " "; // Hack...
        
        std::string delimiter = " ";
        size_t pos = 0;
        std::string token;
       
        while (std::isspace(winningString[0])) {
          winningString.erase(0, 1);
        }
        while ((pos = winningString.find(delimiter)) != std::string::npos) {
          token = winningString.substr(0, pos);
          winning_numbers.push_back(std::stoi(token));
          winningString.erase(0, pos + delimiter.length());
          while (std::isspace(winningString[0])) {
            winningString.erase(0, 1);
          }
        }
        
        while (std::isspace(numbersString[0])) {
          numbersString.erase(0, 1);
        }
        while ((pos = numbersString.find(delimiter)) != std::string::npos) {
          token = numbersString.substr(0, pos);
          numbers.push_back(std::stoi(token));
          numbersString.erase(0, pos + delimiter.length());
          while (std::isspace(numbersString[0])) {
            numbersString.erase(0, 1);
          }
        }        
    };
    
    int getValue(){
      return value;
    }
    
    int getWins(){
      return taskTwoWins;
    }
};