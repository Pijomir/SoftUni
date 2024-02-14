function storeAndSortTickets(ticketsInput, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];
    ticketsInput.forEach(ticketInfo => {
        let [destination, price, status] = ticketInfo.split('|');
        let currentTicket = new Ticket(destination, Number(price), status);
        result.push(currentTicket);
    });

    let sortedResult = result.sort((a, b) => {
        if (criteria === 'price') {
            return a[criteria] - b[criteria];
        } 

        return a[criteria].localeCompare(b[criteria]);
    });

    return sortedResult;
}

console.log(storeAndSortTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));