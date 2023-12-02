
fn main() {
    // let mut test = include_bytes!("../input.txt")
    //     .split(|b| *b == b'\n')
    //     .map(|a| a.split(|elem| *elem == b','))
    //     .map(|mut first| println!("{:?}", first.next().unwrap()) );


    let num = include_str!("../input.txt")
        .lines()
        .map(|line| {
            let (l, r) = line.split_once(',').unwrap();
            let ((a, b), (c, d)) = (l.split_once('-').unwrap(), r.split_once('-').unwrap());
            return (
                a.parse::<u8>().unwrap(),
                b.parse::<u8>().unwrap(),
                c.parse::<u8>().unwrap(),
                d.parse::<u8>().unwrap()
            )

        })
        // Part 1:
        // .filter(|(a, b, c, d)| (a >= c && b <= d) || (c >= a && d <= b))
        // Part 2:
        .filter(|(a, b, c, d)| 
        (a >= c && a <= d) || 
        (b >= c && b <= d) ||
        (c >= a && c <= b) ||
        (d >= a && d <= b)
        )
        .count();
    
    println!("{}", num);
}
