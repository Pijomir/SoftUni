function addAndRemoveElements(commands) {
    // let result = [];
    // for (let i = 0; i < commands.length; i++) {
    //     commands[i] === 'add' ? result.push(i + 1) : result.pop();
    // }

    // return result.length === 0 ? 'Empty' : result.join('\n');
    let result = commands.reduce((acc, val, idx) => {
        if (val === 'add') {
            acc.push(idx + 1);
        } else {
            acc.pop();
        }
        return acc;
    }, []);
    
    return result.length ? result.join('\n') : 'Empty';
}

console.log(addAndRemoveElements(['add', 
'add', 
'add', 
'add']));