fn main() {
    let mut stacks: Vec<Vec<String>> = Vec::new();
    let test = include_str!("../input.txt")
        .lines().enumerate()
        .map(|(lineindex, l)| {
            let mut instruction_start_index = usize::MAX;
            for (ind, testchar) in l.chars().enumerate() {
                if ind == 0 {
                    if testchar == 'm'{
                        instruction_start_index = lineindex;
                        break;
                    }
                }
                else if (ind - 1) % 4 == 0 && testchar.is_alphabetic() {
                    // ugly af, clean hvis du gidder hehe
                    if stacks.len() <= (ind-1) / 4 {
                        for _ in stacks.len()..(ind-1) / 4 + 1 {
                            stacks.push(Vec::new());
                        }
                    }
                    stacks[(ind-1) / 4].insert(0, testchar.to_string());
                }
            }

            if lineindex >= instruction_start_index {
                let mut indices = l.split(' ');
                indices.next();
                let boxes_moved = indices.next().unwrap().parse::<usize>().unwrap();
                indices.next();
                let from = indices.next().unwrap().parse::<usize>().unwrap()-1;
                indices.next();
                let  to = indices.next().unwrap().parse::<usize>().unwrap()-1;
                // Part 1
                // for _ in 0 .. boxes_moved {
                //     let moving_box = stacks[from].pop().unwrap();
                //     stacks[to].push(moving_box);
                // }

                // Part 2
                let location = stacks[from].len()-boxes_moved;
                let stack = stacks[from].split_off(location);
                stacks[to].extend(stack);
            }
        }).count(); // to make sure it runs for testing

    println!("testoutput: {}", test);

    for stack in stacks {
        print!("{}", stack.last().unwrap());
    }

}
