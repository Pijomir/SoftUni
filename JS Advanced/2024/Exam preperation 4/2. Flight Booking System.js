class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        const currentFlight = this.flights.find(f => f.flightNumber === flightNumber);

        if (currentFlight) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        } else {
            this.flights.push({ flightNumber, destination, departureTime, price });
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        }
    }

    bookFlight(passengerName, flightNumber) {
        const currentFlight = this.flights.find(f => f.flightNumber === flightNumber);
        if (!currentFlight) {
            return `Flight ${flightNumber} is not available for booking.`;
        } else {
            this.bookings.push({ passengerName, flightNumber });
            this.bookingsCount++;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
        }
    }

    cancelBooking(passengerName, flightNumber) {
        const currentBooking = this.bookings.find(b => b.passengerName === passengerName && b.flightNumber === flightNumber);
        if (!currentBooking) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        } else {
            this.bookings = this.bookings.filter(b => b !== currentBooking);
            this.bookingsCount--;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
        }
    }

    showBookings(criteria) {
        if (this.bookings.length === 0) {
            throw new Error(`No bookings have been made yet.`);
        }

        switch (criteria) {
            case 'all':
                let firstPart = `All bookings(${this.bookingsCount}):\n`;
                let secondPart = this.bookings.map(b => `${b.passengerName} booked for flight ${b.flightNumber}.`).join('\n');
                return firstPart + secondPart;
            case 'cheap':
                let cheapBookings = [];
                for (let booking of this.bookings) {
                    let currentFlight = this.flights.find(f => f.flightNumber === booking.flightNumber);
                    if (currentFlight.price <= 100) {
                        cheapBookings.push(booking);
                    }
                }

                if (cheapBookings.length === 0) {
                    return "No cheap bookings found.";
                }

                let firstLine = 'Cheap bookings:\n';
                let secondLine = cheapBookings.map(b => `${b.passengerName} booked for flight ${b.flightNumber}.`).join('\n');
                return firstLine + secondLine;
            case 'expensive':
                let expensiveBookings = [];
                for (let booking of this.bookings) {
                    let currentFlight = this.flights.find(f => f.flightNumber === booking.flightNumber);
                    if (currentFlight.price > 100) {
                        expensiveBookings.push(booking);
                    }
                }

                if (expensiveBookings.length === 0) {
                    return "No expensive bookings found.";
                }

                let firstRow = "Expensive bookings:\n";
                let secondRow = expensiveBookings.map(b => `${b.passengerName} booked for flight ${b.flightNumber}.`).join('\n');
                return firstRow + secondRow;
        }
    }
}

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));

