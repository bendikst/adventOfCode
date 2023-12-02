use std::collections::HashSet;

fn main() {
    let input_string: String = include_str!("../input.txt").to_string();

    let mut position = 0;

    for (ind, _) in input_string.chars().enumerate() {
        if ind+3 == input_string.len() {
            break;
        }
        let mut set: HashSet<char> = HashSet::new();
        let variablejusttomakethisrun = input_string.get(ind..ind+4).unwrap().chars().map(|c| {
            println!("{}, inserted? {}", c, set.insert(c));
        }).count();
        println!("{}", variablejusttomakethisrun);
        println!("{}", set.len());


        if set.len() == 4 {
            position = ind+4;
            break;
        }
    }


    println!("{}",position);
}
