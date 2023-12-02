
def main():
    f = open('input.txt', 'r')
    calories = [[]]
    line = f.readline()
    i = 0
    while line:
        if(line == '\n'):
            i += 1
            calories.append([])
            line = f.readline()
            continue
        calories[i].append(line.strip())
        line = f.readline()

    maxCalories = [0, 0, 0]
    for elf in range(len(calories)):
        calsForElf = sum([eval(cal) for cal in calories[elf]])
        minOfTheMax = maxCalories.index(min(maxCalories))
        if calsForElf > maxCalories[minOfTheMax]:
            maxCalories[minOfTheMax] = calsForElf
        

    print(sum(maxCalories))

if __name__ == '__main__':
    main()
