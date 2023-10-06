function createLoadingBar(percentage) {
    let loadingBar = percentage === 100 ? `100% Complete!\n[${'%'.repeat(10)}]` : `${percentage}% [${'%'.repeat(percentage / 10)}${'.'.repeat(10 - percentage/10)}]\nStill loading...`;
    console.log(loadingBar);
}

createLoadingBar(30);