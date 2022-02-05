let delay = 100;
const timeout = function(positions) {
    for(let position of positions)
    {
        setTimeout(() => {
            process.stdout.write(position);
        }, delay) 
        delay = delay + 200;
    }   
}
const positions = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
timeout(positions);
