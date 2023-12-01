function keepTrackOnTourStops(input) {
    let tourStops = input.shift();
    let currentCommandLine = input.shift();
    while (currentCommandLine !== 'Travel') {
        let [command, param1, param2] = currentCommandLine.split(':');
        switch (command) {
            case 'Add Stop': param1 = Number(param1);
                if (param1 >= 0 && param1 < tourStops.length) {
                    let part1 = tourStops.slice(0, param1);
                    let part2 = tourStops.slice(param1);
                    tourStops = part1 + param2 + part2;
                }

                console.log(tourStops);
                break;
            case 'Remove Stop': param1 = Number(param1); param2 = Number(param2);
                if (param1 >= 0 && param1 < tourStops.length && param2 >= 0 && param2 < tourStops.length) {
                    let part1 = tourStops.slice(0, param1);
                    let part2 = tourStops.slice(param2 + 1);
                    tourStops = part1 + part2;
                }

                console.log(tourStops);
                break;
            case 'Switch': tourStops = tourStops.split(param1).join(param2); console.log(tourStops); break;
        }
        currentCommandLine = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${tourStops}`);
}

keepTrackOnTourStops(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);

// keepTrackOnTourStops(["Albania:Bulgaria:Cyprus:Deuchland",
//     "Add Stop:3:Nigeria",
//     "Remove Stop:4:8",
//     "Switch:Albania: Azərbaycan",
//     "Travel"]);
