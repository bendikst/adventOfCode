NUMS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
def main():
    f = open('input.txt', 'r')
    res = 0
    for line in f:
        lineres = {} #index, number
        for num in NUMS:
            firstmatch = line.find(num)
            lastmatch = line.rfind(num)
            if firstmatch != -1:
                lineres[firstmatch] = str(NUMS.index(num))
            if lastmatch != -1:
                lineres[lastmatch] = str(NUMS.index(num))
        for i, c in enumerate(line):
            if c.isnumeric():
                lineres[i] = c
                
        res += int(lineres[min(lineres.keys())] + lineres[max(lineres.keys())])
    print(res)


if __name__ == '__main__':
    main()
    