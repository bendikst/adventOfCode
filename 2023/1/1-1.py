def main():
    f = open('input.txt', 'r')
    res = 0
    for line in f:
        lineres = []
        for c in line:
            if c.isnumeric():
                lineres.append(c)
        res += int(lineres[0] + lineres[-1])
    print(res)

if __name__ == '__main__':
    main()