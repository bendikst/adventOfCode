use::std::fs;

fn main() {
    let characters: String = "abcdefghijklmnopqrstuvwxyz".to_string();
    let mut values: [char; 52] = ['a'; 52];
    for (i, character) in characters.chars().enumerate() {
        values[i] = character;
        values[i+26] = character.to_ascii_uppercase();
    }

    // for elem in values {
    //     println!("{}", elem);
    // }

    let file_contents = fs::read_to_string("input.txt")
    .expect("Could not read file");
    let mut rooms: Vec<[&str; 2]> = Vec::new();
    let mut found_in_both_compartments: Vec<char> = Vec::new();
    let arr: Vec<&str> = file_contents.split('\n').collect();
    // let test = "vJrwpWtwJgWrhcsFMMfFFhFps";
    // println!("{}", test.split_at(test.len()/2).0);
    // println!("{}", test.split_at(test.len()/2).1);

    // for elem in arr {
    //     let backpack = elem.split_at(elem.len()/2);
    //     rooms.push([backpack.0, backpack.1]);
    //     for character in backpack.0.chars() {
    //         if backpack.1.contains(character) {
    //             found_in_both_compartments.push(character);
    //             // let ind = values.iter().position(|x| x == &character).unwrap();
    //             // println!("{}, points: {}", character, ind+1);
    //             break;
    //         }
    //     }
    //     // let test = backpack.map(|(a, b)| b
    //     //     .iter()
    //     //     .filter(|b| a.contains(b)));
    //     // println!("{}", test);
    // }

    // part 2

    for i in (0..arr.len()).step_by(3) {
        found_in_both_compartments.push(arr[i]
            .chars()
            .filter(|c| arr[i+1].contains(*c) && arr[i+2].contains(*c))
            .next()
            .unwrap());
    } 

    let mut final_score: u32 = 0;

    for character in found_in_both_compartments {
        let ind_of_value = values.iter().position(|x| x == &character).unwrap();
        final_score = final_score + ind_of_value as u32 + 1
    }

    println!("Final score: {}", final_score);
    // for elem in rooms {
    //     println!("{}", elem);

    // }
    // arr.iter().map(|l| l.split_at(l.len() / 2))
    //     .map(|(a, b)| b
    //     .filter(|b| a.contains(b)));
}
