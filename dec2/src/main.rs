use std::{fs, iter::Map};

// enum Points {
//     A = 1,
//     B = 2,
//     C = 3
// }

// enum ResultPoints {
//     WIN = 6,
//     DRAW = 3,
//     LOSE = 0
// }

const LEGALA: [&str; 3] = ["A", "B", "C"];
const LEGALB: [&str; 3] = ["X", "Y", "Z"];

fn main() {
    let file_contents = fs::read_to_string("input.txt")
        .expect("Could not read file");

    let v: Vec<&str> = file_contents.split('\n').collect();
    let mut score: u32 = 0;
    
    for elem in v.iter() {
        let test: Vec<&str> = elem.split(' ').collect();
        score = score + calculate_score(test[0], test[1])
    }

    println!("{}", score);
}

fn calculate_score(l: &str, r: &str) -> u32{
    if (!LEGALA.iter().any(|&x| x == l)){
        panic!("Invalid characters in input");
    }
    if (!LEGALB.iter().any(|&x| x == r)){
        panic!("Invalid characters in input");
    }
    

    let mut score: u32 = 0;

    // match r {
    //     "X" => score = score + 1,
    //     "Y" => score = score + 2,
    //     "Z" => score = score + 3,
    //     _other => panic!("Unrecognised character!")
    // }
    
    if (l == "A") {
        match r {
            "X" => score = score + 3,
            "Y" => score = score + 3 + 1,
            "Z" => score = score + 6 + 2,
            _other => panic!("Unrecognised character!")
        }
    } else if (l == "B") {
        match r {
            "X" => score = score + 1,
            "Y" => score = score + 3 + 2,
            "Z" => score = score + 6 + 3,
            _other => panic!("Unrecognised character!")
        }
    } else if (l == "C") {
        match r {
            "X" => score = score + 2,
            "Y" => score = score + 3 + 3,
            "Z" => score = score + 6 + 1,
            _other => panic!("Unrecognised character!")
        }
    }

    return score;
}
